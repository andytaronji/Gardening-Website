import React from 'react';
import { metadata as pageMetadata } from './metadata';
import LeafRemovalClient from './LeafRemovalClient';

export const metadata = pageMetadata;

export default function LeafRemovalPage() {
  return <LeafRemovalClient />;
}
