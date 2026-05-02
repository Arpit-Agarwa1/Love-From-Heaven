import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo.jsx';

/** Primary hero: positioning, value proposition, and calls to action. */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-heaven-mist">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(241, 162, 187, 0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(201, 162, 39, 0.1), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10 lg:gap-14">
          <div
            className="flex shrink-0 items-center justify-center self-start rounded-3xl bg-white/80 p-4 shadow-[0_1px_2px_rgba(61,50,41,0.06),0_12px_32px_-8px_rgba(61,50,41,0.12)] ring-1 ring-heaven-cocoa/[0.08] backdrop-blur-sm sm:p-5"
            aria-hidden="true"
          >
            <BrandLogo
              className="h-24 w-24 object-contain sm:h-28 sm:w-28 lg:h-32 lg:w-32"
              loading="eager"
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-heaven-rose sm:text-sm">
              Small-batch baking · Seasonal ingredients
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-heaven-cocoa sm:text-5xl lg:text-[3.25rem]">
              Thoughtfully crafted desserts for every occasion
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-heaven-cocoa/72 sm:text-lg">
              Love From Heaven is a specialty home bakery focused on custom cakes, cookies, and seasonal pastries. Every
              order is made with quality ingredients and careful attention to detail.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4" id="order">
              <Link
                to="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-heaven-rose px-7 py-2.5 text-sm font-semibold text-heaven-cocoa shadow-sm transition hover:bg-heaven-cocoa hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-cocoa sm:px-8 sm:py-3"
              >
                Request a quote
              </Link>
          <Link
            to="/menu"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-heaven-cocoa/15 bg-white/70 px-7 py-2.5 text-sm font-semibold text-heaven-cocoa backdrop-blur-sm transition hover:border-heaven-gold/45 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose sm:px-8 sm:py-3"
          >
            View menu
          </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
