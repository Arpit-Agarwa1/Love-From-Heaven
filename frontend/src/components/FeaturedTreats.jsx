/**
 * Shows the treat cards. Props:
 * - items: list of treats from the server
 * - loading: true while we are still waiting for data
 * - error: error message string, or null if all is fine
 */
export function FeaturedTreats({ items, loading, error }) {
  return (
    <section id="treats" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold text-heaven-cocoa sm:text-4xl">Featured treats</h2>
        <p className="mt-3 text-heaven-cocoa/70">
          A few things we love to bake. Message us if you want something special for a party or holiday.
        </p>
      </div>

      {loading && (
        <p className="mt-10 text-sm text-heaven-cocoa/60" role="status">
          Loading treats…
        </p>
      )}

      {error && !loading && (
        <p className="mt-10 rounded-lg border border-heaven-rose/30 bg-heaven-blush/50 px-4 py-3 text-sm text-heaven-cocoa" role="alert">
          <span className="block font-medium">Could not load treats.</span>
          <span className="mt-2 block">{error}</span>
          <span className="mt-2 block text-heaven-cocoa/80">
            Tip: open a terminal, go to the <code className="rounded bg-white/80 px-1">backend</code> folder, and run{' '}
            <code className="rounded bg-white/80 px-1">npm run dev</code>. That starts the small server the website talks to.
          </span>
        </p>
      )}

      {!loading && !error && (
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col rounded-2xl border border-heaven-mist bg-white/70 p-6 shadow-sm transition hover:border-heaven-gold/40 hover:shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-heaven-cocoa">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm text-heaven-cocoa/70">{item.description}</p>
              <p className="mt-4 text-sm font-semibold text-heaven-rose">{item.priceLabel}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
