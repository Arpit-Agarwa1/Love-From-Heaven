/** Top bar: logo / name and simple links. */
export function Header() {
  return (
    <header className="border-b border-heaven-mist/80 bg-heaven-cream/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-[0.2em] text-heaven-cocoa sm:text-3xl">
            LOVE
          </span>
          <span className="font-display text-2xl font-semibold tracking-[0.2em] text-heaven-rose sm:text-3xl">
            FROM HEAVEN
          </span>
          <span className="mt-1 text-xs font-sans font-light uppercase tracking-[0.35em] text-heaven-cocoa/70">
            home bakery
          </span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-heaven-cocoa/80 sm:flex" aria-label="Main menu">
          <a href="#treats" className="transition hover:text-heaven-rose">
            Treats
          </a>
          <a href="#order" className="transition hover:text-heaven-rose">
            Order
          </a>
          <a href="#contact" className="transition hover:text-heaven-rose">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
