# NeuroSync Setup Instructions

## Environment Variables Setup

Before running the application, you need to create a `.env` file with your actual configuration values. 

⚠️ **IMPORTANT SECURITY NOTE**: The `.env` file is not tracked by Git and should NEVER be committed to version control as it contains sensitive information.

### Creating Your .env File

1. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

2. Edit the `.env` file with your actual values:

### 1. MongoDB Configuration
Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
```

### 2. Groq API Configuration
Replace `your_groq_api_key_here` with your actual Groq API key:
```
GROQ_API_KEY=your_actual_groq_api_key
```
You can get your Groq API key from: https://console.groq.com/

### 3. JWT Secret
Replace `your_jwt_secret_key_here` with a secure random string:
```
JWT_SECRET=your_secure_random_jwt_secret_key
```

## Complete .env File Example
```bash
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/neurosync
MONGODB_DB=neurosync

# JWT Configuration
JWT_SECRET=your_secure_random_jwt_secret_key_at_least_32_characters_long

# Groq API Configuration
GROQ_API_KEY=gsk_your_groq_api_key_here

# Next.js Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Database Collections

The application will automatically create the following MongoDB collections:
- `users` - User accounts and authentication
- `conversations` - Chat conversations and message history

## Running the Application

1. Install dependencies:
```bash
npm install
```

2. Configure your `.env` file with the values above

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Features Implemented

✅ **Groq AI Integration**: Real AI responses using Groq's LLaMA model
✅ **Conversation Storage**: All chats are saved to MongoDB
✅ **Chat History**: Users can view and continue previous conversations
✅ **Authentication**: Secure user system with JWT tokens
✅ **Environment Variables**: Secure configuration management
✅ **Response Cleaning**: AI responses are automatically cleaned to remove thinking tags

## API Endpoints

- `POST /api/chat/message` - Send message and get AI response
- `GET /api/chat/history` - Get user's conversation list
- `GET /api/chat/conversation/[id]` - Get specific conversation
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

## Troubleshooting

1. **Groq API Errors**: Make sure your GROQ_API_KEY is valid and you have credits
2. **MongoDB Connection**: Ensure your MONGODB_URI is correct and the database is accessible
3. **Authentication Issues**: Check that JWT_SECRET is set and consistent

## Security Notes

- Never commit your `.env` file to version control
- Use strong, unique values for JWT_SECRET
- Regularly rotate your API keys
- Use MongoDB connection strings with restricted user permissions