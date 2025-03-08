import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Gardening Thyme',
  description: 'Professional garden design and maintenance services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-green-700 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-3xl font-cursive text-white hover:text-green-200 transition duration-300">
                Gardening Thyme
              </h1>
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="font-sans text-lg font-medium hover:text-green-200 transition duration-300">Home</a></li>
                <li><a href="/portfolio" className="font-sans text-lg font-medium hover:text-green-200 transition duration-300">Portfolio</a></li>
                <li><a href="/consultations" className="font-sans text-lg font-medium hover:text-green-200 transition duration-300">Consultations</a></li>
                <li><a href="/blog" className="font-sans text-lg font-medium hover:text-green-200 transition duration-300">Blog</a></li>
                <li><a href="/contact" className="font-sans text-lg font-medium hover:text-green-200 transition duration-300">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-green-800 text-white p-6 mt-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-cursive mb-4">Gardening Thyme</h3>
                <p>Professional garden design and maintenance services.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="font-sans hover:text-green-200 transition duration-300">Home</a></li>
                  <li><a href="/consultations" className="font-sans hover:text-green-200 transition duration-300">Consultations</a></li>
                  <li><a href="/blog" className="font-sans hover:text-green-200 transition duration-300">Blog</a></li>
                  <li><a href="/contact" className="font-sans hover:text-green-200 transition duration-300">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>Email: services@gardeningthyme.com</p>
                <p>Phone: 508-932-4056</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-green-600 text-center">
              <p>&copy; {new Date().getFullYear()} Gardening Thyme. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
