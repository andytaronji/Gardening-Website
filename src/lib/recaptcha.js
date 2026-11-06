// reCAPTCHA v3, loaded on demand.
// The script (~150 KB plus an iframe) used to load on every page view of /contact and
// /leaf-removal, slowing the first paint on phones. Now it loads the first time someone
// focuses a form field, and getRecaptchaToken() waits for it if needed, so the
// /api/contact check (which requires a token) still works.

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
let loading = null;

export function loadRecaptcha() {
  if (typeof window === 'undefined' || !SITE_KEY) return Promise.resolve(false);
  if (window.grecaptcha && window.grecaptcha.execute) return Promise.resolve(true);
  if (loading) return loading;
  loading = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.warn('reCAPTCHA failed to load');
      loading = null;
      resolve(false);
    };
    document.head.appendChild(script);
  });
  return loading;
}

export async function getRecaptchaToken(action = 'contact_form_submit') {
  const ok = await loadRecaptcha();
  if (!ok || !window.grecaptcha) return null;
  try {
    await new Promise((resolve) => window.grecaptcha.ready(resolve));
    return await window.grecaptcha.execute(SITE_KEY, { action });
  } catch (error) {
    console.error('Error getting reCAPTCHA token:', error);
    return null;
  }
}

// Enhanced conversions: hand Google the lead's email/phone right before the conversion
// event. gtag hashes these (SHA-256) in the browser before sending; Google uses them only
// to match the lead to the ad click. Requires "allow_enhanced_conversions" in the config
// (OptimizedAnalytics) and enhanced conversions turned on in Google Ads.
export function sendLeadConversion({ email, phone }, sendTo = 'AW-17486011088/eF1sCMyUicAcENC1_ZFB') {
  if (typeof window === 'undefined' || !window.gtag) return;
  const userData = {};
  if (email) userData.email = String(email).trim().toLowerCase();
  const digits = String(phone || '').replace(/\D/g, '');
  if (digits.length === 10) userData.phone_number = `+1${digits}`;
  else if (digits.length === 11 && digits.startsWith('1')) userData.phone_number = `+${digits}`;
  if (Object.keys(userData).length) window.gtag('set', 'user_data', userData);
  window.gtag('event', 'conversion', { send_to: sendTo });
  // GA4 lead event (marked as a key event in Analytics)
  window.gtag('event', 'generate_lead', { page_path: window.location.pathname });
}
