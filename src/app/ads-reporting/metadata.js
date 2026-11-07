export const metadata = {
  title: 'Gardening Thyme Ads Reporting | Gardening Thyme',
  description: 'Gardening Thyme Ads Reporting is an internal tool used by Gardening Thyme LLC to report on and plan its own Google Ads advertising. It is not offered to the public.',
  alternates: {
    canonical: 'https://www.gardeningthyme.com/ads-reporting',
  },
  // Public (Google's OAuth reviewers must be able to open it) but kept out of search results,
  // since the tool is internal. "follow" still lets crawlers reach the privacy policy link.
  robots: {
    index: false,
    follow: true,
  },
};
