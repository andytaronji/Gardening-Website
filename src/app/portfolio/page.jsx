import { metadata as pageMetadata } from './metadata';
import PortfolioClient from './PortfolioClient';

export const metadata = pageMetadata;

export default function PortfolioPage() {
  return <PortfolioClient />;
}
