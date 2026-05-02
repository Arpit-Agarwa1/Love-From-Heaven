import { useState } from 'react';

/**
 * Tries common filenames under `public/` so you can drop in a provided mark without changing code.
 * Falls back to the existing favicon if none match.
 */
/** Official mark from brand PDF (`public/brand-logo.png`); then optional overrides and fallbacks. */
const LOGO_SOURCES = ['/brand-logo.png', '/logo.png', '/logo.svg', '/logo.jpg', '/logo.webp', '/favicon.svg'];

/**
 * Raster logos: prefer `h-* w-auto max-w-* object-contain` so wide marks sit naturally without a square crop.
 *
 * @param {object} props
 * @param {string} [props.className] — Tailwind / CSS classes for sizing (e.g. `h-12 w-auto max-w-[12rem] object-contain`).
 * @param {string} [props.loading] — Passed to `<img>`.
 * @param {string} [props.alt] — Empty when a parent link provides `aria-label`.
 */
export function BrandLogo({ className = '', loading = 'lazy', alt = '', ...rest }) {
  const [index, setIndex] = useState(0);
  const safeIndex = Math.min(index, LOGO_SOURCES.length - 1);
  const src = LOGO_SOURCES[safeIndex];

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={['brand-logo-img', className].filter(Boolean).join(' ')}
      onError={() =>
        setIndex((i) => (i < LOGO_SOURCES.length - 1 ? i + 1 : i))
      }
      {...rest}
    />
  );
}
