import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo.jsx';
import { driveThumbnailUrl, GALLERY_HOME_PREVIEW_IDS } from '../constants/gallery.js';

/** Primary hero: gallery photos as backdrop, value proposition, and calls to action. */
export function Hero() {
  return (
    <section className="relative min-h-[26rem] overflow-hidden border-b border-heaven-mist sm:min-h-[30rem] lg:min-h-[34rem]">
      {/* Full-bleed photo strip from shared Drive previews */}
      <div
        className="absolute inset-0 z-0 grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1"
        aria-hidden="true"
      >
        {GALLERY_HOME_PREVIEW_IDS.map((id, i) => (
          <div key={id} className="relative min-h-[11rem] overflow-hidden sm:min-h-0">
            <img
              src={driveThumbnailUrl(id, 900)}
              alt=""
              width={900}
              height={900}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Readability: strong wash on the copy side; lighter toward the photo strip */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-heaven-cream/96 via-heaven-cream/88 to-heaven-cream/80 sm:bg-gradient-to-r sm:from-heaven-cream sm:via-heaven-cream/93 sm:to-heaven-cream/50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 85% 65% at 15% 45%, rgba(241, 162, 187, 0.28), transparent), radial-gradient(ellipse 55% 45% at 95% 15%, rgba(201, 162, 39, 0.1), transparent)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10 lg:gap-14">
          <div
            className="flex shrink-0 items-center justify-center self-start rounded-3xl bg-white/90 p-4 shadow-[0_1px_2px_rgba(61,50,41,0.06),0_12px_32px_-8px_rgba(61,50,41,0.12)] ring-1 ring-heaven-cocoa/[0.08] backdrop-blur-sm sm:p-5"
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
            <p className="mt-6 max-w-xl text-base leading-relaxed text-heaven-cocoa/80 sm:text-lg">
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
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-heaven-cocoa/15 bg-white/85 px-7 py-2.5 text-sm font-semibold text-heaven-cocoa shadow-sm backdrop-blur-sm transition hover:border-heaven-gold/45 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose sm:px-8 sm:py-3"
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
