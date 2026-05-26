'use client';
import { useState, useEffect } from 'react';

export default function Banner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('banner-dismissed') !== '1') {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem('banner-dismissed', '1');
  }

  if (!visible) return null;

  return (
    <div className="banner" role="banner">
      <p className="banner__text">
        If you have been referred to me through The Living Room,{' '}
        <a href="#contact" className="banner__link">get in touch</a>
      </p>
      <button
        className="banner__close"
        onClick={dismiss}
        aria-label="Close banner"
      >
        ×
      </button>
    </div>
  );
}
