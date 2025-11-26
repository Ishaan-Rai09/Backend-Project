import '../styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  // This script helps prevent dark mode flickering during page load
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Debug Vapi widget
  useEffect(() => {
    console.log('🔍 Starting Vapi widget initialization...');
    
    // Load Vapi script manually
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
    script.async = true;
    script.onload = () => {
      console.log('✅ Vapi script loaded from GitHub CDN');
      
      // Check if vapiSDK exists
      if (typeof window.vapiSDK !== 'undefined') {
        console.log('✅ vapiSDK is available');
        
        // Initialize Vapi
        try {
          const vapiInstance = window.vapiSDK.run({
            apiKey: 'e982e81f-bb7d-43d0-be88-2baff42a59fb',
            assistant: '123cca3c-ab3d-4e7f-8511-7b8d044823b8',
            config: {
              mode: 'voice',
              theme: 'dark',
              baseBgColor: '#000000',
              accentColor: '#14B8A6',
              ctaButtonColor: '#000000',
              ctaButtonTextColor: '#ffffff',
              borderRadius: 'large',
              size: 'full',
              position: 'bottom-right',
              title: 'NeuroSync AI',
              startButtonText: 'Start',
              endButtonText: 'End Call',
              chatFirstMessage: 'Hey, How can I help you today?',
              chatPlaceholder: 'Type your message...',
              voiceShowTranscript: true,
              consentRequired: true,
              consentTitle: 'Terms and conditions',
              consentContent: 'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.',
              consentStorageKey: 'vapi_widget_consent'
            }
          });
          console.log('✅ Vapi instance created:', vapiInstance);
        } catch (error) {
          console.error('❌ Error initializing Vapi:', error);
        }
      } else {
        console.error('❌ vapiSDK not found on window object');
      }
    };
    
    script.onerror = (error) => {
      console.error('❌ Failed to load Vapi script from GitHub CDN:', error);
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Head>
        {/* Add a script to handle dark mode on initial page load, before React hydrates */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var savedTheme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `
        }} />
      </Head>
      
      
      <Component {...pageProps} />
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Analytics />
    </>
  );
}

export default MyApp;