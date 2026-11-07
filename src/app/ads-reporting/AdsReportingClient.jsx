import React from 'react';

// Home page for the "Gardening Thyme Ads Reporting" OAuth app registered in Google Cloud.
// Google's brand verification requires a public page that describes the app and links to
// the privacy policy. This page is intentionally not linked from the navigation, footer or
// sitemap, and is kept out of search results (see metadata.js): the tool is internal to
// Gardening Thyme LLC and is not offered to the public.
// Styling follows the site's Visual Identity System (paper canvas, Bodoni headings,
// Hanken body, cloud cards, 4px radius). Text-only, no client animation, so it renders fully
// without JavaScript for Google's reviewers.

const FEATURES = [
  {
    title: 'Performance reports',
    body: 'Which searches, days, hours, devices and cities produced clicks, calls and form submissions, and what each cost.',
  },
  {
    title: 'Keyword research',
    body: 'Monthly search volume, competition and bid estimates for the services we offer in the cities we serve, drawn from Google Ads Keyword Planner.',
  },
  {
    title: 'Campaign planning',
    body: 'Draft ad groups and keyword lists that we review and approve inside Google Ads before anything goes live.',
  },
];

const linkClass = 'text-moss underline underline-offset-4 hover:text-forest transition-colors';

export default function AdsReportingClient() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="max-w-[820px] mx-auto px-6 sm:px-8 pt-20 pb-12 text-center">
        <p className="eyebrow mb-[22px]">Internal tool &middot; Gardening Thyme LLC</p>
        <h1 className="font-serif font-medium text-ink text-[2.25rem] md:text-[3.25rem] leading-[1.05] tracking-[-0.015em]">
          Gardening Thyme Ads Reporting
        </h1>
        <p className="font-sans font-light text-[17px] leading-[1.75] text-[#3a3c33] max-w-[600px] mx-auto mt-6">
          An internal reporting tool built and used by Gardening Thyme LLC, a garden design and landscaping company in
          Marietta, Georgia. It is not offered to the public.
        </p>
      </header>

      <section className="max-w-[1100px] mx-auto px-6 sm:px-8 pb-16" aria-labelledby="what-heading">
        <h2 id="what-heading" className="font-serif text-ink text-[1.75rem] md:text-[2.25rem] text-center mb-3">
          What the tool does
        </h2>
        <p className="font-sans text-[16px] leading-[1.75] text-[#3a3c33] text-center max-w-[640px] mx-auto mb-10">
          It connects to our own Google Ads account through the Google Ads API and produces reports that help us plan and
          manage our advertising.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-cloud border border-mist rounded-[6px] p-8">
              <h3 className="font-serif text-ink text-[1.4rem] mb-3">{f.title}</h3>
              <p className="font-sans text-[15px] leading-[1.7] text-[#3a3c33]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[820px] mx-auto px-6 sm:px-8 pb-24 font-sans text-[16px] leading-[1.75] text-[#3a3c33]">
        <div className="border-t border-mist pt-10 space-y-10">
          <div>
            <h2 className="font-serif text-ink text-[1.6rem] mb-3">How it works</h2>
            <p>
              A member of our team signs in with our company Google account and grants the tool access to our Google Ads
              account. The tool reads reporting and keyword-planning data from that account and writes summaries into
              documents and spreadsheets that only our team can see. It makes changes to campaigns only when a team member
              explicitly runs that step and reviews the result.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-ink text-[1.6rem] mb-3">Who uses it</h2>
            <p>
              Only Gardening Thyme LLC staff. The tool has no public sign-up, no customer-facing features and no
              third-party users.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-ink text-[1.6rem] mb-3">Privacy</h2>
            <p>
              How the tool accesses, uses, stores and shares Google user data is described in the &ldquo;Google User Data
              and the Gardening Thyme Ads Reporting Tool&rdquo; section of our{' '}
              <a href="/privacy-policy#google-user-data" className={linkClass}>Privacy Policy</a>.
            </p>
          </div>

          <div className="bg-forest text-cloud rounded-[6px] p-8 md:p-10">
            <h2 className="font-serif text-cloud text-[1.6rem] mb-4">Contact</h2>
            <p className="text-[#DDE3D2] leading-[1.9]">
              Gardening Thyme LLC
              <br />
              2588 Tritt Springs Trace NE, Marietta, GA 30062
              <br />
              Email:{' '}
              <a href="mailto:services@gardeningthyme.com" className="text-cloud underline underline-offset-4 hover:text-sage-tint">
                services@gardeningthyme.com
              </a>
              <br />
              Phone:{' '}
              <a href="tel:+14048617744" className="text-cloud underline underline-offset-4 hover:text-sage-tint">
                (404) 861-7744
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
