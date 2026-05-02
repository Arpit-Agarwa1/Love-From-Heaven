import { useEffect, useState } from 'react';
import { BrandLogo } from './BrandLogo.jsx';

/** Top bar: wordmark and navigation with mobile menu. */
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

  const navItems = (
    <>
      <a href="#treats" className={linkClass} onClick={() => setMenuOpen(false)}>
        Menu
      </a>
      <a href="#order" className={linkClass} onClick={() => setMenuOpen(false)}>
        Order
      </a>
      <a href="#contact" className={linkClass} onClick={() => setMenuOpen(false)}>
        Contact
      </a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-heaven-mist/80 bg-heaven-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#"
          aria-label="Love From Heaven home bakery — top of page"
          className="group shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose"
        >
          <BrandLogo
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            loading="eager"
            alt=""
          />
        </a>

        <nav className="hidden items-center gap-10 sm:flex" aria-label="Main">
          {navItems}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-heaven-mist bg-white/80 text-heaven-cocoa shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose sm:hidden"
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
