import { connectToDatabase } from '../../../lib/mongodb';
import jwt from 'jsonwebtoken';

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

    const { db } = await connectToDatabase();
    const userId = decoded.userId;

    // Get all conversations for the user, sorted by most recent
    const conversations = await db.collection('conversations')
      .find({ userId: userId })
      .sort({ updatedAt: -1 })
      .limit(50) // Limit to last 50 conversations
      .toArray();

    // Format the conversations for the frontend
    const formattedConversations = conversations.map(conv => ({
      id: conv._id.toString(),
      title: conv.title,
      lastMessage: conv.messages.length > 0 ? conv.messages[conv.messages.length - 1].content : '',
      timestamp: conv.updatedAt,
      messageCount: conv.messages.length
    }));

    res.status(200).json({
      conversations: formattedConversations
    });

  } catch (error) {
    console.error('Chat history API error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}