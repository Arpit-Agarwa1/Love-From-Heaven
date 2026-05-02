import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CONTACT_EMAIL,
  CONTACT_INSTAGRAM_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from '../constants/contact.js';

/** Dedicated contact page: phone, email, and quick links for quotes and orders. */
export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const previous = document.title;
    document.title = 'Contact | Love From Heaven';
    return () => {
      document.title = previous;
    };
  }, []);

  const mailHref = `mailto:${CONTACT_EMAIL}?subject=Love%20From%20Heaven%20—%20Order%20inquiry`;
  const telHref = `tel:${CONTACT_PHONE_E164}`;

  return (
    <article className="relative border-b border-heaven-mist">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% -15%, rgb(var(--lfh-brand-rgb) / 0.32), transparent), radial-gradient(ellipse 50% 35% at 100% 40%, rgba(201, 162, 39, 0.08), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-heaven-rose sm:text-sm">
          Love From Heaven
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.12] text-heaven-cocoa sm:text-5xl">
          Contact us
        </h1>
        <p className="mt-4 text-sm text-heaven-cocoa/55 sm:text-base">
          Custom cakes, cookies, and celebrations — reach out for quotes, dates, and dietary questions.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
          <li className="rounded-2xl border border-heaven-mist/90 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-heaven-cocoa/50">Phone</p>
            <a
              href={telHref}
              className="mt-3 block font-display text-2xl font-semibold tabular-nums text-heaven-cocoa transition hover:text-heaven-rose sm:text-3xl"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-sm text-heaven-cocoa/60">Tap to call on mobile</p>
          </li>
          <li className="rounded-2xl border border-heaven-mist/90 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-heaven-cocoa/50">Email</p>
            <a
              href={mailHref}
              className="mt-3 block break-all text-base font-semibold text-heaven-cocoa underline decoration-heaven-mist underline-offset-4 transition hover:text-heaven-rose hover:decoration-heaven-rose/40 sm:text-lg"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-2 text-sm text-heaven-cocoa/60">We reply as soon as we can</p>
          </li>
          <li className="rounded-2xl border border-heaven-mist/90 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:col-span-2 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-heaven-cocoa/50">Instagram</p>
            <a
              href={CONTACT_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-base font-semibold text-heaven-cocoa underline decoration-heaven-mist underline-offset-4 transition hover:text-heaven-rose hover:decoration-heaven-rose/40 sm:text-lg"
            >
              @lovefromheaven.lfh
            </a>
            <p className="mt-2 text-sm text-heaven-cocoa/60">Follow for new bakes, behind the scenes, and order updates</p>
          </li>
        </ul>

        <div className="mt-10 rounded-2xl border border-heaven-mist/80 bg-heaven-blush/25 px-6 py-8 sm:px-8">
          <p className="text-sm font-medium text-heaven-cocoa">When you write or call, it helps to include:</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-heaven-cocoa/75">
            <li>Event date and pickup or delivery preference</li>
            <li>Serving size or headcount</li>
            <li>Flavors, theme, or reference photos</li>
            <li>Any allergies or dietary needs</li>
          </ul>
        </div>

        <p className="mt-14 border-t border-heaven-mist pt-10 text-center text-sm text-heaven-cocoa/55">
          <Link
            to="/"
            className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 transition hover:text-heaven-cocoa hover:decoration-heaven-rose/40"
          >
            Back to home
          </Link>
          {' · '}
          <Link
            to="/our-story"
            className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 transition hover:text-heaven-cocoa hover:decoration-heaven-rose/40"
          >
            Our story
          </Link>
          {' · '}
          <Link
            to="/gallery"
            className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 transition hover:text-heaven-cocoa hover:decoration-heaven-rose/40"
          >
            Gallery
          </Link>
        </p>
      </div>
    </article>
  );
}
