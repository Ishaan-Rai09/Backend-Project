import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeContext';
import { useRouter } from 'next/router';

const Navbar = ({ chatHandlers }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    setUser(null);
    setIsDropdownOpen(false);
    
    // Redirect to homepage
    router.push('/');
  };

  // Check if we're on the chat page
  const isOnChatPage = chatHandlers !== undefined;

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary dark:text-white">
                NeuroSync
              </Link>
            </div>
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              {!isOnChatPage ? (
                <>
                  <Link href="/features" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium transition-colors duration-200">
                    Features
                  </Link>
                  <Link href="/how-it-works" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium transition-colors duration-200">
                    How It Works
                  </Link>
                  <Link href="/pricing" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium transition-colors duration-200">
                    Pricing
                  </Link>
                  <Link href="/blog" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium transition-colors duration-200">
                    Blog
                  </Link>
                  <Link href="/contact" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium transition-colors duration-200">
                    Contact
                  </Link>
                  <Link href="/chat" className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary text-sm font-medium transition-colors duration-200">
                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Chat
                  </Link>
                </>
              ) : (
                <>
                  {/* Chat page buttons */}
                  <button 
                    onClick={chatHandlers.handleNewChat}
                    className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium transition-colors duration-200 ${
                      chatHandlers.activeChat === 'new'
                        ? 'border-primary text-primary dark:text-white'
                        : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-primary'
                    }`}
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    New Chat
                  </button>
                  <button 
                    onClick={chatHandlers.handleHistory}
                    className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium transition-colors duration-200 ${
                      chatHandlers.activeChat === 'history'
                        ? 'border-primary text-primary dark:text-white'
                        : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-primary'
                    }`}
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    History
                  </button>
                  <button 
                    onClick={chatHandlers.handleSettings}
                    className={`inline-flex items-center px-3 py-2 border-b-2 text-sm font-medium transition-colors duration-200 ${
                      chatHandlers.activeChat === 'settings'
                        ? 'border-primary text-primary dark:text-white'
                        : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-primary'
                    }`}
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Dark/Light Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
              aria-label="Toggle dark/light mode"
            >
              {darkMode ? (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            {user ? (
              // User is logged in - show profile
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    id="user-menu-button"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{user.name}</span>
                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                {isDropdownOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">
                      Your Profile
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" role="menuitem">
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // User is not logged in - show login/signup buttons
              <>
                <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                  Login
                </Link>
                <Link href="/signup" className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                  Start Free
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu and toggle button container */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Dark/Light Theme Toggle - Mobile */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle dark/light mode"
            >
              {darkMode ? (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            
            {/* Mobile user menu if logged in */}
            {user && (
              <div className="relative">
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  onClick={toggleDropdown}
                >
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                </button>
                
                {isDropdownOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    role="menu"
                    aria-orientation="vertical"
                    tabIndex="-1"
                  >
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="pt-2 pb-3 space-y-1 border-gray-200 dark:border-gray-700">
            {!isOnChatPage ? (
              <>
                <Link href="/features" className="block pl-3 pr-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-4 border-transparent hover:border-primary text-base font-medium">
                  Features
                </Link>
                <Link href="/how-it-works" className="block pl-3 pr-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-4 border-transparent hover:border-primary text-base font-medium">
                  How It Works
                </Link>
                <Link href="/pricing" className="block pl-3 pr-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-4 border-transparent hover:border-primary text-base font-medium">
                  Pricing
                </Link>
                <Link href="/blog" className="block pl-3 pr-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-4 border-transparent hover:border-primary text-base font-medium">
                  Blog
                </Link>
                <Link href="/contact" className="block pl-3 pr-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-4 border-transparent hover:border-primary text-base font-medium">
                  Contact
                </Link>
                <Link href="/chat" className="block pl-3 pr-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-l-4 border-transparent hover:border-primary text-base font-medium">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Chat
                  </div>
                </Link>
              </>
            ) : (
              <>
                {/* Chat page mobile buttons */}
                <button 
                  onClick={() => { chatHandlers.handleNewChat(); toggleMenu(); }}
                  className={`w-full text-left block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    chatHandlers.activeChat === 'new'
                      ? 'bg-primary/10 text-primary border-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-transparent hover:border-primary'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    New Chat
                  </div>
                </button>
                <button 
                  onClick={() => { chatHandlers.handleHistory(); toggleMenu(); }}
                  className={`w-full text-left block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    chatHandlers.activeChat === 'history'
                      ? 'bg-primary/10 text-primary border-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-transparent hover:border-primary'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    History
                  </div>
                </button>
                <button 
                  onClick={() => { chatHandlers.handleSettings(); toggleMenu(); }}
                  className={`w-full text-left block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    chatHandlers.activeChat === 'settings'
                      ? 'bg-primary/10 text-primary border-primary'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-transparent hover:border-primary'
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </div>
                </button>
              </>
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="mt-3 space-y-1">
              {!user ? (
                <>
                  <Link href="/login" className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                    Login
                  </Link>
                  <Link href="/signup" className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <div className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300">
                    {user.name}
                  </div>
                  <Link href="/profile" className="block px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                    Your Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 