'use client';

import { useEffect, useState } from 'react';

export default function CookiebotDiagnostic() {
  const [diagnostics, setDiagnostics] = useState({});

  useEffect(() => {
    const runDiagnostics = () => {
      const results = {
        timestamp: new Date().toLocaleTimeString(),
        domain: window.location.hostname,
        cookiebotScriptExists: !!document.getElementById('Cookiebot'),
        cookiebotObjectDefined: typeof window.Cookiebot !== 'undefined',
        cookiebotReady: window.Cookiebot?.consent !== undefined,
        consentState: window.Cookiebot?.consent || 'Not available',
        errors: [],
        scripts: []
      };

      // Check for scripts loading from Cookiebot domains
      document.querySelectorAll('script').forEach(script => {
        if (script.src && (script.src.includes('cookiebot') || script.src.includes('consentcdn'))) {
          results.scripts.push({
            src: script.src,
            loaded: script.readyState === 'complete' || script.readyState === 'loaded'
          });
        }
      });

      // Check console for Cookiebot errors
      const originalConsoleError = console.error;
      console.error = function(...args) {
        const errorMsg = args.join(' ');
        if (errorMsg.toLowerCase().includes('cookiebot')) {
          results.errors.push(errorMsg);
        }
        originalConsoleError.apply(console, args);
      };

      setDiagnostics(results);
      
      // Log to console for easy viewing
      console.log('%c🔍 COOKIEBOT DIAGNOSTICS', 'background: #ff6b6b; color: white; font-size: 16px; padding: 5px 10px; border-radius: 5px;');
      console.table(results);
      
      if (!results.cookiebotObjectDefined) {
        console.error('❌ Cookiebot object is NOT defined - script may not be loading');
      } else if (!results.cookiebotReady) {
        console.warn('⚠️ Cookiebot object exists but not ready');
      } else {
        console.log('✅ Cookiebot is loaded and ready!');
      }
    };

    // Run diagnostics immediately and every 2 seconds for 10 seconds
    runDiagnostics();
    const interval = setInterval(runDiagnostics, 2000);
    setTimeout(() => clearInterval(interval), 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      background: 'black',
      color: 'lime',
      padding: '15px',
      borderRadius: '8px',
      fontFamily: 'monospace',
      fontSize: '12px',
      maxWidth: '400px',
      zIndex: 999999,
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px', color: 'yellow' }}>
        🔍 COOKIEBOT DIAGNOSTIC
      </div>
      
      <div><strong>Domain:</strong> {diagnostics.domain}</div>
      <div><strong>Time:</strong> {diagnostics.timestamp}</div>
      
      <div style={{ marginTop: '10px', borderTop: '1px solid #333', paddingTop: '10px' }}>
        <div style={{ color: diagnostics.cookiebotScriptExists ? 'lime' : 'red' }}>
          {diagnostics.cookiebotScriptExists ? '✅' : '❌'} Script Tag Exists
        </div>
        <div style={{ color: diagnostics.cookiebotObjectDefined ? 'lime' : 'red' }}>
          {diagnostics.cookiebotObjectDefined ? '✅' : '❌'} Cookiebot Object Defined
        </div>
        <div style={{ color: diagnostics.cookiebotReady ? 'lime' : 'orange' }}>
          {diagnostics.cookiebotReady ? '✅' : '⏳'} Cookiebot Ready
        </div>
      </div>

      {diagnostics.scripts?.length > 0 && (
        <div style={{ marginTop: '10px', fontSize: '10px' }}>
          <strong>Scripts Found:</strong>
          {diagnostics.scripts.map((script, i) => (
            <div key={i} style={{ marginLeft: '10px', wordBreak: 'break-all' }}>
              • {script.src.substring(0, 50)}...
            </div>
          ))}
        </div>
      )}

      {diagnostics.errors?.length > 0 && (
        <div style={{ marginTop: '10px', color: 'red' }}>
          <strong>Errors:</strong>
          {diagnostics.errors.map((err, i) => (
            <div key={i}>{err}</div>
          ))}
        </div>
      )}
    </div>
  );
}
