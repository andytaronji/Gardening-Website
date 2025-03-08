import './globals.css';
import Navigation from '../components/Navigation';
import { metadata } from './metadata';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
} 