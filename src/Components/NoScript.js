import React from 'react';

const NoScript = () => {
  return (
    <noscript>
      <div style={{
        padding: '20px',
        background: '#f8d7da',
        color: '#721c24',
        textAlign: 'center',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '9999'
      }}>
        <p>
          For the best experience, please enable JavaScript. However, this site will still function without it.
          Contact us at: <a href="mailto:info@henrycap.com">info@henrycap.com</a>
        </p>
      </div>
      <style>{`
        .animate-reveal,
        .scroll-hidden {
          opacity: 1 !important;
          transform: none !important;
        }
        .mobile-menu {
          display: none !important;
        }
        @media (max-width: 768px) {
          .desktop-menu {
            display: block !important;
          }
        }
      `}</style>
    </noscript>
  );
};

export default NoScript;
