import React from 'react';
import { metadata as pageMetadata } from './metadata';
import PropertyEnhancementClient from './PropertyEnhancementClient';

export const metadata = pageMetadata;

export default function PropertyEnhancementPage() {
  return <PropertyEnhancementClient />;
}
