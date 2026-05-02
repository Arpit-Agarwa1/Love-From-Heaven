import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MENU_PDF = '/menu-2026-love-from-heaven.pdf';

/** Full 2026 menu (PDF from brand files): in-page viewer plus download / new-tab links. */
export function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const previous = document.title;
    document.title = 'Menu 2026 | Love From Heaven';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <article className="relative border-b border-heaven-mist">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% -15%, rgba(241, 162, 187, 0.28), transparent), radial-gradient(ellipse 50% 35% at 100% 40%, rgba(201, 162, 39, 0.08), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-heaven-rose sm:text-sm">Love From Heaven</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-heaven-cocoa sm:text-5xl">Menu 2026</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-heaven-cocoa/70">
          Official menu PDF. If the preview is blank on your phone, use <strong className="font-semibold text-heaven-cocoa/85">Open PDF</strong> or{' '}
          <strong className="font-semibold text-heaven-cocoa/85">Download</strong> below. Questions or custom orders?{' '}
          <Link to="/contact" className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 hover:decoration-heaven-rose/40">
            Contact us
          </Link>
          .
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={MENU_PDF}
            download="Menu-2026-Love-From-Heaven.pdf"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-heaven-rose px-6 py-2.5 text-sm font-semibold text-heaven-cocoa shadow-sm transition hover:bg-heaven-cocoa hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-cocoa"
          >
            Download PDF
          </a>
          <a
            href={MENU_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-heaven-cocoa/15 bg-white/80 px-6 py-2.5 text-sm font-semibold text-heaven-cocoa transition hover:border-heaven-gold/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose"
          >
            Open PDF in new tab
          </a>
          <Link
            to="/#treats"
            className="text-sm font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 hover:decoration-heaven-rose/40"
          >
            Featured picks on home
          </Link>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-heaven-mist bg-white shadow-sm">
          <iframe
            title="Love From Heaven menu 2026 PDF"
            src={`${MENU_PDF}#view=FitH`}
            className="h-[min(85vh,1200px)] w-full border-0 bg-heaven-cream/50"
          />
        </div>
      </div>
    </article>
  );
}
