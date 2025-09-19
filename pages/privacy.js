import React from 'react';
import Layout from '../components/Layout';

const Privacy = () => {
  return (
    <Layout title="Privacy Policy | NeuroSync">
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Hero Section */}
        <div className="relative py-16 sm:py-24">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300">
                We take your privacy seriously. Learn how NeuroSync collects, uses, and protects your personal information.
              </p>
            </div>
          </div>
        </div>
        
        {/* Privacy Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto text-gray-500 dark:text-gray-300">
              <div className="mb-12">
                <p className="text-sm text-gray-400 dark:text-gray-500">Last Updated: June 15, 2023</p>
              </div>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
                <p>
                  NeuroSync ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services, including our AI mental health companion application (collectively, the "Service").
                </p>
                <p className="mt-4">
                  Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this policy. If you do not agree with our policies and practices, please do not use our Service.
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
                <p>
                  We collect several types of information from and about users of our Service:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information, such as name, email address, and phone number when you register for an account.</li>
                  <li>Profile information, such as demographic data, preferences, and any other information you choose to provide.</li>
                  <li>Usage information, including your interactions with our AI companion, conversation histories, and responses.</li>
                  <li>Mental health information that you choose to share during your interactions with our Service.</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Technical Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device information, such as your IP address, browser type, operating system, and device identifiers.</li>
                  <li>Usage details, including traffic data, logs, and other communication data.</li>
                  <li>Information about your internet connection and the equipment you use to access our Service.</li>
                  <li>Location data, such as general geographic location based on your IP address.</li>
                </ul>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Collect Information</h2>
                <p>
                  We collect information through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Direct interactions when you provide information to us by filling in forms, creating an account, or communicating with our AI companion.</li>
                  <li>Automated technologies or interactions, such as cookies, web beacons, and similar tracking technologies.</li>
                  <li>Third-party sources, such as authentication providers if you choose to sign in through a third-party service.</li>
                </ul>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our Service, including personalizing your experience and developing new features.</li>
                  <li>Train and optimize our AI systems to better understand and respond to user needs.</li>
                  <li>Process and complete transactions, and send related information including confirmations and invoices.</li>
                  <li>Respond to your comments, questions, and requests, and provide customer service.</li>
                  <li>Communicate with you about products, services, offers, promotions, and events, and provide news and information we think will be of interest to you.</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our Service.</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities, and protect the rights and property of NeuroSync and others.</li>
                  <li>Comply with applicable laws, legal processes, and regulations.</li>
                </ul>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h2>
                <p>
                  We implement a variety of security measures to maintain the safety of your personal information when you use our Service:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>End-to-end encryption for all sensitive communications and stored data.</li>
                  <li>Regular security assessments and penetration testing.</li>
                  <li>Strict access controls limiting employee access to personal information.</li>
                  <li>Secure data storage and processing systems compliant with industry standards.</li>
                </ul>
                <p className="mt-4">
                  Despite our efforts, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information Sharing and Disclosure</h2>
                <p>
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>
                  <li>With professional advisors, such as lawyers, auditors, and insurers, where necessary in the course of the professional services they provide to us.</li>
                  <li>If required by law or in response to valid requests by public authorities.</li>
                  <li>To protect our rights, privacy, safety, or property, and/or that of our users or others.</li>
                  <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
                  <li>With your consent or at your direction.</li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent, or trade your personal information with third parties for their commercial purposes.
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Privacy Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access and receive a copy of your personal information.</li>
                  <li>The right to rectify or update inaccurate or incomplete personal information.</li>
                  <li>The right to request deletion of your personal information in certain circumstances.</li>
                  <li>The right to restrict or object to processing of your personal information.</li>
                  <li>The right to data portability, allowing you to obtain and reuse your personal information.</li>
                  <li>The right to withdraw consent at any time, where we rely on consent to process your personal information.</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided at the end of this Privacy Policy.
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
                <p>
                  Our Service is not intended for use by children under the age of 16, and we do not knowingly collect personal information from children under 16. If we learn we have collected personal information from a child under 16, we will delete that information as quickly as possible. If you believe we might have any information from or about a child under 16, please contact us.
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to Our Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. If we make material changes, we will notify you by email or through a notice on our website prior to the change becoming effective. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your personal information.
                </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4">
                  <p>NeuroSync Data Protection</p>
                  <p>Email: privacy@neurosync.ai</p>
                  <p>Address: 123 Innovation Way, Suite 400, San Francisco, CA 94107</p>
                  <p>Phone: +1 (800) 123-4567</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy; 