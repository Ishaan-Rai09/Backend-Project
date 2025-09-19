import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const About = () => {
  return (
    <Layout title="About Us | NeuroSync">
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Hero Section */}
        <div className="relative py-16 sm:py-24">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                About NeuroSync
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300">
                Revolutionizing mental health care through AI-powered therapy, personalized insights, and compassionate support.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Mission Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="lg:col-span-1 mb-12 lg:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="NeuroSync Mission" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                <div className="mt-6 prose prose-lg text-gray-500 dark:text-gray-300">
                  <p>
                    At NeuroSync, we believe mental health care should be accessible, personalized, and effective for everyone. Our mission is to combine cutting-edge AI technology with evidence-based psychological practices to create a supportive companion that understands your unique needs.
                  </p>
                  <p className="mt-4">
                    We're dedicated to breaking down barriers to mental health support, eliminating stigma, and providing tools that empower individuals to take control of their emotional wellbeing. Through our platform, we aim to create a world where quality mental health care is available to anyone, anywhere, anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Story Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
            </div>
            <div className="prose prose-lg mx-auto text-gray-500 dark:text-gray-300">
              <p>
                NeuroSync was founded in 2021 by a team of psychologists, AI researchers, and individuals with personal experiences navigating mental health challenges. Our founders recognized a critical gap in mental health care: despite increasing awareness, millions of people still couldn't access the support they needed due to cost, location, stigma, or provider shortages.
              </p>
              <p className="mt-4">
                After two years of intensive research and development, we launched our AI therapy platform with a commitment to creating technology that truly understands and responds to human emotions. We partnered with leading mental health professionals to ensure our approach was not only technologically advanced but also psychologically sound.
              </p>
              <p className="mt-4">
                Today, NeuroSync serves thousands of users worldwide, providing personalized mental health support that adapts to each individual's unique journey. We continue to refine our AI algorithms based on the latest research while maintaining our core values of empathy, accessibility, and evidence-based care.
              </p>
              <div className="mt-12 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="NeuroSync Team" 
                  className="w-full max-w-3xl rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Values</h2>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do at NeuroSync
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-8 transition-colors duration-200">
                <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Accessibility</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  We believe everyone deserves quality mental health support regardless of location, income, or background. We're committed to making our platform accessible through affordable pricing, multilingual support, and designs that accommodate diverse needs.
                </p>
              </div>
              
              {/* Value 2 */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-8 transition-colors duration-200">
                <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Privacy & Security</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  We prioritize your data security and confidentiality. With end-to-end encryption, transparent data policies, and a commitment to only use your information to improve your experience, we ensure your most personal thoughts remain private and protected.
                </p>
              </div>
              
              {/* Value 3 */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-8 transition-colors duration-200">
                <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Innovation</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  We constantly push the boundaries of what's possible in AI-assisted mental health care. Through ongoing research, partnerships with experts, and incorporating user feedback, we continuously refine our technology to provide the most effective support possible.
                </p>
              </div>
              
              {/* Value 4 */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-8 transition-colors duration-200">
                <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ethical AI</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  We develop our AI systems with a strong ethical framework, ensuring they operate without bias, respect human autonomy, and complement rather than replace human connection. We're transparent about capabilities and limitations of our technology.
                </p>
              </div>
              
              {/* Value 5 */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-8 transition-colors duration-200">
                <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Empathy</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  At the heart of our technology is a deep understanding of human emotions. We design our AI to respond with compassion, validate feelings, and provide support that acknowledges the complexity of mental health experiences.
                </p>
              </div>
              
              {/* Value 6 */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-8 transition-colors duration-200">
                <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Evidence-Based</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  Our approaches are grounded in psychological science. We incorporate proven therapeutic techniques, measure outcomes, and conduct research to ensure our platform delivers real benefits to users' mental health and wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Leadership Team Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Leadership Team</h2>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries behind NeuroSync
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Dr. Sarah Chen" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Sarah Chen</h3>
                <p className="text-primary font-medium">Co-Founder & CEO</p>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  Clinical psychologist with 15+ years experience in mental health innovation and digital therapeutics.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Dr. Michael Rodriguez" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Michael Rodriguez</h3>
                <p className="text-primary font-medium">Co-Founder & CTO</p>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  Former AI research lead at MIT with specialized expertise in natural language processing and emotion recognition.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Jamie Washington" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Jamie Washington</h3>
                <p className="text-primary font-medium">Chief Product Officer</p>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  Product visionary with background in UX design and personal experience navigating mental health challenges.
                </p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Dr. Rebecca Taylor" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Rebecca Taylor</h3>
                <p className="text-primary font-medium">Chief Research Officer</p>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  Leading researcher in digital psychiatry with focus on measuring outcomes and efficacy of technology-based interventions.
                </p>
              </div>
              
              {/* Team Member 5 */}
              <div className="text-center">
                <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="David Park" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">David Park</h3>
                <p className="text-primary font-medium">Chief Operating Officer</p>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  Strategic leader with experience scaling healthcare startups and managing partnerships with major health systems.
                </p>
              </div>
              
              {/* Team Member 6 */}
              <div className="text-center">
                <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Dr. Maya Johnson" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Maya Johnson</h3>
                <p className="text-primary font-medium">Ethics Director</p>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  Bioethicist and psychologist ensuring our AI development follows ethical guidelines and centers human wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Join Us Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Join Our Mission</h2>
            <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
              We're looking for passionate individuals to help us transform mental health care with technology. Explore career opportunities and join our team.
            </p>
            <div className="mt-8">
              <Link 
                href="/careers"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-indigo-50 transition-colors duration-200"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About; 