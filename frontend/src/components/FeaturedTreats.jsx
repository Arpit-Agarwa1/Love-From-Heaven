import { Link } from 'react-router-dom';

/**
 * Featured product grid with loading skeletons and accessible states.
 *
 * @param {{ id: string, name: string, description: string, priceLabel: string }[]} items
 * @param {boolean} loading
 * @param {string | null} error
 */
function TreatCardSkeleton() {
  return (
    <li className="flex flex-col rounded-2xl border border-heaven-mist bg-white/60 p-6 shadow-sm">
      <div className="h-6 w-3/5 animate-pulse rounded bg-heaven-mist" />
      <div className="mt-3 space-y-2 flex-1">
        <div className="h-3 w-full animate-pulse rounded bg-heaven-mist/90" />
        <div className="h-3 w-11/12 animate-pulse rounded bg-heaven-mist/90" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-heaven-mist/90" />
      </div>
      <div className="mt-5 h-4 w-16 animate-pulse rounded bg-heaven-blush" />
    </li>
  );
}

export function FeaturedTreats({ items, loading, error }) {
  return (
    <section id="treats" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heaven-rose">Signature offerings</p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-heaven-cocoa sm:text-4xl">Featured menu</h2>
        <p className="mt-4 text-base leading-relaxed text-heaven-cocoa/68">
          A curated selection of customer favorites. See real bakes in the{' '}
          <Link to="/gallery" className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 hover:decoration-heaven-rose/40">
            gallery
          </Link>
          . For custom flavors, dietary accommodations, or large events, reach us on the{' '}
          <Link to="/contact" className="font-semibold text-heaven-rose underline decoration-heaven-mist underline-offset-4 hover:decoration-heaven-rose/40">
            contact page
          </Link>
          .
        </p>
      </div>

      {loading && (
        <ul className="mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Loading menu">
          {[0, 1, 2].map((i) => (
            <TreatCardSkeleton key={i} />
          ))}
        </ul>
      )}

      {error && !loading && (
        <div
          className="mt-10 rounded-xl border border-heaven-rose/25 bg-white/60 px-5 py-4 shadow-sm backdrop-blur-sm"
          role="alert"
        >
          <p className="text-sm font-semibold text-heaven-cocoa">Unable to load the menu</p>
          <p className="mt-2 text-sm leading-relaxed text-heaven-cocoa/75">{error}</p>
          <p className="mt-3 border-t border-heaven-mist/80 pt-3 text-xs leading-relaxed text-heaven-cocoa/65">
            Developers: start the API from the <code className="rounded bg-heaven-cream px-1.5 py-0.5 font-mono text-[11px]">backend</code>{' '}
            directory with <code className="rounded bg-heaven-cream px-1.5 py-0.5 font-mono text-[11px]">npm run dev</code> so this page can fetch featured products.
          </p>
        </div>
      )}

      {!loading && !error && (
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col rounded-2xl border border-heaven-mist bg-white/75 p-6 shadow-sm ring-0 transition hover:border-heaven-gold/35 hover:shadow-md"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-heaven-cocoa">{item.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-heaven-cocoa/68">{item.description}</p>
              <p className="mt-5 border-t border-heaven-mist/90 pt-4 text-sm font-semibold tabular-nums text-heaven-rose">{item.priceLabel}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
