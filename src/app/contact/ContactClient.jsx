'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    subject: '',
    message: '',
    honeypot: '' // Hidden honeypot field
  });

  const [status, setStatus] = useState({
    isError: false,
    message: '',
    showStatus: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const serviceTypes = [
    { value: '', label: 'Select a service' },
    { value: 'garden-design', label: 'Garden Design' },
    { value: 'groundskeeping', label: 'Groundskeeping' },
    { value: 'quarterly-cleanups', label: 'Quarterly Cleanups' },
    { value: 'property-enhancement', label: 'Property Enhancement' },
    { value: 'vegetable-garden', label: 'Vegetable Garden' },
    { value: 'permaculture-lawns', label: 'Permaculture Lawns' }
  ];

  const serviceAreas = ['East Cobb', 'Marietta', 'Roswell', 'Alpharetta', 'Sandy Springs', 'Milton', 'Buckhead', 'Atlanta', 'Vinings'];

  // Load reCAPTCHA v3 script
  useEffect(() => {
    const loadRecaptcha = () => {
      if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        return;
      }

      // Check if already loaded
      if (window.grecaptcha) {
        setRecaptchaLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setRecaptchaLoaded(true);
      };
      script.onerror = () => {
        console.warn('reCAPTCHA failed to load');
      };
      document.head.appendChild(script);
    };

    loadRecaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear status message when user starts typing again
    if (status.showStatus) {
      setStatus({
        isError: false,
        message: '',
        showStatus: false
      });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ isError: true, message: 'Please enter your name', showStatus: true });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ isError: true, message: 'Please enter your email address', showStatus: true });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ isError: true, message: 'Please enter a valid email address', showStatus: true });
      return false;
    }
    if (!formData.subject.trim()) {
      setStatus({ isError: true, message: 'Please enter a subject', showStatus: true });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ isError: true, message: 'Please enter your message', showStatus: true });
      return false;
    }
    return true;
  };

  const getRecaptchaToken = async () => {
    if (!recaptchaLoaded || !window.grecaptcha || !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
      console.warn('reCAPTCHA not available, submitting without token');
      return null;
    }
    try {
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { 
        action: 'contact_form_submit' 
      });
      return token;
    } catch (error) {
      console.error('Error getting reCAPTCHA token:', error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setStatus({ isError: false, message: 'Sending message...', showStatus: true });

    try {
      const recaptchaToken = await getRecaptchaToken();
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');
      
      setStatus({
        isError: false,
        message: 'Thank you for your message! We will get back to you soon.',
        showStatus: true
      });
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {'send_to': 'AW-17486011088/eF1sCMyUicAcENC1_ZFB'});
      }
      
      setFormData({ name: '', email: '', phone: '', serviceType: '', subject: '', message: '', honeypot: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        isError: true,
        message: error.message || 'There was an error sending your message. Please try again.',
        showStatus: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Shared field styles — Hanken 15px, mist border, 4px radius, moss focus ring.
  const fieldBase =
    'w-full font-sans text-[15px] text-ink bg-cloud border border-mist rounded-[4px] px-[14px] py-[13px] outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-[#9b988b] focus:border-moss focus:shadow-[0_0_0_3px_rgba(90,110,76,0.12)] disabled:opacity-70';
  const labelText =
    'font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-moss';

  return (
    <div className="min-h-screen bg-paper">
      {/* ============ HERO ============ */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[760px] mx-auto px-8 pt-20 pb-14 text-center"
      >
        <p className="eyebrow mb-[22px]">Get In Touch</p>
        <h1 className="font-serif font-medium text-ink text-[2.5rem] md:text-[3.75rem] leading-[1.02] tracking-[-0.015em]">
          Let&apos;s design your <span className="italic">garden</span>.
        </h1>
        <p className="font-sans font-light text-[17px] leading-[1.75] text-[#3a3c33] max-w-[520px] mx-auto mt-[26px]">
          Whether you&apos;re dreaming of a vibrant garden or need expert maintenance, we&apos;re here to help your outdoor space thrive.
        </p>
      </motion.header>

      {/* ============ CONTACT SPLIT ============ */}
      <main className="max-w-[1100px] mx-auto px-8 pb-24 grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] gap-6 items-stretch">

        {/* Info panel — Forest anchor surface */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-forest text-cloud rounded-[6px] p-[42px] md:p-12 flex flex-col justify-between gap-10"
        >
          <div>
            <div className="font-serif text-[30px] leading-[1.08] text-cloud">Reach out anytime.</div>
            <p className="font-sans font-light text-[14px] leading-[1.7] text-[#AEBCA0] mt-4">
              We typically respond within one business day. Prefer to talk it through? Give us a call.
            </p>
          </div>

          <div className="flex flex-col gap-[26px]">
            <div>
              <div className="font-sans text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#AEBCA0] mb-[9px]">Email</div>
              <a href="mailto:services@gardeningthyme.com" className="text-[15.5px] text-cloud hover:text-sage-tint transition-colors">services@gardeningthyme.com</a>
            </div>
            <div>
              <div className="font-sans text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#AEBCA0] mb-[9px]">Phone</div>
              <a href="tel:+14048617744" className="text-[15.5px] text-cloud hover:text-sage-tint transition-colors">(404) 861-7744</a>
            </div>
            <div>
              <div className="font-sans text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#AEBCA0] mb-[9px]">Hours</div>
              <div className="text-[15.5px] text-cloud">Mon &ndash; Fri &middot; 9am &ndash; 5pm</div>
            </div>
          </div>

          <div>
            <div className="font-sans text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#AEBCA0] mb-[14px]">Service Areas</div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="text-[12.5px] text-cloud px-[13px] py-[7px] rounded-full border border-[rgba(174,188,160,0.45)]">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.aside>

        {/* Form card — Cloud surface, no shadow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-cloud border border-mist rounded-[6px] p-[42px] md:p-12"
        >
          <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-moss mb-2">Send a message</p>
          <h2 className="font-serif font-medium text-[30px] leading-[1.05] tracking-[-0.01em] text-ink mb-[18px]">
            Tell us about your project
          </h2>

          {status.showStatus && status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              role="status"
              aria-live="polite"
              className={`mb-6 px-4 py-3 rounded-[4px] text-sm font-medium ${
                status.isError
                  ? 'bg-red-50 text-red-800 border border-red-100'
                  : 'bg-sage-tint text-forest border border-[#A9B596]'
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
            {/* Honeypot field */}
            <div
              style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
              aria-hidden="true"
              suppressHydrationWarning
            >
              <label htmlFor="website">Website (leave blank)</label>
              <input
                type="text"
                id="website"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <label className="flex flex-col gap-2">
              <span className={labelText}>Name</span>
              <input
                type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                className={fieldBase} placeholder="Jane Appleseed" required disabled={isSubmitting}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className={labelText}>Email</span>
              <input
                type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                className={fieldBase} placeholder="jane@email.com" required disabled={isSubmitting}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className={labelText}>Phone <span className="text-[#9b988b] font-medium tracking-normal">&middot; optional</span></span>
              <input
                type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                className={fieldBase} placeholder="(404) 000-0000" disabled={isSubmitting}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className={labelText}>Service Type <span className="text-[#9b988b] font-medium tracking-normal">&middot; optional</span></span>
              <div className="relative">
                <select
                  id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}
                  className={`${fieldBase} appearance-none pr-10 cursor-pointer`}
                  disabled={isSubmitting}
                >
                  {serviceTypes.map((service) => (
                    <option key={service.value} value={service.value}>{service.label}</option>
                  ))}
                </select>
                <svg className="w-3 h-3 text-moss absolute right-[14px] top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </label>

            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className={labelText}>Subject</span>
              <input
                type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}
                className={fieldBase} placeholder="What can we help with?" required disabled={isSubmitting}
              />
            </label>

            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className={labelText}>Message</span>
              <textarea
                id="message" name="message" value={formData.message} onChange={handleChange}
                rows="5"
                className={`${fieldBase} leading-[1.6] resize-y`}
                placeholder="Tell us about your space, your goals, and your timeline&hellip;"
                required disabled={isSubmitting}
              ></textarea>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="sm:col-span-2 mt-1 font-sans text-[14px] font-semibold tracking-[0.02em] text-cloud bg-forest border-0 rounded-[4px] px-6 py-[17px] transition-colors duration-150 hover:bg-[#243523] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>

            <p className="sm:col-span-2 font-sans text-[12px] leading-[1.6] text-[#9b988b] text-center mt-1.5">
              This site is protected by reCAPTCHA and the Google{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-moss underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-moss underline">
                Terms of Service
              </a>{' '}
              apply.
            </p>
          </form>
        </motion.section>
      </main>
    </div>
  );
}
