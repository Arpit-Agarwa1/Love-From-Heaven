import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_DRIVE_FILE_IDS, driveThumbnailUrl } from '../constants/gallery.js';

/** Founder narrative: origins, family, and why Love From Heaven exists. */
export function OurStoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const previous = document.title;
    document.title = 'Our Story | Love From Heaven';
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
            'radial-gradient(ellipse 70% 45% at 50% -15%, rgba(202, 100, 144, 0.32), transparent), radial-gradient(ellipse 50% 35% at 0% 60%, rgba(201, 162, 39, 0.08), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-heaven-rose sm:text-sm">
          Love From Heaven
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.12] text-heaven-cocoa sm:text-5xl">
          Our story
        </h1>
        <p className="mt-4 text-sm text-heaven-cocoa/55 sm:text-base">
          How this bakery began — in the founder&apos;s own words.
        </p>

        <ul className="mt-10 grid list-none grid-cols-3 gap-2 p-0 sm:mt-12 sm:gap-3" aria-label="Photos from the bakery">
          {GALLERY_DRIVE_FILE_IDS.slice(0, 3).map((fileId, i) => (
            <li key={fileId} className="overflow-hidden rounded-xl border border-heaven-mist/90 bg-white/60 shadow-sm ring-1 ring-heaven-cocoa/[0.04]">
              <Link
                to="/gallery"
                className="block aspect-square overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose"
              >
                <img
                  src={driveThumbnailUrl(fileId, 480)}
                  alt={`Love From Heaven bake ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-8 text-base leading-[1.75] text-heaven-cocoa/82 sm:text-lg sm:leading-relaxed">
          <p>
            I started out Love from Heaven back in May 2021. I had completed my Bachelors (in Commerce) in
            2020 and started my career as a Business Analyst and stepped into the corporate world. Did my job
            with full shiddat for 5 months and eventually left.
          </p>
          <p>Love from Heaven started out 4 months after I quit my job.</p>
          <p>
            It was not just a Covid-born idea, but it had been a lifelong dream! To have a bakery I could run
            with my Mom was eventually everything I dreamt of. I lost my Mom during the Covid wave, even
            before Love from Heaven had started.
          </p>
          <p>
            So, Love from Heaven is not just my dream and ambitions, it is also a mother-daughter&apos;s place
            of pure joy and love for the art of baking.
          </p>
          <p>
            The first ever cake I baked was for my Mom on Mother&apos;s day in 2011 and the last cake my Mom
            made was for my birthday in 2020.
          </p>
          <figure className="rounded-2xl border border-heaven-mist/90 bg-white/70 px-6 py-8 shadow-sm sm:px-10 sm:py-10">
            <blockquote className="text-center font-display text-xl font-semibold leading-snug text-heaven-cocoa sm:text-2xl">
              Love from Heaven is my way of keeping my Mom alive through our dreams.
            </blockquote>
          </figure>
          <p className="text-center font-display text-lg text-heaven-cocoa sm:text-xl">
            Here&apos;s to always being blessed with Love from Heaven{' '}
            <span role="img" aria-label="love">
              ❤️
            </span>
          </p>
        </div>

        <p className="mt-14 border-t border-heaven-mist pt-10 text-center text-sm text-heaven-cocoa/55">
          <Link
            to="/gallery"
            className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 transition hover:text-heaven-cocoa hover:decoration-heaven-rose/40"
          >
            Browse the gallery
          </Link>
          {' · '}
          <Link
            to="/contact"
            className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 transition hover:text-heaven-cocoa hover:decoration-heaven-rose/40"
          >
            Get in touch
          </Link>{' '}
          for custom orders — we would be honoured to bake for your occasion.
        </p>
      </div>
    </article>
  );
}
