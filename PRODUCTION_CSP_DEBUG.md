# Production CSP Issue - Troubleshooting Guide

## Current Situation
- ✅ Local code has correct CSP with `'unsafe-eval'`
- ✅ Changes committed and pushed to GitHub (commit: bdee2f3)
- ❌ Production site still shows CSP blocking eval

## Immediate Checks

### 1. Verify Vercel Deployed Latest Code

**Go to your Vercel Dashboard:**
1. Visit https://vercel.com/dashboard
2. Click on your "gardeningthyme" project
3. Check the "Deployments" tab
4. **Is commit `bdee2f3` deployed?**
   - If NO: Click "Redeploy" on the latest commit
   - If YES but showing errors: Check the build logs

### 2. Check Actual Production Headers

**In your browser on gardeningthyme.com:**
1. Open DevTools (F12)
2. Go to **Network tab**
3. Refresh the page
4. Click on the first request (the HTML document)
5. Click **Headers** tab
6. Look for `content-security-policy` in Response Headers
7. **Does it include `'unsafe-eval'`?**

### 3. Check Production HTML Source

**On gardeningthyme.com:**
1. Right-click → "View Page Source"
2. Search for "Cookiebot" (Ctrl+F)
3. **Is the Cookiebot script tag present in the `<head>`?**
4. **Does it have `data-cbid="6645d838-2055-4407-8885-69ca6c2eb2c1"`?**

## Possible Issues & Solutions

### Issue 1: Vercel Didn't Auto-Deploy
**Solution:**
- Go to Vercel Dashboard
- Click "Redeploy" on the latest commit
- Wait 2-3 minutes
- Test again in incognito window

### Issue 2: Build Failed on Vercel
**Solution:**
- Check Vercel build logs for errors
- Common issues:
  - Syntax errors in next.config.js
  - Missing environment variables
  - Build timeout
- Fix errors and redeploy

### Issue 3: Vercel Edge Cache
**Solution:**
- Wait 10-15 minutes for edge cache to clear
- OR force cache clear:
  - Visit: `https://www.gardeningthyme.com/?nocache=123`
  - Use incognito mode
  - Clear browser cache completely

### Issue 4: Environment-Specific Config
**Solution:**
- Check if Vercel has environment-specific settings
- Verify no conflicting CSP headers in Vercel dashboard
- Check Vercel → Settings → Headers

### Issue 5: Vercel Override Headers
**Solution:**
- Check if Vercel has header overrides configured
- Go to Project Settings → Headers
- Ensure no CSP override that removes `'unsafe-eval'`

## Quick Test Commands

### Test if Cookiebot script loads:
```javascript
// In browser console on production
console.log(typeof window.Cookiebot);
// Should return "object" not "undefined"
```

### Test eval directly:
```javascript
// In browser console on production  
try {
  eval('console.log("eval works")');
} catch(e) {
  console.error("CSP blocked eval:", e);
}
```

## Force Vercel Redeploy

If nothing works, force a redeploy:

```bash
# Make a trivial change to trigger redeploy
git commit --allow-empty -m "Force Vercel redeploy"
git push origin main
```

Then check Vercel dashboard to confirm deployment.

## Expected Production Behavior

Once correctly deployed:
- ✅ No CSP eval errors in console
- ✅ `window.Cookiebot` returns object
- ✅ Consent banner appears on first visit
- ✅ No 404 errors for Cookiebot scripts

## Next Steps

1. Check your Vercel deployment status
2. Verify the actual headers on production
3. If needed, force redeploy
4. Test in fresh incognito window
5. Report back what you find in Vercel dashboard

---

**Last Updated:** January 9, 2026
**Latest Commit:** bdee2f3
