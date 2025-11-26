import '../styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from "@vercel/analytics/next";

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

  // Load Vapi AI widget globally on all pages
  useEffect(() => {
    const initVapiWidget = () => {
      // Check if widget already exists
      const existingWidget = document.getElementById('vapi-widget-global');
      if (existingWidget) {
        return;
      }

      // Get API keys from environment variables
      const vapiPublicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
      const vapiAssistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;

      if (!vapiPublicKey || !vapiAssistantId) {
        console.error('Vapi API keys not found in environment variables');
        return;
      }

      // Create widget container
      const widgetContainer = document.createElement('div');
      widgetContainer.id = 'vapi-widget-global';
      widgetContainer.style.cssText = 'position: fixed !important; bottom: 20px !important; right: 20px !important; z-index: 99999 !important; pointer-events: auto !important; display: block !important; visibility: visible !important;';
      
      // Create the widget element
      const widget = document.createElement('vapi-widget');
      widget.setAttribute('public-key', vapiPublicKey);
      widget.setAttribute('assistant-id', vapiAssistantId);
      widget.setAttribute('mode', 'voice');
      widget.setAttribute('theme', 'dark');
      widget.setAttribute('base-bg-color', '#000000');
      widget.setAttribute('accent-color', '#14B8A6');
      widget.setAttribute('cta-button-color', '#000000');
      widget.setAttribute('cta-button-text-color', '#ffffff');
      widget.setAttribute('border-radius', 'large');
      widget.setAttribute('size', 'full');
      widget.setAttribute('position', 'bottom-right');
      widget.setAttribute('title', 'NeuroSync AI');
      widget.setAttribute('start-button-text', 'Start');
      widget.setAttribute('end-button-text', 'End Call');
      widget.setAttribute('chat-first-message', 'Hey, How can I help you today?');
      widget.setAttribute('chat-placeholder', 'Type your message...');
      widget.setAttribute('voice-show-transcript', 'true');
      widget.setAttribute('consent-required', 'true');
      widget.setAttribute('consent-title', 'Terms and conditions');
      widget.setAttribute('consent-content', 'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.');
      widget.setAttribute('consent-storage-key', 'vapi_widget_consent');
      
      widgetContainer.appendChild(widget);
      document.body.appendChild(widgetContainer);
    };

    // Load Vapi script
    const existingScript = document.getElementById('vapi-widget-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
      script.type = 'text/javascript';
      script.id = 'vapi-widget-script';
      script.onload = initVapiWidget;
      document.head.appendChild(script);
    } else {
      initVapiWidget();
    }
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