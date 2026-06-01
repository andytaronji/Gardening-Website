import React from 'react';
import { metadata as pageMetadata } from './metadata';
import GardenDesignClient from './GardenDesignClient';

export const metadata = pageMetadata;

export default function GardenDesignPage() {
  return <GardenDesignClient />;
}
