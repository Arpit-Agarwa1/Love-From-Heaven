import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BrandLogo } from './BrandLogo.jsx';

/** Top bar: logo, navigation (including Our Story), and mobile menu. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const linkClass =
    'text-sm font-medium text-heaven-cocoa/85 transition-colors hover:text-heaven-rose focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose rounded-sm';

  const pageNavLinkClass = ({ isActive }) =>
    [linkClass, isActive ? 'text-heaven-rose' : ''].filter(Boolean).join(' ');

  const navItems = (
    <>
      <Link
        to={{ pathname: '/', hash: 'treats' }}
        className={linkClass}
        onClick={() => setMenuOpen(false)}
      >
        Menu
      </Link>
      <Link
        to={{ pathname: '/', hash: 'order' }}
        className={linkClass}
        onClick={() => setMenuOpen(false)}
      >
        Order
      </Link>
      <NavLink to="/gallery" className={pageNavLinkClass} onClick={() => setMenuOpen(false)} end>
        Gallery
      </NavLink>
      <NavLink to="/our-story" className={pageNavLinkClass} onClick={() => setMenuOpen(false)} end>
        Our story
      </NavLink>
      <NavLink to="/contact" className={pageNavLinkClass} onClick={() => setMenuOpen(false)} end>
        Contact
      </NavLink>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-heaven-mist/80 bg-heaven-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-4 sm:gap-6 sm:px-6 sm:py-4 lg:px-8">
        <Link
          to="/"
          aria-label="Love From Heaven home bakery — home"
          className="group flex shrink-0 items-center justify-center rounded-full bg-white p-2 shadow-[0_1px_2px_rgba(61,50,41,0.06),0_6px_16px_-4px_rgba(61,50,41,0.08)] ring-1 ring-heaven-cocoa/[0.08] transition-shadow duration-200 hover:shadow-[0_2px_6px_rgba(61,50,41,0.08),0_10px_24px_-6px_rgba(61,50,41,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose sm:p-2.5"
        >
          <BrandLogo
            className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-[4.5rem] lg:w-[4.5rem]"
            loading="eager"
            alt=""
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:gap-10 sm:flex" aria-label="Main">
          {navItems}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-heaven-mist bg-white/90 text-heaven-cocoa shadow-sm transition hover:border-heaven-cocoa/12 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-heaven-mist bg-heaven-cream/98 px-4 py-4 shadow-inner sm:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-4" aria-label="Mobile main">
            {navItems}
          </nav>
        </div>
      )}
    </header>
  );
}
