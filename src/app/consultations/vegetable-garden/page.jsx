import React from 'react';
import { metadata as pageMetadata } from './metadata';
import VegetableGardenClient from './VegetableGardenClient';

export const metadata = pageMetadata;

export default function VegetableGardenPage() {
  return <VegetableGardenClient />;
}
