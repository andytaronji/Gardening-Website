# Content Security Policy Configuration

## Overview
This document explains the CSP configuration implemented in `next.config.js` to support Cookiebot consent management and React development tools.

## Current Configuration

### Script-Src Directive
The CSP includes the following script sources:
- `'self'` - Allow scripts from same origin
- `'unsafe-inline'` - Allow inline scripts (required for React hydration)
- `'unsafe-eval'` - **Required for Cookiebot and React dev tools**
- All necessary third-party domains (GTM, Analytics, Cookiebot, Vercel, etc.)

## Why 'unsafe-eval' is Required

### Cookiebot Requirements
Cookiebot requires `'unsafe-eval'` to:
- Dynamically evaluate consent configurations
- Manage cookie categorization rules
- Control third-party script loading based on user consent
- Process consent mode v2 settings for Google services

### React Development
In development mode, React uses `eval()` for:
- Hot Module Replacement (HMR)
- React DevTools functionality
- Enhanced error messages and stack traces

## Testing Cookiebot

### 1. Access the Site
Navigate to: http://localhost:3000

### 2. Check Browser Console
Open DevTools (F12) and verify:
- ✅ No CSP violations for Cookiebot scripts
- ✅ Cookiebot banner appears on first visit
- ✅ Console logs show Cookiebot initialization

### 3. Verify Cookiebot Elements
Look for:
- Cookiebot consent banner (usually bottom or as modal)
- Cookie declaration link in footer
- Proper consent mode integration with Google services

### 4. Test Hard Refresh
If Cookiebot doesn't appear:
1. Press `Ctrl + Shift + Delete` to clear browser cache
2. Check "Cookies and other site data"
3. Clear data
4. Hard refresh with `Ctrl + Shift + R`

## CSP Header Structure

```javascript
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  "'unsafe-eval'",  // Required for Cookiebot
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://consent.cookiebot.com",
  "https://consentcdn.cookiebot.com",
  // ... other domains
].join(' ');
```

## Security Considerations

### Trade-offs
- ❌ `'unsafe-eval'` does introduce security risk
- ✅ Required for legitimate consent management
- ✅ Mitigated by strict domain whitelisting
- ✅ Combined with other security headers

### Best Practices Maintained
- All external domains explicitly whitelisted
- `frame-ancestors` and `X-Frame-Options` prevent clickjacking
- HTTPS enforced via HSTS header
- Referrer policy configured
- Permissions policy restricts sensitive APIs

## Future Improvements

### Option 1: Conditional CSP by Environment
```javascript
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  ...(process.env.NODE_ENV === 'development' ? ["'unsafe-eval'"] : []),
  // If Cookiebot requires eval in production, keep it included
  // Otherwise, remove for production builds
].join(' ');
```

### Option 2: CSP Level 3 with Strict-Dynamic
For modern browsers, consider implementing CSP Level 3 with nonces and `strict-dynamic`.

### Option 3: Alternative Consent Solution
If security is paramount, evaluate consent management platforms that don't require `eval()`.

## Verification Checklist

- [x] Development server starts without errors
- [ ] Cookiebot banner visible on localhost
- [ ] No CSP violations in browser console
- [ ] Cookie consent settings persist
- [ ] Google Consent Mode v2 integration works
- [ ] GTM and Analytics respect consent choices

## Troubleshooting

### Cookiebot Not Appearing
1. Check browser console for errors
2. Verify CBID in layout.js matches Cookiebot account
3. Clear browser cache and cookies
4. Check network tab for blocked requests
5. Verify CSP header includes consent.cookiebot.com

### CSP Violations Persist
1. Hard refresh browser (Ctrl + Shift + R)
2. Check actual headers sent (Network tab > Headers)
3. Verify Next.js config is not cached
4. Restart development server

### Production Deployment
When deploying to Vercel or other platforms:
1. Environment variables may affect CSP
2. Platform may inject additional CSP headers
3. Test thoroughly in production environment
4. Use browser DevTools to inspect actual CSP headers

## Related Files
- `next.config.js` - CSP configuration
- `src/app/layout.js` - Cookiebot implementation
- `COOKIEBOT_IMPLEMENTATION.md` - Consent management setup
- `CONSENT_MODE_V2_SETUP.md` - Google Consent Mode details

## Last Updated
January 9, 2026
