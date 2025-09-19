import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';

const blogPosts = {
  1: {
    title: 'Understanding Anxiety: A Comprehensive Guide',
    content: `
      Anxiety is a natural response to stress, but when it becomes overwhelming, it can interfere with daily life. In this comprehensive guide, we'll explore the different types of anxiety disorders, their symptoms, and effective coping strategies.

      Types of Anxiety Disorders:
      1. Generalized Anxiety Disorder (GAD)
      2. Social Anxiety Disorder
      3. Panic Disorder
      4. Specific Phobias

      Common symptoms include:
      • Excessive worrying
      • Restlessness
      • Difficulty concentrating
      • Sleep problems
      • Physical symptoms like rapid heartbeat

      Coping Strategies:
      1. Mindfulness and Meditation
      2. Regular Exercise
      3. Healthy Sleep Habits
      4. Professional Support
      5. Stress Management Techniques
    `,
    image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    author: 'Dr. Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Mental Health'
  },
  2: {
    title: 'The Power of Mindfulness Meditation',
    content: `
      Mindfulness meditation is a powerful tool for improving mental well-being. This ancient practice has gained significant scientific backing in recent years for its numerous benefits on mental health.

      Benefits of Mindfulness:
      1. Reduced Stress and Anxiety
      2. Improved Focus and Concentration
      3. Better Emotional Regulation
      4. Enhanced Self-Awareness
      5. Better Sleep Quality

      How to Start:
      1. Find a Quiet Space
      2. Set Aside Regular Time
      3. Focus on Your Breath
      4. Observe Your Thoughts
      5. Practice Non-Judgment

      Remember, mindfulness is a skill that develops with practice. Start with just a few minutes each day and gradually increase the duration as you become more comfortable with the practice.
    `,
    image: 'https://images.unsplash.com/photo-1470777639313-60af88918203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    author: 'Mark Thompson',
    date: 'March 20, 2024',
    readTime: '4 min read',
    category: 'Wellness'
  },
  3: {
    title: 'Breaking the Stigma: Mental Health in the Workplace',
    content: `
      Mental health issues affect millions of workers, yet there's still a significant stigma attached to discussing these concerns in professional settings. This article explores how companies can create a more supportive environment for mental well-being.

      Why Workplace Mental Health Matters:
      1. Improved Productivity
      2. Reduced Absenteeism
      3. Lower Turnover Rates
      4. Better Team Collaboration
      5. Healthier Work Culture

      Steps Organizations Can Take:
      1. Create Clear Mental Health Policies
      2. Provide Manager Training on Mental Health
      3. Offer Employee Assistance Programs
      4. Implement Flexible Work Arrangements
      5. Foster Open Communication

      The pandemic has highlighted the importance of mental health support in the workplace, and progressive organizations are leading the way in creating environments where employees can thrive both professionally and personally.
    `,
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    author: 'Emily Chen',
    date: 'March 22, 2024',
    readTime: '6 min read',
    category: 'Workplace'
  },
  4: {
    title: 'The Science Behind Depression',
    content: `
      Depression is a complex mental health condition that affects millions of people worldwide. Understanding the biological and psychological mechanisms behind depression can help destigmatize the condition and lead to more effective treatments.

      Biological Factors:
      1. Neurotransmitter Imbalances
      2. Genetic Predisposition
      3. Hormonal Changes
      4. Brain Structure Alterations
      5. Inflammatory Responses

      Psychological Factors:
      1. Cognitive Distortions
      2. Learned Helplessness
      3. Negative Life Events
      4. Chronic Stress
      5. Social Support Deficits

      Modern Treatment Approaches:
      1. Evidence-Based Psychotherapies
      2. Medication Management
      3. Lifestyle Modifications
      4. Social Connection
      5. Emerging Treatments (TMS, Ketamine, Psychedelics)

      Research continues to evolve our understanding of depression, bringing hope for more personalized and effective treatment options in the future.
    `,
    image: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    author: 'Dr. Michael Brown',
    date: 'March 25, 2024',
    readTime: '7 min read',
    category: 'Research'
  }
};

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogPosts[id];

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Post not found</h1>
            <Link href="/blog" className="mt-4 text-primary hover:text-indigo-600">
              Return to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${post.title} - NeuroSync Blog`}>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-indigo-600 mb-8">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-500 dark:text-gray-400">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span className="text-primary">{post.category}</span>
          </div>
        </div>

        <div className="aspect-w-16 aspect-h-9 mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="rounded-lg shadow-lg object-cover object-center w-full h-96"
          />
        </div>

        <div className="prose prose-lg dark:prose-dark max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="text-gray-800 dark:text-gray-200 mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src={`https://ui-avatars.com/api/?name=${post.author.replace(' ', '+')}&background=random`}
              alt={post.author}
            />
            <div className="ml-4">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {post.author}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Mental Health Professional
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost; 