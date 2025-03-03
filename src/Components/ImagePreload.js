import React, { useState, useEffect } from 'react';

const ImagePreload = ({ src, alt, className, placeholder = null }) => {
  const [loaded, setLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  // During SSR or before load, show placeholder or nothing
  if (!isClient || !loaded) {
    return placeholder || (
      <div 
        className={`${className} bg-gray-200 animate-pulse`}
        aria-label={alt}
        role="img"
      />
    );
  }

  // After load, show actual image
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};

export default ImagePreload;
