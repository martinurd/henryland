module.exports = {
  // Core settings
  source: 'build',
  destination: 'build',
  minifyHtml: {
    collapseWhitespace: true,
    removeComments: true
  },
  // Performance settings
  concurrency: 4,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  puppeteerIgnoreHTTPSErrors: true,
  // Wait for network and hydration
  waitFor: 2000,
  // Include all routes
  include: [
    '/',
    '/faqs',
    '/terms',
    '/privacy',
    '/application'
  ],
  // Prevent crawling external URLs
  skipThirdPartyRequests: true,
  // Handle dynamic content
  preconnectThirdParty: false,
  // Optimize for SEO
  removeStyleTags: false,
  removeScriptTags: false,
  // Preserve Firebase functionality
  asyncScriptTags: true,
  // Fix for potential hydration issues
  fixWebpackChunksIssue: false,
  fixInsertRule: true
};
