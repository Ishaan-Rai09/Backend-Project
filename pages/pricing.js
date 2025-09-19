import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly');
  };

  const plans = [
    {
      name: 'Free',
      description: 'Basic access to AI mental health tools',
      price: { monthly: 0, annually: 0 },
      features: [
        'Basic AI therapy chat (10 messages/day)',
        'Emergency crisis resources',
        'Mood tracking (basic)',
        'Community support',
      ],
      cta: 'Get Started',
      color: 'bg-gray-100 dark:bg-gray-800',
      highlighted: false,
    },
    {
      name: 'Premium',
      description: 'Enhanced mental wellness support',
      price: { monthly: 14.99, annually: 149.99 },
      features: [
        'Unlimited AI therapy conversations',
        'Advanced emotion analysis',
        'Personalized wellness plans',
        'Progress tracking & insights',
        'Guided meditations & exercises',
        'Email support',
      ],
      cta: 'Start Free Trial',
      color: 'bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-20',
      highlighted: true,
    },
    {
      name: 'Professional',
      description: 'Comprehensive mental health care',
      price: { monthly: 29.99, annually: 299.99 },
      features: [
        'All Premium features',
        'Priority support',
        'Referrals to licensed therapists',
        'Advanced analytics & reports',
        'Personalized resource library',
        'Export data for healthcare providers',
        'Phone & email support',
      ],
      cta: 'Start Free Trial',
      color: 'bg-gray-100 dark:bg-gray-800',
      highlighted: false,
    },
  ];

  return (
    <Layout title="Pricing | NeuroSync">
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Hero Section */}
        <div className="relative py-16 sm:py-24">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-xl text-gray-500 dark:text-gray-300">
                Choose the plan that fits your mental wellness needs
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-12 bg-gray-50 dark:bg-gray-800 overflow-hidden lg:py-16 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Toggle */}
            <div className="flex justify-center mb-12">
              <div className="relative flex items-center p-1 rounded-full bg-gray-200 dark:bg-gray-700">
                <span className="mr-4 text-sm font-medium text-gray-700 dark:text-gray-300">Monthly</span>
                <button
                  type="button"
                  className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ${
                    billingPeriod === 'annually' ? 'bg-primary' : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                  onClick={toggleBillingPeriod}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                      billingPeriod === 'annually' ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className="ml-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Annually <span className="text-primary font-semibold">(save 16%)</span>
                </span>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 ${plan.color}`}
                >
                  <div className="px-6 py-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">{plan.description}</p>
                    <div className="mt-6">
                      <p className="flex items-baseline">
                        <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                          ${plan.price[billingPeriod]}
                        </span>
                        <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-300">
                          {plan.price[billingPeriod] > 0 ? `/${billingPeriod === 'monthly' ? 'mo' : 'yr'}` : ''}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-8 space-y-4">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wide">
                      What's included:
                    </h4>
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-3 text-base text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 py-8 border-t border-gray-200 dark:border-gray-700">
                    <Link href={plan.name === 'Free' ? '/signup' : '/signup?plan=' + plan.name.toLowerCase()}>
                      <span
                        className={`block w-full px-4 py-3 rounded-md text-center font-medium text-sm ${
                          plan.highlighted
                            ? 'bg-primary text-white hover:bg-indigo-700'
                            : 'bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600'
                        } transition duration-150 ease-in-out`}
                      >
                        {plan.cta}
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Enterprise CTA */}
            <div className="mt-16 bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-20 rounded-2xl shadow-lg overflow-hidden">
              <div className="px-6 py-8 md:px-10 md:py-10 md:flex md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise Plan</h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                    Custom solutions for healthcare providers and organizations
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-base text-gray-700 dark:text-gray-300">
                        Custom integration with EHR systems
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-base text-gray-700 dark:text-gray-300">
                        HIPAA compliant data handling
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-base text-gray-700 dark:text-gray-300">
                        Dedicated account management
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 md:mt-0">
                  <Link href="/contact">
                    <span className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700 transition duration-150 ease-in-out">
                      Contact Sales
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="py-16 bg-white dark:bg-gray-900 overflow-hidden lg:py-24 transition-colors duration-200">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative">
              <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Can I change plans later?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new features will be immediately available. If you downgrade, the changes will take effect at the start of your next billing cycle.
                </div>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Is there a free trial?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Yes, both Premium and Professional plans come with a 14-day free trial. You can try all features without commitment, and you won't be charged until the trial period ends.
                </div>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  What payment methods do you accept?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. Enterprise plans can also be paid via invoice.
                </div>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Can I get a refund if I'm not satisfied?
                </h3>
                <div className="mt-2 text-base text-gray-500 dark:text-gray-300">
                  Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not completely satisfied, contact our support team, and we'll process your refund.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-primary overflow-hidden transition-colors duration-200">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to start your mental wellness journey?
              </h2>
              <p className="mt-4 text-xl text-indigo-100">
                Join thousands of users who are improving their mental health with NeuroSync.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <Link href="/signup">
                    <span className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition duration-150 ease-in-out">
                      Get started for free
                    </span>
                  </Link>
                </div>
                <div className="ml-3 inline-flex">
                  <Link href="/contact">
                    <span className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 bg-opacity-60 hover:bg-opacity-70 transition duration-150 ease-in-out">
                      Contact us
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing; 