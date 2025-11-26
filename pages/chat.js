import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Chat = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);
  const [activeChat, setActiveChat] = useState('new'); // 'new', 'history', 'settings'
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      toast.error('Please login to access chat');
      router.push('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
  }, [router]);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    // Add some sample messages
    setMessages([
      {
        id: 1,
        type: 'bot',
        text: 'Hello! I am NeuroSync AI, your personal health companion. How can I assist you today?',
        timestamp: new Date(),
      }
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Helper function to get auth token
  const getAuthToken = () => {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  };

  // Helper function to make authenticated API calls
  const makeAuthenticatedRequest = async (url, options = {}) => {
    const token = getAuthToken();
    if (!token) {
      toast.error('Please log in to continue');
      router.push('/login');
      return null;
    }

    return fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers
      }
    });
  };

  // Load chat history
  const loadChatHistory = async () => {
    try {
      const response = await makeAuthenticatedRequest('/api/chat/history');
      if (!response) return;

      if (response.ok) {
        const data = await response.json();
        setConversations(data.conversations);
      } else {
        toast.error('Failed to load chat history');
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
      toast.error('Failed to load chat history');
    }
  };

  // Load specific conversation
  const loadConversation = async (conversationId) => {
    try {
      const response = await makeAuthenticatedRequest(`/api/chat/conversation/${conversationId}`);
      if (!response) return;

      if (response.ok) {
        const data = await response.json();
        setMessages(data.conversation.messages);
        setCurrentConversationId(conversationId);
        setActiveChat('new');
        setShowHistory(false);
      } else {
        toast.error('Failed to load conversation');
      }
    } catch (error) {
      console.error('Error loading conversation:', error);
      toast.error('Failed to load conversation');
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleNewChat = () => {
    setActiveChat('new');
    setCurrentConversationId(null);
    setShowHistory(false);
    setMessages([
      {
        id: 1,
        type: 'bot',
        text: 'Hello! I am NeuroSync AI, your personal health companion. How can I assist you today?',
        timestamp: new Date(),
      }
    ]);
    setNewMessage('');
  };
  const handleHistory = async () => {
    setActiveChat('history');
    setShowHistory(true);
    await loadChatHistory();
  };

  const handleSettings = () => {
    setActiveChat('settings');
    router.push('/settings');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: newMessage,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    const messageText = newMessage;
    setNewMessage('');
    setIsLoading(true);
    
    try {
      const response = await makeAuthenticatedRequest('/api/chat/message', {
        method: 'POST',
        body: JSON.stringify({
          message: messageText,
          conversationId: currentConversationId
        })
      });

      if (!response) {
        setIsLoading(false);
        return;
      }

      if (response.ok) {
        const data = await response.json();
        
        // Check for crisis situation and redirect immediately
        if (data.crisisDetected || data.isCrisis) {
          toast.error('Crisis detected. Redirecting to crisis support...', {
            autoClose: 3000,
          });
          setTimeout(() => {
            router.push('/crisis');
          }, 2000);
          setIsLoading(false);
          return;
        }
        
        // Update conversation ID if it's a new conversation
        if (data.conversationId && !currentConversationId) {
          setCurrentConversationId(data.conversationId);
        }
        
        // Add the bot response with sentiment
        const botMessage = {
          id: data.botMessage.id,
          type: 'bot',
          text: data.response,
          timestamp: data.botMessage.timestamp,
          sentiment: data.sentiment,
        };
        
        setMessages(prev => [...prev, botMessage]);
        
        // Show sentiment notification
        if (data.sentiment === 'positive') {
          toast.success('😊 Positive sentiment detected', { autoClose: 2000 });
        } else if (data.sentiment === 'negative') {
          toast.warning('😔 Negative sentiment detected - Remember, you\'re not alone', { autoClose: 3000 });
        } else {
          toast.info('😐 Neutral sentiment detected', { autoClose: 2000 });
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <Layout title="Chat | NeuroSync" hideFooter={true} 
      chatHandlers={{ handleNewChat, handleHistory, handleSettings, activeChat }}>
      <div className="flex h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-900">
        {/* Main Chat Area - Full Width */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {showHistory ? (
            /* Chat History View */
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">Chat History</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">Select a conversation to continue</p>
              </div>
              
              {conversations.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No conversations yet</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Start your first conversation with NeuroSync AI</p>
                  <button onClick={handleNewChat} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700">
                    Start New Chat
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {conversations.map((conversation) => (
                    <div 
                      key={conversation.id} 
                      onClick={() => loadConversation(conversation.id)}
                      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {conversation.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 truncate">
                            {conversation.lastMessage}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                          <span>{conversation.messageCount} messages</span>
                          <span>•</span>
                          <span>{new Date(conversation.timestamp).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Chat Messages View */
            <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-4 md:space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-end space-x-2 md:space-x-3 max-w-[85%] md:max-w-2xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <div className="flex-shrink-0">
                    {message.type === 'bot' ? (
                      <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary text-white flex items-center justify-center">
                        <svg className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                        <span className="text-sm md:text-base font-medium">{user?.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className={`rounded-2xl px-3 py-3 md:px-6 md:py-4 max-w-full ${
                    message.type === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}>
                    <p className="text-sm md:text-base break-words">{message.text}</p>
                    {message.type === 'bot' && message.sentiment && (
                      <div className="mt-2 flex items-center">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          message.sentiment === 'positive' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                            : message.sentiment === 'negative'
                            ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                            : 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100'
                        }`}>
                          {message.sentiment === 'positive' && '😊 Positive'}
                          {message.sentiment === 'negative' && '😔 Negative'}
                          {message.sentiment === 'neutral' && '😐 Neutral'}
                        </span>
                      </div>
                    )}
                    <p className="text-xs text-gray-400 dark:text-gray-300 mt-2">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-3 max-w-2xl">
                  <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl px-6 py-4">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
            </div>
          )}

          {/* Message input - only show when not in history view */}
          {!showHistory && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-3 md:p-4 bg-white dark:bg-gray-800">
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 md:space-x-4">
              <div className="flex-1 flex">
                <textarea
                  rows="1"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="block w-full rounded-l-xl border-0 py-2 md:py-3 px-3 md:px-4 text-sm md:text-base text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-gray-700 dark:placeholder-gray-400 resize-none"
                />
                <div className="flex">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center justify-center px-4 md:px-6 rounded-r-xl bg-primary text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-colors duration-150"
                  >
                    <svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Chat;