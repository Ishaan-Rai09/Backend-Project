import React from 'react';
import Layout from '../components/Layout';

const Terms = () => {
  // Create a consistent date format that doesn't rely on localization
  const formatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;  // YYYY-MM-DD format is consistent across locales
  };

  return (
    <Layout title="Terms of Service - NeuroSync">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: {formatDate()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By accessing and using NeuroSync, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Use License</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Permission is granted to temporarily access NeuroSync for personal, non-commercial use only. This license does not include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for commercial purposes</li>
              <li>Attempting to decompile or reverse engineer any software contained in NeuroSync</li>
              <li>Removing any copyright or other proprietary notations</li>
              <li>Transferring the materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The materials on NeuroSync are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Limitations</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              In no event shall NeuroSync or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NeuroSync.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The materials appearing on NeuroSync could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Links</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We have not reviewed all of the sites linked to NeuroSync and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Modifications</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We may revise these terms of service at any time without notice. By using NeuroSync, you agree to be bound by the current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Governing Law</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Email: support@neurosync.com<br />
              Address: 123 Mental Health Street, Wellness City, WC 12345
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms; 