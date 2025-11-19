import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const Signup = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Validate terms agreement
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Split full name into first and last name
      const [firstName = '', lastName = ''] = formData.fullName.trim().split(' ');
      
      // Register the user
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token and user data in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify({
          name: formData.fullName,
          email: formData.email
        }));
        
        toast.success('Account created successfully!');
        router.push('/chat'); // Redirect to chat page after successful signup
      } else {
        toast.error(data.message || 'Registration failed');
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout title="Sign Up | NeuroSync">
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7L12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 10L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              Join NeuroSync
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Your personal AI health companion
            </p>
          </div>
          
          <div className="mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`appearance-none block w-full pl-10 pr-3 py-3 border ${
                      errors.fullName ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200`}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.fullName}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`appearance-none block w-full pl-10 pr-3 py-3 border ${
                      errors.email ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className={`appearance-none block w-full pl-10 pr-3 py-3 border ${
                      errors.password ? 'border-red-300' : 'border-gray-300 dark:border-gray-600'
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200`}
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className={`h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600 rounded transition-colors duration-200 ${
                      errors.agreeToTerms ? 'border-red-300' : ''
                    }`}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="font-medium text-gray-700 dark:text-gray-300">
                    I agree to the{' '}
                    <Link href="/terms" className="text-primary hover:text-indigo-700 dark:hover:text-indigo-300">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary hover:text-indigo-700 dark:hover:text-indigo-300">
                      Privacy Policy
                    </Link>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.agreeToTerms}</p>
                  )}
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-200 ease-in-out ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Creating Account...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                      </svg>
                      Create Account
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account? {' '}
              <Link href="/login" className="font-medium text-primary hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
