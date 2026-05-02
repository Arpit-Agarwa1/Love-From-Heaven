import { Link } from 'react-router-dom';
import {
  GALLERY_DRIVE_FOLDER_URL,
  GALLERY_HOME_PREVIEW_IDS,
  driveThumbnailUrl,
} from '../constants/gallery.js';

/** Home section: preview grid from the Drive gallery with links to the full page and folder. */
export function GalleryTeaser() {
  return (
    <section
      className="border-b border-heaven-mist/80 bg-gradient-to-b from-heaven-cream via-white/70 to-heaven-blush/25"
      aria-labelledby="gallery-teaser-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-heaven-rose">From the kitchen</p>
            <h2 id="gallery-teaser-heading" className="mt-2 font-display text-3xl font-semibold tracking-tight text-heaven-cocoa sm:text-4xl">
              Cookies &amp; biscuits
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-heaven-cocoa/68">
              A peek at real orders and seasonal bakes. Open the full gallery or browse every photo in our{' '}
              <a
                href={GALLERY_DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 hover:decoration-heaven-rose/40"
              >
                Google Drive album
              </a>
              .
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center self-start rounded-full border border-heaven-cocoa/10 bg-white px-6 py-2.5 text-sm font-semibold text-heaven-cocoa shadow-soft transition duration-200 ease-out hover:border-heaven-gold/40 hover:bg-heaven-blush/35 hover:shadow-soft-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose sm:self-auto"
          >
            View full gallery
          </Link>
        </div>

        <ul className="mt-10 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-4 sm:gap-4">
          {GALLERY_HOME_PREVIEW_IDS.map((id) => (
            <li key={id} className="overflow-hidden rounded-2xl border border-heaven-mist/80 bg-white/60 shadow-soft ring-1 ring-heaven-cocoa/[0.04] transition duration-300 ease-out hover:shadow-soft-lg">
              <Link to="/gallery" className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose">
                <div className="relative aspect-square overflow-hidden bg-heaven-mist/40">
                  <img
                    src={driveThumbnailUrl(id, 640)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
