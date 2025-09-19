import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 py-16 sm:py-24 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Your AI Mental Health</span>
                <span className="block text-primary">Companion</span>
              </h1>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience personalized mental health support powered by advanced AI. Get instant emotional analysis, therapy guidance, and crisis support - all in one place.
              </p>
              <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link 
                      href="/chat" 
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out transform hover:-translate-y-1"
                    >
                      Start Your Journey
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link 
                      href="/demo" 
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-indigo-100 hover:bg-indigo-200 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Watch Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-2xl lg:max-w-md overflow-hidden transform transition duration-500 hover:scale-105 dark:ring-1 dark:ring-gray-700">
                <div className="relative block w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
                  <div className="relative w-full h-[400px]">
                    <Image
                      src="/images/neural-network.webp"
                      alt="NeuroSync AI Neural Network"
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                      className="rounded-lg"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-600/20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Comprehensive Mental Health Support
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              All the tools you need for better mental wellness
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Our AI-powered platform provides personalized support for your mental health journey.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* AI Therapy Chat */}
              <div className="relative bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 p-8 rounded-xl shadow-lg border transform transition duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute flex items-center justify-center h-14 w-14 rounded-full bg-indigo-100 text-primary -top-7 left-1/2 -ml-7">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white tracking-tight text-center">AI Therapy Chat</h3>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-300 text-center">
                  24/7 conversational support powered by advanced LLaMA 3 & AI technology. Get personalized guidance whenever you need it.
                </p>
                <div className="mt-6 text-center">
                  <Link href="/chat" className="inline-flex items-center text-primary hover:text-indigo-700 font-medium">
                    Try it now
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Emotion Analysis */}
              <div className="relative bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 p-8 rounded-xl shadow-lg border transform transition duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute flex items-center justify-center h-14 w-14 rounded-full bg-indigo-100 text-primary -top-7 left-1/2 -ml-7">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white tracking-tight text-center">Emotion Analysis</h3>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-300 text-center">
                  Real-time facial and voice mood detection for better emotional understanding and self-awareness.
                </p>
                <div className="mt-6 text-center">
                  <Link href="/chat" className="inline-flex items-center text-primary hover:text-indigo-700 font-medium">
                    Analyze your mood
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Crisis Support */}
              <div className="relative bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 p-8 rounded-xl shadow-lg border transform transition duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute flex items-center justify-center h-14 w-14 rounded-full bg-indigo-100 text-primary -top-7 left-1/2 -ml-7">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white tracking-tight text-center">Crisis Support</h3>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-300 text-center">
                  Immediate assistance and resources when you need them most. Access emergency help 24/7.
                </p>
                <div className="mt-6 text-center">
                  <Link href="/crisis" className="inline-flex items-center text-primary hover:text-indigo-700 font-medium">
                    Get help now
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Your Journey to Better Mental Health
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Simple steps to start your wellness journey
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Begin your path to improved mental well-being in just a few easy steps.
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border-gray-100 dark:border-gray-600 border transform transition duration-500 hover:shadow-xl">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-primary mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="absolute -top-4 -left-4 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-lg font-bold">1</span>
                <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-white text-center mb-2">Create Account</h3>
                <p className="text-base text-gray-500 dark:text-gray-300 text-center mb-4">
                  Sign up in seconds and complete your initial assessment to get personalized care.
                </p>
                <Link href="/signup" className="mt-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-indigo-50 hover:bg-indigo-100 dark:text-white dark:bg-primary dark:hover:bg-indigo-700">
                  Sign up now
                </Link>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border-gray-100 dark:border-gray-600 border transform transition duration-500 hover:shadow-xl">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-primary mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="absolute -top-4 -left-4 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-lg font-bold">2</span>
                <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-white text-center mb-2">Start Chatting</h3>
                <p className="text-base text-gray-500 dark:text-gray-300 text-center mb-4">
                  Connect with your AI therapist anytime, anywhere. Get support when you need it most.
                </p>
                <Link href="/chat" className="mt-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-indigo-50 hover:bg-indigo-100 dark:text-white dark:bg-primary dark:hover:bg-indigo-700">
                  Start chatting
                </Link>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border-gray-100 dark:border-gray-600 border transform transition duration-500 hover:shadow-xl">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-primary mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="absolute -top-4 -left-4 bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center text-lg font-bold">3</span>
                <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-white text-center mb-2">Track Progress</h3>
                <p className="text-base text-gray-500 dark:text-gray-300 text-center mb-4">
                  Monitor your mental wellness journey with detailed analytics and insights.
                </p>
                <Link href="/chat" className="mt-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-indigo-50 hover:bg-indigo-100 dark:text-white dark:bg-primary dark:hover:bg-indigo-700">
                  View analytics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What our users are saying
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md transform transition duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                  alt="User testimonial"
                  loading="lazy"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Emily K.</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"NeuroSync has been a lifesaver during my anxiety episodes. Having access to support 24/7 gives me such peace of mind. The emotion analysis is surprisingly accurate!"</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md transform transition duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                  alt="User testimonial"
                  loading="lazy"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Marcus T.</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"I was skeptical about AI therapy, but the personalized insights NeuroSync provides are incredibly helpful. The breathing exercises have become part of my daily routine."</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md transform transition duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img 
                  className="h-12 w-12 rounded-full object-cover" 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                  alt="User testimonial"
                  loading="lazy"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Sophia J.</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"The crisis support feature helped me through a panic attack last month. The grounding techniques are evidence-based and actually work. Thank you NeuroSync!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Start Your Mental Wellness Journey Today</span>
            <span className="block text-indigo-100 text-xl mt-2">Join thousands of users who've improved their mental well-being with NeuroSync.</span>
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row lg:mt-0 lg:flex-shrink-0 gap-4">
            <div className="inline-flex rounded-md shadow">
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
              >
                Start Free Trial
              </Link>
            </div>
            <div className="inline-flex rounded-md shadow">
              <Link 
                href="/learn-more"
                className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-600 transition duration-150 ease-in-out"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home; 