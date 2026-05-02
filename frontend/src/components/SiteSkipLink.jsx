/** Keyboard / screen-reader shortcut past the header into main content. */
export function SiteSkipLink() {
  return (
    <a
      href="#main-content"
      className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-heaven-cocoa px-4 py-2.5 text-sm font-semibold text-white opacity-0 shadow-soft-lg ring-2 ring-white/25 transition duration-200 ease-out focus-visible:pointer-events-auto focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heaven-rose"
    >
      Skip to main content
    </a>
  );
}
