import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GALLERY_DRIVE_FILE_IDS,
  GALLERY_DRIVE_FOLDER_URL,
  driveFilePageUrl,
  driveThumbnailUrl,
} from '../constants/gallery.js';

/** Full-screen lightbox for a single gallery index with prev/next and Drive link. */
function GalleryLightbox({ ids, index, onClose, onStep }) {
  const dialogRef = useRef(null);
  const id = ids[index];

  // Open once on mount; index changes only swap the <img> (avoid showModal on an already-open dialog).
  useEffect(() => {
    const el = dialogRef.current;
    if (!el || typeof el.showModal !== 'function') return undefined;
    el.showModal();
    return () => {
      if (el.open) el.close();
    };
  }, []);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowLeft') onStep(-1);
      if (e.key === 'ArrowRight') onStep(1);
    },
    [onStep],
  );

  if (!id) return null;

  return (
    <dialog
      ref={dialogRef}
      className="max-h-[95vh] w-[min(100vw-1.5rem,56rem)] overflow-hidden rounded-2xl border border-heaven-mist bg-heaven-cream p-0 text-heaven-cocoa shadow-2xl open:flex open:flex-col [&::backdrop]:bg-heaven-cocoa/45"
      aria-labelledby="gallery-lightbox-title"
      onKeyDown={onKeyDown}
      onClose={() => onClose()}
    >
      <div className="flex items-center justify-between gap-3 border-b border-heaven-mist bg-white/90 px-4 py-3 sm:px-5">
        <p id="gallery-lightbox-title" className="text-sm font-medium text-heaven-cocoa/80">
          Photo {index + 1} of {ids.length}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={driveFilePageUrl(id)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 hover:decoration-heaven-rose/40 sm:inline"
          >
            Open in Drive
          </a>
          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-heaven-mist bg-white text-heaven-cocoa transition hover:bg-heaven-blush/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose"
            aria-label="Close gallery"
            onClick={() => dialogRef.current?.close()}
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>
      </div>
      <div className="relative min-h-0 flex-1 bg-heaven-cocoa/[0.04]">
        <img
          src={driveThumbnailUrl(id, 1600)}
          alt={`Gallery photo ${index + 1}`}
          className="mx-auto max-h-[min(78vh,900px)] w-full object-contain"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-heaven-mist bg-white/90 px-4 py-3 sm:px-5">
        <button
          type="button"
          className="rounded-xl border border-heaven-mist bg-white px-4 py-2 text-sm font-semibold text-heaven-cocoa transition hover:bg-heaven-blush/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose disabled:cursor-not-allowed disabled:opacity-40"
          disabled={index <= 0}
          onClick={() => onStep(-1)}
        >
          Previous
        </button>
        <a
          href={driveFilePageUrl(id)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 hover:decoration-heaven-rose/40 sm:hidden"
        >
          Open in Drive
        </a>
        <button
          type="button"
          className="rounded-xl border border-heaven-mist bg-white px-4 py-2 text-sm font-semibold text-heaven-cocoa transition hover:bg-heaven-blush/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose disabled:cursor-not-allowed disabled:opacity-40"
          disabled={index >= ids.length - 1}
          onClick={() => onStep(1)}
        >
          Next
        </button>
      </div>
    </dialog>
  );
}

/** Full gallery: grid of Drive thumbnails, lightbox, and link to the shared folder. */
export function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const previous = document.title;
    document.title = 'Gallery | Love From Heaven';
    return () => {
      document.title = previous;
    };
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const stepLightbox = useCallback(
    (delta) => {
      setLightboxIndex((i) => {
        if (i == null) return i;
        const next = i + delta;
        if (next < 0 || next >= GALLERY_DRIVE_FILE_IDS.length) return i;
        return next;
      });
    },
    [],
  );

  return (
    <article className="relative border-b border-heaven-mist">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% -15%, rgba(183, 110, 121, 0.18), transparent), radial-gradient(ellipse 45% 30% at 100% 70%, rgba(201, 162, 39, 0.07), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-heaven-rose sm:text-sm">Love From Heaven</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.12] text-heaven-cocoa sm:text-5xl">Gallery</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-heaven-cocoa/60 sm:text-base">
          Cookies, biscuits, and celebration bakes from our kitchen. High-resolution originals live in our shared{' '}
          <a
            href={GALLERY_DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 hover:decoration-heaven-rose/40"
          >
            Google Drive folder
          </a>
          — click any photo to enlarge, or open in Drive for the full file.
        </p>

        <ul className="mt-12 grid list-none grid-cols-2 gap-2 p-0 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {GALLERY_DRIVE_FILE_IDS.map((fileId, i) => (
            <li key={fileId} className="overflow-hidden rounded-xl border border-heaven-mist/90 bg-white/70 shadow-sm ring-1 ring-heaven-cocoa/[0.04]">
              <button
                type="button"
                className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose"
                onClick={() => setLightboxIndex(i)}
              >
                <span className="relative block aspect-square overflow-hidden bg-heaven-mist/50">
                  <img
                    src={driveThumbnailUrl(fileId, 480)}
                    alt={`Bakery photo ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </span>
                <span className="sr-only">Open photo {i + 1}</span>
              </button>
            </li>
          ))}
        </ul>

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
            to="/contact"
            className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 transition hover:text-heaven-cocoa hover:decoration-heaven-rose/40"
          >
            Contact
          </Link>
        </p>
      </div>

      {lightboxIndex != null && (
        <GalleryLightbox
          ids={GALLERY_DRIVE_FILE_IDS}
          index={lightboxIndex}
          onClose={closeLightbox}
          onStep={stepLightbox}
        />
      )}
    </article>
  );
}
