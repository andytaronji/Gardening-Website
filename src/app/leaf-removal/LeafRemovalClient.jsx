'use client';

import React, { useState } from 'react';
import { loadRecaptcha, getRecaptchaToken, sendLeadConversion } from '@/lib/recaptcha';
import { motion } from 'framer-motion';

// Leaf removal landing page — built for the "Leaf Removal & Fall Cleanup" Google Ads
// campaign. Text-only (no photos) for a fast load; follows the Visual Identity System
// (paper canvas, forest anchor panel, Bodoni headings, Hanken body, 4px radius).
// The quote form posts to /api/contact and fires the same "Website Contact Form"
// Google Ads conversion as /contact, so leads from this page are counted.

const CITIES = ['Marietta', 'Smyrna', 'Vinings', 'Woodstock', 'Alpharetta', 'Sandy Springs', 'Milton'];

const INCLUDED = [
  {
    title: 'Lawns cleared',
    body: 'Fallen leaves raked and blown off your lawn so the grass can breathe through winter.',
    icon: 'M4 18h16M6 18c0-4 2.5-7 6-9 3.5 2 6 5 6 9M12 9V4',
  },
  {
    title: 'Garden beds tidied',
    body: 'Leaves lifted out of beds and from around shrubs, without damaging the plants underneath.',
    icon: 'M5 20c0-5 3-9 7-11 4 2 7 6 7 11M12 9c0-3 1.5-5 4-6M12 9c0-3-1.5-5-4-6',
  },
  {
    title: 'One visit or the whole season',
    body: 'A single fall cleanup, or return visits through November and December as the trees drop.',
    icon: 'M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z',
  },
];

// Real Google reviews from the Gardening Thyme Business Profile (5.0, 13 reviews as of Nov 2026).
// Excerpts are quoted word for word; update REVIEW_COUNT when the profile grows.
const REVIEW_COUNT = 13;
const GOOGLE_PROFILE_URL = 'https://www.google.com/maps/place/Gardening+Thyme/data=!4m2!3m1!1s0x88f56b26811d0241:0x9725e4e12706b960';
const REVIEWS = [
  {
    name: 'Corrie D.',
    text: 'They filled my beds, did total clean up, educated me on plants, flowers, pests, and most importantly soil.',
  },
  {
    name: 'Anelia M.',
    text: 'Andrew is knowledgeable, dependable and takes great pride in his work product.',
  },
  {
    name: 'T. W.',
    text: 'They keep my back yard looking good. I appreciate their organic and sustainable methods, as well as their reliability.',
  },
];

const STEPS = [
  { n: '01', title: 'Tell us about your yard', body: 'Send the short form below or call. A rough idea of size and tree cover is plenty.' },
  { n: '02', title: 'Get your quote', body: 'We typically respond within one business day with a price and a date.' },
  { n: '03', title: 'We clear the leaves', body: 'Lawn and beds cleared. Add fall bulb planting while we are there if you like.' },
];

