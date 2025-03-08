import './globals.css';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Gardening Thyme',
  description: 'Professional garden design and maintenance services',
};

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
