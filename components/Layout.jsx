import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider, useTheme } from './ThemeContext';

// Inner layout component that uses the theme context
const LayoutInner = ({ children, title = 'NeuroSync - AI Mental Health Companion' }) => {
  const { darkMode } = useTheme();
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="AI-powered mental health companion" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

// Outer layout component that provides the theme context
const Layout = ({ children, title }) => {
  return (
    <ThemeProvider>
      <LayoutInner title={title}>
        {children}
      </LayoutInner>
    </ThemeProvider>
  );
};

export default Layout; 