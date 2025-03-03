import React from 'react';
import { Helmet } from 'react-helmet';

const Document = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#013220" />
        <meta 
          name="description" 
          content="Henry Capital - Asset-based lending solutions for the lower-mid-market. Flexible financing with PIK interest, longer terms, and no personal guarantees." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://henrycapital.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://henrycapital.com" />
        <meta property="og:title" content="Henry Capital | Asset-Based Lending Solutions" />
        <meta 
          property="og:description" 
          content="Flexible financing solutions for the lower-mid-market with PIK interest, longer terms, and no personal guarantees." 
        />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://henrycapital.com" />
        <meta name="twitter:title" content="Henry Capital | Asset-Based Lending Solutions" />
        <meta 
          name="twitter:description" 
          content="Flexible financing solutions for the lower-mid-market with PIK interest, longer terms, and no personal guarantees." 
        />
      </Helmet>
      {children}
    </>
  );
};

export default Document;
