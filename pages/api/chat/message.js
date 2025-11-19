import { connectToDatabase } from '../../../lib/mongodb';
import { generateAIResponse, analyzeSentiment } from '../../../lib/groq';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Verify authentication
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const { message, conversationId } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ message: 'Message is required' });
    }

    const { db } = await connectToDatabase();
    const userId = decoded.userId;

    // Get conversation history if conversationId is provided
    let conversationHistory = [];
    let currentConversationId = conversationId;

    if (conversationId) {
      const existingConversation = await db.collection('conversations').findOne({
        _id: conversationId,
        userId: userId
      });
      
      if (existingConversation) {
        // Convert messages to the format expected by Groq
        conversationHistory = existingConversation.messages.map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }));
      }
    }

    // Analyze sentiment of user message
    const sentimentAnalysis = await analyzeSentiment(message);

    // Generate AI response using Groq
    const aiResponse = await generateAIResponse(message, conversationHistory);

    // Create new conversation if no conversationId provided
    if (!currentConversationId) {
      const newConversation = await db.collection('conversations').insertOne({
        userId: userId,
        title: message.substring(0, 50) + (message.length > 50 ? '...' : ''),
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date()
      });
      currentConversationId = newConversation.insertedId;
    }

    // Add both user message and AI response to the conversation
    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    const botMessage = {
      type: 'assistant',
      content: aiResponse,
      timestamp: new Date()
    };

    await db.collection('conversations').updateOne(
      { _id: currentConversationId },
      {
        $push: {
          messages: { $each: [userMessage, botMessage] }
        },
        $set: { updatedAt: new Date() }
      }
    );

    res.status(200).json({
      response: aiResponse,
      conversationId: currentConversationId,
      sentiment: sentimentAnalysis.sentiment,
      isCrisis: sentimentAnalysis.isCrisis,
      crisisDetected: sentimentAnalysis.crisisDetected,
      userMessage: {
        id: Date.now(),
        type: 'user',
        text: message,
        timestamp: userMessage.timestamp
      },
      botMessage: {
        id: Date.now() + 1,
        type: 'bot',
        text: aiResponse,
        timestamp: botMessage.timestamp
      }
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Handle specific Groq API errors
    if (error.message.includes('Groq')) {
      return res.status(503).json({ message: error.message });
    }
    
    res.status(500).json({ message: 'Internal server error' });
  }
}