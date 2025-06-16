import React from 'react';
import { metadata as pageMetadata } from './metadata';
import QuarterlyCleanupClient from './QuarterlyCleanupClient';

export const metadata = pageMetadata;

export default function QuarterlyCleanupPage() {
  return <QuarterlyCleanupClient />;
}
