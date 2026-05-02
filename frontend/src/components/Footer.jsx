/** Bottom of the page: name and a spot for your contact info. */
export function Footer() {
  return (
    <footer id="contact" className="border-t border-heaven-mist bg-heaven-blush/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-wide text-heaven-cocoa">Love From Heaven</p>
            <p className="mt-1 text-sm text-heaven-cocoa/65">Home bakery</p>
          </div>
          <div className="text-sm text-heaven-cocoa/75">
            <p className="font-medium text-heaven-cocoa">Contact</p>
            <p className="mt-2">Put your email, Instagram, or phone here when you are ready.</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-heaven-cocoa/50">
          © {new Date().getFullYear()} Love From Heaven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
