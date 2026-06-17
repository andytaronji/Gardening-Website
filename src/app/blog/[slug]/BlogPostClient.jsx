'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function BlogPostClient() {
  const params = useParams();
  const { slug } = params;

  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center text-sage hover:text-forest-green transition-colors font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto bg-cloud rounded-[6px] overflow-hidden border border-mist">
          {/* Featured Image */}
          <div className="relative h-[400px] w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              quality={90}
            />
          </div>

          <div className="p-8">
            {/* Author and Date */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center mr-3 border border-sage/30">
                <span className="text-sage font-bold">{post.author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-forest-green font-medium">{post.author}</p>
                <p className="text-forest-green/60 text-sm">{formatDate(post.date)}</p>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{post.title}</h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-cream text-charcoal text-xs px-3 py-1 rounded-[4px] border border-sage/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div
              className="prose prose-green max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-forest text-cloud font-semibold px-8 py-4 rounded-[4px] hover:bg-moss transition-all duration-300"
          >
            Reach out today to learn about our Gardening Lessons!
          </Link>
        </div>
      </div>
    </div>
  );
}
