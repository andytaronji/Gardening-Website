import React from 'react';
import ContactClient from './ContactClient';
import { metadata as pageMetadata } from './metadata';

export const metadata = pageMetadata;

export default function ContactPage() {
  return <ContactClient />;
}
