import { blogPosts } from '../data/posts';
import BlogPostClient from './BlogPostClient';

const SITE = 'https://www.gardeningthyme.com';

// Pre-render every blog post at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Per-post metadata so each article has a unique title, description, and canonical
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Gardening Thyme Blog',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const url = `${SITE}/blog/${post.slug}`;

  return {
    title: `${post.title} | Gardening Thyme Blog`,
    description: post.excerpt,
    keywords: Array.isArray(post.tags) ? post.tags.join(', ') : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      locale: 'en_US',
      siteName: 'Gardening Thyme',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  const articleSchema = post && {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gardening Thyme',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/di4phdven/image/upload/v1747232934/Gardening_Thyme_LLC_Logo_hkdlsk.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE}/blog/${post.slug}`,
    },
  };

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogPostClient />
    </>
  );
}