export default function LeafRemovalClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState({ isError: false, message: '', showStatus: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.showStatus) setStatus({ isError: false, message: '', showStatus: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return setStatus({ isError: true, message: 'Please enter your name', showStatus: true });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return setStatus({ isError: true, message: 'Please enter a valid email address', showStatus: true });
    }

    setIsSubmitting(true);
    setStatus({ isError: false, message: 'Sending your request...', showStatus: true });

    const where = formData.city ? `City: ${formData.city}\n` : '';
    const details = formData.message.trim() || 'No extra details given.';

    try {
      const recaptchaToken = await getRecaptchaToken('contact_form_submit');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceType: 'leaf-removal',
          subject: `Leaf removal quote${formData.city ? ` (${formData.city})` : ''}`,
          message: `${where}${details}`,
          honeypot: formData.honeypot,
          recaptchaToken,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send your request');

      setStatus({ isError: false, message: 'Thank you! We will get back to you within one business day.', showStatus: true });

      // Same Google Ads conversion as the /contact form ("Website Contact Form")
      sendLeadConversion({ email: formData.email, phone: formData.phone });

      setFormData({ name: '', email: '', phone: '', city: '', message: '', honeypot: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ isError: true, message: error.message || 'There was an error sending your request. Please try again or call us.', showStatus: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldBase =
    'w-full font-sans text-[15px] text-ink bg-cloud border border-mist rounded-[4px] px-[14px] py-[13px] outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-[#9b988b] focus:border-moss focus:shadow-[0_0_0_3px_rgba(90,110,76,0.12)] disabled:opacity-70';
  const labelText = 'font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-moss';

  return (
    <div className="min-h-screen bg-paper">
      {/* ============ HERO ============ */}
      <motion.header
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[820px] mx-auto px-8 pt-20 pb-14 text-center"
      >
        <p className="eyebrow mb-[22px]">Fall Leaf Removal &middot; Marietta &amp; North Atlanta</p>
        <h1 className="font-serif font-medium text-ink text-[2.5rem] md:text-[3.75rem] leading-[1.02] tracking-[-0.015em]">
          Leaf removal service, <span className="italic">done properly</span>.
        </h1>
        <p className="font-sans font-light text-[17px] leading-[1.75] text-[#3a3c33] max-w-[560px] mx-auto mt-[26px]">
          Fall leaf cleanups for lawns and garden beds from a local garden design team. Request a quote in a minute, or call us.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <a
            href="#quote"
            className="font-sans text-[14px] font-semibold tracking-[0.02em] text-cloud bg-forest rounded-[4px] px-8 py-[15px] transition-colors duration-150 hover:bg-[#243523]"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+14048617744"
            className="font-sans text-[14px] font-semibold tracking-[0.02em] text-forest bg-cloud border border-mist rounded-[4px] px-8 py-[15px] transition-colors duration-150 hover:bg-sage-tint"
          >
            Call (404) 861-7744
          </a>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 font-sans text-[13px] text-[#3a3c33]" aria-label="Why Gardening Thyme">
          {['Licensed & insured', 'Local Marietta team', 'Quotes within one business day'].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </motion.header>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section className="max-w-[1100px] mx-auto px-8 pb-20">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">What&apos;s included</p>
          <h2 className="font-serif text-ink text-[2rem] md:text-[2.5rem]">Leaf cleanups, from lawn to borders</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INCLUDED.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-cloud border border-mist rounded-[6px] p-8"
            >
              <div className="w-12 h-12 rounded-full bg-sage-tint flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={item.icon} />
                </svg>
              </div>
              <h3 className="font-serif text-ink text-[1.5rem] mb-3">{item.title}</h3>
              <p className="font-sans text-[15px] leading-[1.7] text-[#3a3c33]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="max-w-[1100px] mx-auto px-8 pb-20" aria-labelledby="reviews-heading">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">From our clients</p>
          <h2 id="reviews-heading" className="font-serif text-ink text-[2rem] md:text-[2.5rem]">Rated 5.0 on Google</h2>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 font-sans text-[14px] text-moss underline underline-offset-4 hover:text-forest"
          >
            <span aria-hidden="true" className="text-[#8A6A0B] tracking-[0.1em]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            Read all {REVIEW_COUNT} reviews on Google
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="bg-cloud border border-mist rounded-[6px] p-8 flex flex-col justify-between">
              <blockquote className="font-serif text-ink text-[1.2rem] leading-[1.45]">&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-6 font-sans text-[13px] text-[#3a3c33]">
                <span aria-label="5 out of 5 stars" className="text-[#8A6A0B] mr-2">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                {r.name} &middot; Google review
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============ SEASON BAND ============ */}
      <section className="bg-sage-tint">
        <div className="max-w-[1100px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div>
            <p className="eyebrow mb-3 !text-forest">Book early</p>
            <h2 className="font-serif text-ink text-[2rem] md:text-[2.5rem]">November is the busiest month for leaves.</h2>
          </div>
          <p className="font-sans text-[16px] leading-[1.75] text-[#3a3c33]">
            Most trees in North Atlanta drop through November into December. Getting on the schedule now means your
            lawn is cleared before wet leaves mat down and smother the grass and beds.
          </p>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="max-w-[1100px] mx-auto px-8 py-20">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="font-serif text-ink text-[2rem] md:text-[2.5rem]">Three simple steps</h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s) => (
            <li key={s.n} className="border-t border-forest pt-6">
              <div className="font-serif italic text-moss text-[1.75rem] mb-2">{s.n}</div>
              <h3 className="font-serif text-ink text-[1.4rem] mb-2">{s.title}</h3>
              <p className="font-sans text-[15px] leading-[1.7] text-[#3a3c33]">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ============ QUOTE SPLIT ============ */}
      <section id="quote" className="max-w-[1100px] mx-auto px-8 pb-24 grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] gap-6 items-stretch scroll-mt-24">
        {/* Info panel — Forest anchor surface */}
        <aside className="bg-forest text-cloud rounded-[6px] p-[42px] md:p-12 flex flex-col justify-between gap-10">
          <div>
            <div className="font-serif text-[30px] leading-[1.08] text-cloud">Prefer to talk it through?</div>
            <p className="font-sans font-light text-[14px] leading-[1.7] text-[#AEBCA0] mt-4">
              Call during business hours and we&apos;ll give you a quote on the phone.
            </p>
          </div>

          <div className="flex flex-col gap-[26px]">
            <div>
              <div className="font-sans text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#AEBCA0] mb-[9px]">Phone</div>
              <a href="tel:+14048617744" className="text-[15.5px] text-cloud hover:text-sage-tint transition-colors">(404) 861-7744</a>
            </div>
            <div>
              <div className="font-sans text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#AEBCA0] mb-[9px]">Email</div>
              <a href="mailto:services@gardeningthyme.com" className="text-[15.5px] text-cloud hover:text-sage-tint transition-colors">services@gardeningthyme.com</a>
            </div>
            <div>
              <div className="font-sans text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#AEBCA0] mb-[9px]">Hours</div>
              <div className="text-[15.5px] text-cloud">Mon &ndash; Fri &middot; 9am &ndash; 5pm</div>
            </div>
          </div>

          <div>
            <div className="font-sans text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#AEBCA0] mb-[14px]">Leaf removal areas</div>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <span key={city} className="text-[12.5px] text-cloud px-[13px] py-[7px] rounded-full border border-[rgba(174,188,160,0.45)]">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Form card */}
        <div className="bg-cloud border border-mist rounded-[6px] p-[42px] md:p-12">
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-moss mb-2">Free quote</p>
          <h2 className="font-serif font-medium text-[30px] leading-[1.05] tracking-[-0.01em] text-ink mb-[18px]">
            Request your leaf removal quote
          </h2>

          {status.showStatus && status.message && (
            <div
              role="status"
              aria-live="polite"
              className={`mb-6 px-4 py-3 rounded-[4px] text-sm font-medium ${
                status.isError ? 'bg-red-50 text-red-800 border border-red-100' : 'bg-sage-tint text-forest border border-[#A9B596]'
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} onFocusCapture={() => loadRecaptcha()} className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
            {/* Honeypot */}
            <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true" suppressHydrationWarning>
              <label htmlFor="lr-website">Website (leave blank)</label>
              <input type="text" id="lr-website" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>

            <label className="flex flex-col gap-2">
              <span className={labelText}>Name</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className={fieldBase} placeholder="Jane Appleseed" required disabled={isSubmitting} />
            </label>

            <label className="flex flex-col gap-2">
              <span className={labelText}>Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={fieldBase} placeholder="jane@email.com" required disabled={isSubmitting} />
            </label>

            <label className="flex flex-col gap-2">
              <span className={labelText}>Phone <span className="text-[#6B695E] font-medium tracking-normal">&middot; optional</span></span>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={fieldBase} placeholder="(404) 000-0000" disabled={isSubmitting} />
            </label>

            <label className="flex flex-col gap-2">
              <span className={labelText}>City <span className="text-[#6B695E] font-medium tracking-normal">&middot; optional</span></span>
              <div className="relative">
                <select name="city" value={formData.city} onChange={handleChange} className={`${fieldBase} appearance-none pr-10 cursor-pointer`} disabled={isSubmitting}>
                  <option value="">Select your city</option>
                  {CITIES.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                <svg className="w-3 h-3 text-moss absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </label>

            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className={labelText}>About your yard <span className="text-[#6B695E] font-medium tracking-normal">&middot; optional</span></span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`${fieldBase} leading-[1.6] resize-y`}
                placeholder="Roughly how big is the yard, and how many trees? Front, back or both?"
                disabled={isSubmitting}
              ></textarea>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="sm:col-span-2 mt-1 font-sans text-[14px] font-semibold tracking-[0.02em] text-cloud bg-forest border-0 rounded-[4px] px-6 py-[17px] transition-colors duration-150 hover:bg-[#243523] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending…' : 'Request My Quote'}
            </button>

            <p className="sm:col-span-2 font-sans text-[12px] leading-[1.6] text-[#6B695E] text-center mt-1.5">
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-moss underline">Privacy Policy</a>{' '}
              and{' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-moss underline">Terms of Service</a>{' '}
              apply.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
