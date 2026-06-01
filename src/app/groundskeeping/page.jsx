import React from 'react';
import { metadata as pageMetadata } from './metadata';
import GroundskeepingClient from './GroundskeepingClient';

export const metadata = pageMetadata;

export default function GroundskeepingPage() {
  return <GroundskeepingClient />;
}
