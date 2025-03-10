import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Gardening Thyme | Professional Garden Design & Maintenance',
    template: '%s | Gardening Thyme'
  },
  description: 'Expert garden design, maintenance, and consultation services in Marietta, Roswell, Alpharetta, and surrounding areas. Transform your outdoor space with our professional gardening services.',
  keywords: ['garden design', 'garden maintenance', 'landscaping', 'vegetable gardens', 'garden consultation', 'Marietta', 'Roswell', 'Alpharetta'],
  openGraph: {
    title: 'Gardening Thyme | Professional Garden Design & Maintenance',
    description: 'Transform your outdoor space with expert garden design and maintenance services. Serving Marietta, Roswell, Alpharetta, and surrounding areas.',
    siteName: 'Gardening Thyme',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 