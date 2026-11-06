import { metadata as pageMetadata } from './metadata';
import AdsReportingClient from './AdsReportingClient';

export const metadata = pageMetadata;

export default function AdsReportingPage() {
  return <AdsReportingClient />;
}
