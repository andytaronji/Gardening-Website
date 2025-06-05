'use client';

import { useState, useEffect } from 'react';

// Login Component
function LoginForm({ onLogin, error, loading }) {
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [lockoutUntil, setLockoutUntil] = useState(null);

  useEffect(() => {
    // Check if user is locked out
    const lockout = localStorage.getItem('admin_lockout');
    if (lockout) {
      const lockoutTime = parseInt(lockout);
      if (Date.now() < lockoutTime) {
        setLockoutUntil(lockoutTime);
      } else {
        localStorage.removeItem('admin_lockout');
        localStorage.removeItem('admin_attempts');
      }
    }

    // Get current attempts
    const currentAttempts = localStorage.getItem('admin_attempts');
    if (currentAttempts) {
      setAttempts(parseInt(currentAttempts));
    }
  }, []);

  useEffect(() => {
    if (lockoutUntil) {
      const timer = setInterval(() => {
        if (Date.now() >= lockoutUntil) {
          setLockoutUntil(null);
          setAttempts(0);
          localStorage.removeItem('admin_lockout');
          localStorage.removeItem('admin_attempts');
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [lockoutUntil]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (lockoutUntil && Date.now() < lockoutUntil) {
      return;
    }

    if (attempts >= 3) {
      const lockoutTime = Date.now() + (5 * 60 * 1000); // 5 minutes
      setLockoutUntil(lockoutTime);
      localStorage.setItem('admin_lockout', lockoutTime.toString());
      return;
    }

    const success = await onLogin(password);
    
    if (!success) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      localStorage.setItem('admin_attempts', newAttempts.toString());
      
      if (newAttempts >= 3) {
        const lockoutTime = Date.now() + (5 * 60 * 1000); // 5 minutes
        setLockoutUntil(lockoutTime);
        localStorage.setItem('admin_lockout', lockoutTime.toString());
      }
    } else {
      // Reset attempts on successful login
      setAttempts(0);
      localStorage.removeItem('admin_attempts');
      localStorage.removeItem('admin_lockout');
    }
    
    setPassword('');
  };

  const getRemainingLockoutTime = () => {
    if (!lockoutUntil) return 0;
    return Math.max(0, Math.ceil((lockoutUntil - Date.now()) / 1000));
  };

  const isLockedOut = lockoutUntil && Date.now() < lockoutUntil;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Access Required
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the admin password to access the Google Indexing Dashboard
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Admin password"
              disabled={loading || isLockedOut}
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {attempts > 0 && attempts < 3 && (
            <div className="text-orange-600 text-sm text-center">
              {3 - attempts} attempts remaining before lockout
            </div>
          )}

          {isLockedOut && (
            <div className="text-red-600 text-sm text-center">
              Too many failed attempts. Try again in {getRemainingLockoutTime()} seconds.
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading || isLockedOut}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Authenticating...' : 'Access Dashboard'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            This is a secure admin area for managing Google indexing operations.
          </p>
        </div>
      </div>
    </div>
  );
}

// Main Dashboard Component (existing functionality)
function IndexingDashboard({ onLogout }) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [singleUrl, setSingleUrl] = useState('');
  const [serviceInfo, setServiceInfo] = useState(null);

  // Fetch service information
  const fetchServiceInfo = async () => {
    try {
      const response = await fetch('/api/indexing');
      const data = await response.json();
      setServiceInfo(data);
    } catch (error) {
      console.error('Error fetching service info:', error);
    }
  };

  // Submit single URL for indexing
  const submitSingleUrl = async () => {
    if (!singleUrl.trim()) {
      alert('Please enter a URL');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/indexing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: singleUrl,
          type: 'URL_UPDATED'
        }),
      });

      const data = await response.json();
      setResults(data);
      setSingleUrl('');
    } catch (error) {
      console.error('Error submitting URL:', error);
      setResults({
        success: false,
        message: 'Error submitting URL for indexing',
        error: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  // Bulk index all site URLs
  const bulkIndexSite = async () => {
    if (!confirm('This will submit all your site URLs to Google for indexing. Continue?')) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/indexing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'bulk_index',
          type: 'URL_UPDATED'
        }),
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error bulk indexing:', error);
      setResults({
        success: false,
        message: 'Error performing bulk indexing',
        error: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Google Indexing Dashboard
              </h1>
              <p className="text-gray-600">
                Monitor and manage Google indexing for your gardening website
              </p>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Logout
            </button>
          </div>

          {/* Service Info Section */}
          <div className="mb-8">
            <button
              onClick={fetchServiceInfo}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
            >
              Load Service Info
            </button>

            {serviceInfo && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">Service Status</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Domain: {serviceInfo.info?.domain}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Total URLs: {serviceInfo.info?.totalUrls}
                </p>
                <details className="mt-2">
                  <summary className="cursor-pointer text-sm font-medium">
                    View All URLs ({serviceInfo.info?.totalUrls})
                  </summary>
                  <ul className="mt-2 text-sm text-gray-600 max-h-40 overflow-y-auto">
                    {serviceInfo.info?.urls?.map((url, index) => (
                      <li key={index} className="py-1">{url}</li>
                    ))}
                  </ul>
                </details>
              </div>
            )}
          </div>

          {/* Single URL Submission */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Submit Single URL</h2>
            <div className="flex gap-2">
              <input
                type="url"
                value={singleUrl}
                onChange={(e) => setSingleUrl(e.target.value)}
                placeholder="https://gardeningthyme.com/your-page"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              />
              <button
                onClick={submitSingleUrl}
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-md"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>

          {/* Bulk Indexing */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Bulk Site Indexing</h2>
            <p className="text-gray-600 mb-4">
              Submit all your important pages to Google for indexing. This includes your main pages, 
              services, portfolio, and blog.
            </p>
            <button
              onClick={bulkIndexSite}
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-md"
            >
              {loading ? 'Processing...' : 'Bulk Index All Pages'}
            </button>
          </div>

          {/* Results Display */}
          {results && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Results</h2>
              <div className={`p-4 rounded-md ${results.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center mb-2">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${results.success ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="font-medium">{results.success ? 'Success' : 'Error'}</span>
                </div>
                <p className="text-sm mb-2">{results.message}</p>
                
                {results.summary && (
                  <div className="text-sm">
                    <p>Total: {results.summary.total}</p>
                    <p>Successful: {results.summary.successful}</p>
                    <p>Failed: {results.summary.failed}</p>
                  </div>
                )}

                {results.results && Array.isArray(results.results) && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm font-medium">
                      View Detailed Results
                    </summary>
                    <div className="mt-2 max-h-60 overflow-y-auto">
                      {results.results.map((result, index) => (
                        <div key={index} className={`text-xs p-2 mb-1 rounded ${result.success ? 'bg-green-100' : 'bg-red-100'}`}>
                          <div className="font-medium">{result.url}</div>
                          <div>{result.success ? 'Success' : `Error: ${result.error}`}</div>
                          <div className="text-gray-500">{result.timestamp}</div>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">How to Use</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Single URL:</strong> Submit individual pages when you publish new content</li>
              <li>• <strong>Bulk Index:</strong> Submit all your important pages at once (recommended for initial setup)</li>
              <li>• <strong>Rate Limits:</strong> Google allows 200 requests per day, so use bulk indexing wisely</li>
              <li>• <strong>Monitoring:</strong> Check your Google Search Console for indexing status</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component with Authentication
export default function AdminIndexingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    // Check for existing session on page load
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    try {
      const sessionData = localStorage.getItem('admin_session');
      if (sessionData) {
        const { sessionToken, expiresAt } = JSON.parse(sessionData);
        
        if (Date.now() < expiresAt) {
          // Verify session with server
          const response = await fetch(`/api/admin/auth?token=${sessionToken}&expires=${expiresAt}`);
          if (response.ok) {
            setIsAuthenticated(true);
            setLoading(false);
            return;
          }
        }
        
        // Clear invalid session
        localStorage.removeItem('admin_session');
      }
    } catch (error) {
      console.error('Error checking session:', error);
      localStorage.removeItem('admin_session');
    }
    
    setLoading(false);
  };

  const handleLogin = async (password) => {
    setLoginLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        // Store session data
        localStorage.setItem('admin_session', JSON.stringify({
          sessionToken: data.sessionToken,
          expiresAt: data.expiresAt
        }));
        
        setIsAuthenticated(true);
        setError('');
        return true;
      } else {
        setError(data.message || 'Authentication failed');
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Connection error. Please try again.');
      return false;
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_session');
    setIsAuthenticated(false);
    setError('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <LoginForm 
        onLogin={handleLogin} 
        error={error} 
        loading={loginLoading}
      />
    );
  }

  return <IndexingDashboard onLogout={handleLogout} />;
}
