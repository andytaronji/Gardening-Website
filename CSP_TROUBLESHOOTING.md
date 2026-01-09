# CSP Troubleshooting Guide

## Current Status
- ✅ Development server running on http://localhost:3000
- ✅ `next.config.js` includes `'unsafe-eval'` in scriptSrc
- ❌ CSP violations still being reported in browser

## Step-by-Step Verification

### 1. Check Actual CSP Headers Being Sent

**In Chrome/Edge DevTools:**
1. Open http://localhost:3000
2. Press `F12` to open DevTools
3. Go to **Network** tab
4. Refresh the page (`Ctrl + R`)
5. Click on the first request (usually just `/`)
6. Go to **Headers** tab
7. Scroll to **Response Headers**
8. Look for `content-security-policy` header
9. **Copy and paste the entire CSP header here** (or screenshot it)

**Expected CSP should include:**
```
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com ...
```

### 2. Check Console for Exact CSP Violation

**In Console tab:**
1. Look for messages starting with "Refused to..."
2. Note the **exact file/source** being blocked
3. Note which **directive** is blocking it

### 3. Clear All Caches

**In Browser:**
1. Press `Ctrl + Shift + Delete`
2. Select "All time"
3. Check "Cookies and other site data"
4. Check "Cached images and files"
5. Click "Clear data"
6. Close and reopen browser
7. Visit http://localhost:3000 again

**OR use Incognito Mode:**
1. Press `Ctrl + Shift + N` (Chrome) or `Ctrl + Shift + P` (Firefox/Edge)
2. Navigate to http://localhost:3000
3. Check if issue persists

## Common Issues & Solutions

### Issue 1: Browser Caching Old CSP
**Solution:** Hard refresh with `Ctrl + Shift + R` or use incognito

### Issue 2: Next.js Config Not Applied
**Symptoms:** CSP header doesn't match next.config.js
**Solution:**
- Kill all Node processes
- Delete `.next` folder
- Restart dev server

### Issue 3: Multiple CSP Sources
**Symptoms:** Multiple CSP headers in response
**Solution:** Check for:
- Vercel deployment settings
- Middleware files
- Meta tags in HTML
- Browser extensions

### Issue 4: CSP Template Literal Not Evaluating
**Symptoms:** CSP literally shows `${scriptSrc}` instead of values
**Solution:** Check syntax in next.config.js - should use backticks

## Current Configuration

From `next.config.js`:
```javascript
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  "'unsafe-eval'",  // ← This should be included
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://consent.cookiebot.com",
  "https://consentcdn.cookiebot.com",
  // ...other domains
].join(' ');

// CSP header
{
  key: 'Content-Security-Policy',
  value: `default-src 'self'; script-src ${scriptSrc}; ...`
}
```

## Manual Test

### Test 1: Console Command
In browser console, try running:
```javascript
eval('console.log("eval works!")');
```

**If it works:** CSP allows eval
**If it fails with CSP error:** CSP is blocking eval

### Test 2: Check Cookiebot Script Loading
In console, check if Cookiebot object exists:
```javascript
console.log(window.Cookiebot);
```

## Next Steps Based on Results

### If CSP header shows 'unsafe-eval' but still blocks:
- Check browser extensions (disable all)
- Check for meta CSP tags in HTML
- Check if Cookiebot specifically has other issues

### If CSP header DOESN'T show 'unsafe-eval':
- Server not picking up config changes
- Template literal not evaluated
- Conflicting CSP from another source

### If Cookiebot loads but shows 404 for configuration:
- This is a DIFFERENT issue (domain configuration in Cookiebot admin)
- CSP is working, but Cookiebot needs `localhost` added to allowed domains

## Debugging Checklist

- [ ] Checked actual CSP header in Network tab
- [ ] Compared actual header vs expected
- [ ] Cleared browser cache completely
- [ ] Tested in incognito/private mode
- [ ] Checked console for exact violation message
- [ ] Tested eval() manually in console
- [ ] Checked for multiple CSP headers
- [ ] Verified no conflicting meta tags
- [ ] Disabled all browser extensions
- [ ] Restarted dev server after config changes

## Contact Information

If issue persists after all troubleshooting:
1. Copy exact CSP header from Network tab
2. Copy exact console error message
3. Screenshot of Network Headers
4. Share these details for further diagnosis
