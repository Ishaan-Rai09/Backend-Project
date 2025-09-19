import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const CrisisPage = () => {
  return (
    <Layout title="NeuroSync - Crisis Support">
      <div className="min-h-screen bg-red-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
            <div className="flex items-center">
              <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h1 className="text-xl font-bold text-gray-900">NeuroSync Crisis Support</h1>
            </div>
            <Link href="/chat">
              <span className="inline-flex items-center px-4 py-2 border border-red-600 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                Emergency Call
              </span>
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Crisis Alert */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-red-600">Crisis Alert Detected</h3>
                <div className="mt-2 text-sm text-gray-700">
                  <p>We've noticed signs of distress in your recent interactions. Help is available 24/7. You're not alone.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Emergency Hotlines */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h2 className="text-lg font-medium text-gray-900">Emergency Hotlines</h2>
                </div>
              </div>
              <ul className="divide-y divide-gray-200">
                <li className="px-6 py-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-900">National Crisis Line</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      988
                    </span>
                  </div>
                </li>
                <li className="px-6 py-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-900">Suicide Prevention</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      1-800-273-8255
                    </span>
                  </div>
                </li>
                <li className="px-6 py-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-gray-900">Crisis Text Line</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Text HOME to 741741
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Grounding Techniques */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="text-lg font-medium text-gray-900">Instant Grounding Techniques</h2>
                </div>
              </div>
              <div className="px-6 py-4 space-y-4">
                <div className="bg-blue-50 rounded-md p-4">
                  <h3 className="text-sm font-medium text-blue-800">5-4-3-2-1 Method</h3>
                  <p className="mt-1 text-sm text-gray-700">
                    Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste
                  </p>
                </div>
                <div className="bg-green-50 rounded-md p-4">
                  <h3 className="text-sm font-medium text-green-800">Deep Breathing</h3>
                  <p className="mt-1 text-sm text-gray-700">
                    Breathe in for 4 counts, hold for 4, exhale for 4
                  </p>
                </div>
                <div className="bg-purple-50 rounded-md p-4">
                  <h3 className="text-sm font-medium text-purple-800">Body Scan</h3>
                  <p className="mt-1 text-sm text-gray-700">
                    Focus attention slowly from head to toe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Contacts */}
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h2 className="text-lg font-medium text-gray-900">Trusted Contacts</h2>
              </div>
              <button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                + Add Contact
              </button>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Family Member</p>
                    </div>
                  </div>
                  <button className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
              </li>
              <li className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Dr. Michael Chen</p>
                      <p className="text-sm text-gray-500">Therapist</p>
                    </div>
                  </div>
                  <button className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>If you're experiencing a medical emergency, please dial 911 immediately.</p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default CrisisPage;
