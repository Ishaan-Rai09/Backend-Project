import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Anxiety: A Comprehensive Guide',
    excerpt: 'Learn about the different types of anxiety disorders and effective coping mechanisms.',
    image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    author: 'Dr. Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Mental Health'
  },
  {
    id: 2,
    title: 'The Power of Mindfulness Meditation',
    excerpt: 'Discover how mindfulness meditation can transform your mental well-being.',
    image: 'https://images.unsplash.com/photo-1470777639313-60af88918203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    author: 'Mark Thompson',
    date: 'March 20, 2024',
    readTime: '4 min read',
    category: 'Wellness'
  },
  {
    id: 3,
    title: 'Breaking the Stigma: Mental Health in the Workplace',
    excerpt: 'How companies can create a supportive environment for mental health.',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    author: 'Emily Chen',
    date: 'March 22, 2024',
    readTime: '6 min read',
    category: 'Workplace'
  },
  {
    id: 4,
    title: 'The Science Behind Depression',
    excerpt: 'Understanding the biological and psychological factors of depression.',
    image: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    author: 'Dr. Michael Brown',
    date: 'March 25, 2024',
    readTime: '7 min read',
    category: 'Research'
  }
];

const Blog = () => {
  return (
    <Layout title="Blog - NeuroSync">
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Latest Insights on Mental Health
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              Discover expert articles, research findings, and practical tips for better mental well-being.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="h-48 w-full relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="block mt-2">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                      {post.excerpt}
                    </p>
                  </Link>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=random`}
                        alt={post.author}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {post.author}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 transition duration-150 ease-in-out">
              Load More Articles
              <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog; 