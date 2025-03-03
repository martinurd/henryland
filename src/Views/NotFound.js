import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Henry Capital</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-[#013220] text-white flex items-center justify-center p-4">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Page Not Found</p>
          <p className="mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="space-y-4">
            <Link
              to="/"
              className="block px-6 py-3 bg-white text-[#013220] rounded-lg hover:bg-gray-100 transition-colors"
            >
              Return Home
            </Link>
            <a
              href="mailto:info@henrycap.com"
              className="block px-6 py-3 border border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
