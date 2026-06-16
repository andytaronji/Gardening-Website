import { metadata as pageMetadata } from './metadata';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata = pageMetadata;

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
