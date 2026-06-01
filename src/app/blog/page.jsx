import React from 'react';
import BlogClient from './BlogClient';
import { metadata as pageMetadata } from './metadata';

export const metadata = pageMetadata;

export default function BlogPage() {
  return <BlogClient />;
}
