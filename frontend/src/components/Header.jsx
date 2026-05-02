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
    'text-[13px] font-semibold tracking-wide text-heaven-cocoa/80 transition-colors duration-200 ease-out hover:text-heaven-cocoa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose rounded-full';

  const pageNavLinkClass = ({ isActive }) =>
    [
      linkClass,
      'px-3.5 py-2',
      isActive
        ? 'bg-heaven-cocoa/[0.07] text-heaven-cocoa shadow-soft ring-1 ring-heaven-mist/90'
        : 'text-heaven-cocoa/75 hover:bg-heaven-cocoa/[0.04] hover:text-heaven-cocoa',
    ].join(' ');

  const navItems = (
    <>
      <NavLink to="/menu" className={pageNavLinkClass} onClick={() => setMenuOpen(false)} end>
        Menu
      </NavLink>
      <Link
        to={{ pathname: '/', hash: 'order' }}
        className={`${linkClass} px-3.5 py-2`}
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
    <header className="sticky top-0 z-50 border-b border-heaven-mist/70 bg-heaven-cream/90 shadow-header backdrop-blur-xl supports-[backdrop-filter]:bg-heaven-cream/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-3.5 sm:gap-6 sm:px-6 sm:py-4 lg:px-8">
        <Link
          to="/"
          aria-label="Love From Heaven home bakery — home"
          className="flex shrink-0 items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose"
        >
          <BrandLogo
            className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-[4.5rem] lg:w-[4.5rem]"
            loading="eager"
            alt=""
          />
        </Link>

        <nav className="hidden items-center gap-1 sm:flex lg:gap-1" aria-label="Main">
          {navItems}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-heaven-mist/90 bg-white/95 text-heaven-cocoa shadow-soft transition hover:border-heaven-cocoa/15 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose sm:hidden"
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
