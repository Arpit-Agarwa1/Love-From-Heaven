/** Big welcome area at the top: short story and two buttons. */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-heaven-mist">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(183, 110, 121, 0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(201, 162, 39, 0.12), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-heaven-rose">
          Fresh baking · Small batches
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-heaven-cocoa sm:text-5xl lg:text-6xl">
          A little love in every bite
        </h1>
        <p className="mt-6 max-w-xl text-lg text-heaven-cocoa/75">
          Love From Heaven is a home bakery. We make cakes, cookies, and simple seasonal treats with good ingredients and a lot of care.
        </p>
        <div className="mt-10 flex flex-wrap gap-4" id="order">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-heaven-rose px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-heaven-cocoa"
          >
            Contact us
          </a>
          <a
            href="#treats"
            className="inline-flex items-center justify-center rounded-full border border-heaven-cocoa/20 bg-white/60 px-8 py-3 text-sm font-semibold text-heaven-cocoa transition hover:border-heaven-gold/50"
          >
            See treats
          </a>
        </div>
      </div>
    </section>
  );
}
