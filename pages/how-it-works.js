import React from 'react';
import Layout from '../components/Layout';

const HowItWorks = () => {
  return (
    <Layout title="How It Works | NeuroSync">
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Hero Section */}
        <div className="relative py-16 sm:py-24">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                How NeuroSync Works
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-xl text-gray-500 dark:text-gray-300">
                Discover the science and technology behind our AI mental health companion
              </p>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Process</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Your mental health journey in four simple steps
              </p>
            </div>

            <div className="mt-16">
              <div className="space-y-24">
                {/* Step 1 */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                  <div className="lg:col-span-5">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        className="rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-gray-700/30"
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Sign up process"
                      />
                    </div>
                  </div>
                  <div className="mt-10 -mx-4 lg:mt-0 lg:col-span-7 pl-8">
                    <div className="relative pl-12">
                      <span className="absolute left-0 top-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold text-lg">
                        1
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Create Your Account
                      </h3>
                      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                        Start by creating your personal profile. We'll ask a few questions to understand your mental health needs and goals. This helps us tailor our AI to your specific situation.
                      </p>
                      <ul className="mt-6 space-y-3 text-gray-500 dark:text-gray-300">
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Secure profile creation with privacy protection</span>
                        </li>
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Initial assessment to understand your needs</span>
                        </li>
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Personalized AI configuration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                  <div className="lg:col-span-7 lg:order-last">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        className="rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-gray-700/30"
                        src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="AI chat conversation"
                      />
                    </div>
                  </div>
                  <div className="mt-10 -mx-4 lg:mt-0 lg:col-span-5 lg:order-first pr-8">
                    <div className="relative pl-12">
                      <span className="absolute left-0 top-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold text-lg">
                        2
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Engage With Your AI Therapist
                      </h3>
                      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                        Begin conversations with our AI therapist through text or voice. The system uses advanced natural language processing to understand your emotions and provide appropriate responses.
                      </p>
                      <ul className="mt-6 space-y-3 text-gray-500 dark:text-gray-300">
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">24/7 availability for conversations</span>
                        </li>
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Advanced emotion recognition technology</span>
                        </li>
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Evidence-based therapeutic techniques</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                  <div className="lg:col-span-5">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        className="rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-gray-700/30"
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Data insights and analytics"
                      />
                    </div>
                  </div>
                  <div className="mt-10 -mx-4 lg:mt-0 lg:col-span-7 pl-8">
                    <div className="relative pl-12">
                      <span className="absolute left-0 top-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold text-lg">
                        3
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Receive Personalized Insights
                      </h3>
                      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                        As you continue to use NeuroSync, our AI analyzes patterns in your conversations, moods, and behaviors to provide personalized insights and recommendations.
                      </p>
                      <ul className="mt-6 space-y-3 text-gray-500 dark:text-gray-300">
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Data-driven mood and behavior analysis</span>
                        </li>
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Weekly progress reports and insights</span>
                        </li>
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Customized mental wellness recommendations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                  <div className="lg:col-span-7 lg:order-last">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        className="rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-gray-700/30"
                        src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Continuous improvement"
                      />
                    </div>
                  </div>
                  <div className="mt-10 -mx-4 lg:mt-0 lg:col-span-5 lg:order-first pr-8">
                    <div className="relative pl-12">
                      <span className="absolute left-0 top-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold text-lg">
                        4
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Track Progress & Grow
                      </h3>
                      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                        Monitor your mental health journey with interactive dashboards. Set goals, track improvements, and celebrate your progress as you develop better mental wellness habits.
                      </p>
                      <ul className="mt-6 space-y-3 text-gray-500 dark:text-gray-300">
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Goal setting and achievement tracking</span>
                        </li>
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Long-term mental health improvement</span>
                        </li>
                        <li className="flex">
                          <svg className="flex-shrink-0 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="ml-3">Integration with wellness practices</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="py-16 bg-white dark:bg-gray-900 overflow-hidden lg:py-24 transition-colors duration-200">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Technology</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Powered by advanced AI and psychological science
              </p>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                NeuroSync combines cutting-edge technology with established psychological principles to deliver effective mental health support.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Tech 1 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8 transition-colors duration-200">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Large Language Models</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                        NeuroSync is built on advanced LLM technology, trained specifically on mental health conversations and therapeutic techniques to provide relevant and helpful responses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech 2 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8 transition-colors duration-200">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Emotional Intelligence</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                        Our proprietary emotion detection algorithms analyze text, voice, and (with permission) facial expressions to understand and respond to your emotional state.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech 3 */}
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8 transition-colors duration-200">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">Privacy & Security</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                        Enterprise-grade encryption and privacy protection ensure your personal data and conversations remain secure and confidential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden lg:py-24 transition-colors duration-200">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative">
              <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500 dark:text-gray-300">
                Common questions about how NeuroSync works
              </p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Is NeuroSync a replacement for a therapist?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  NeuroSync is not intended to replace professional therapy or medical treatment. It serves as a complementary tool to support your mental wellness journey. For clinical conditions, please consult with a licensed mental health professional.
                </div>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Is my data secure and private?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Yes, we take privacy extremely seriously. All conversations are encrypted, and we adhere to strict privacy policies. We never share your personal data with third parties without explicit consent.
                </div>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  How does the AI learn about my needs?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  The AI learns through your interactions, initial assessment, and ongoing conversations. It identifies patterns in your responses and adapts its approach to better meet your specific needs over time.
                </div>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Can I access NeuroSync on multiple devices?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Yes, NeuroSync is available on web, iOS, and Android platforms. Your account synchronizes across all your devices, allowing you to access your therapy sessions anywhere.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks; 