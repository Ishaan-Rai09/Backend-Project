import { connectToDatabase } from '../../../../lib/mongodb';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
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

    const { id } = req.query;
    
    if (!id) {
      return res.status(400).json({ message: 'Conversation ID is required' });
    }

    const { db } = await connectToDatabase();
    const userId = decoded.userId;

    // Get the specific conversation
    let conversationId;
    try {
      conversationId = new ObjectId(id);
    } catch (error) {
      return res.status(400).json({ message: 'Invalid conversation ID format' });
    }

    const conversation = await db.collection('conversations').findOne({
      _id: conversationId,
      userId: userId
    });

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    // Format messages for the frontend
    const formattedMessages = conversation.messages.map((msg, index) => ({
      id: `${conversation._id}_${index}`,
      type: msg.type === 'user' ? 'user' : 'bot',
      text: msg.content,
      timestamp: msg.timestamp
    }));

    res.status(200).json({
      conversation: {
        id: conversation._id.toString(),
        title: conversation.title,
        messages: formattedMessages,
        createdAt: conversation.createdAt,
        updatedAt: conversation.updatedAt
      }
    });

  } catch (error) {
    console.error('Get conversation API error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}