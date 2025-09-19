import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Demo = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      content: "Hi there! I'm NeuroSync, your AI mental health companion. How are you feeling today?",
      timestamp: new Date().toISOString()
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Sample responses for the demo
  const demoResponses = {
    anxious: ["I'm sorry to hear you're feeling anxious. That can be really challenging. Would you like to try a quick breathing exercise together?", 
              "Anxiety is something many people experience. Could you share a bit more about what's making you feel anxious?"],
    sad: ["I understand feeling sad can be difficult. Would you like to talk more about what's going on?", 
          "I'm here for you. Sometimes expressing your feelings can help. Would you like to explore some gentle mood-lifting activities?"],
    stressed: ["Stress can be overwhelming. Let's take a moment to identify what's causing your stress so we can address it together.", 
               "I hear you. Stress affects us both mentally and physically. Would a guided relaxation exercise be helpful right now?"],
    happy: ["It's wonderful to hear you're feeling happy! What's contributing to your positive mood today?", 
            "That's great! Recognizing and appreciating positive moments is so important for our mental wellbeing."],
    default: ["Thank you for sharing that with me. Could you tell me more about how that's affecting you?", 
              "I appreciate you opening up. How long have you been feeling this way?", 
              "That's important to address. What would be most helpful for you right now?"]
  };
  
  // Scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const lowerCaseInput = inputMessage.toLowerCase();
      let responseText;
      
      // Simple keyword matching for demo purposes
      if (lowerCaseInput.includes('anxious') || lowerCaseInput.includes('anxiety')) {
        responseText = demoResponses.anxious[Math.floor(Math.random() * demoResponses.anxious.length)];
      } else if (lowerCaseInput.includes('sad') || lowerCaseInput.includes('unhappy') || lowerCaseInput.includes('depressed')) {
        responseText = demoResponses.sad[Math.floor(Math.random() * demoResponses.sad.length)];
      } else if (lowerCaseInput.includes('stress') || lowerCaseInput.includes('stressed') || lowerCaseInput.includes('overwhelmed')) {
        responseText = demoResponses.stressed[Math.floor(Math.random() * demoResponses.stressed.length)];
      } else if (lowerCaseInput.includes('happy') || lowerCaseInput.includes('good') || lowerCaseInput.includes('great')) {
        responseText = demoResponses.happy[Math.floor(Math.random() * demoResponses.happy.length)];
      } else {
        responseText = demoResponses.default[Math.floor(Math.random() * demoResponses.default.length)];
      }
      
      const newAiMessage = {
        id: messages.length + 2,
        sender: 'ai',
        content: responseText,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, newAiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <Layout title="Demo | NeuroSync">
      <div className="bg-gray-50 dark:bg-gray-800 min-h-screen transition-colors duration-200">
        {/* Header Section */}
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">NeuroSync Demo</h1>
                <p className="mt-1 text-gray-500 dark:text-gray-300">
                  Experience a preview of our AI mental health companion
                </p>
              </div>
              <div className="flex space-x-4">
                <Link 
                  href="/features"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 transition-colors duration-200"
                >
                  Learn More
                </Link>
                <Link 
                  href="/signup"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-200">
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">NeuroSync AI</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Online • Demo Mode</p>
                </div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="px-6 py-4 h-96 overflow-y-auto bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
              {messages.map((message) => (
                <div key={message.id} className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
                    message.sender === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' 
                        ? 'text-indigo-100' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="max-w-xs md:max-w-md rounded-lg px-4 py-2 bg-gray-200 dark:bg-gray-700">
                    <div className="flex space-x-1 items-center">
                      <div className="h-2 w-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="h-2 w-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat Input */}
            <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-200">
              <form onSubmit={handleSubmit}>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    className="flex-1 focus:ring-primary focus:border-primary block w-full rounded-md sm:text-sm border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={handleInputChange}
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Demo Instructions */}
          <div className="mt-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Demo Instructions</h2>
            <div className="prose prose-sm text-gray-500 dark:text-gray-300">
              <p>
                This is a simplified demo of NeuroSync AI. In this demo, you can:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Type messages to the AI and receive responses</li>
                <li>Try mentioning emotions like "anxious," "sad," "stressed," or "happy"</li>
                <li>Experience a preview of how our AI responds with empathy</li>
              </ul>
              <p className="mt-4">
                The full version of NeuroSync offers many more advanced features, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Personalized mental health insights based on your conversations</li>
                <li>Guided exercises for stress, anxiety, and depression</li>
                <li>Mood tracking and progress visualization</li>
                <li>End-to-end encryption for complete privacy</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/signup"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 transition-colors duration-200"
                >
                  Try the Full Experience
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Demo;