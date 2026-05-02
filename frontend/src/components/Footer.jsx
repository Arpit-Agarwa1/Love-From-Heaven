import { BrandLogo } from './BrandLogo.jsx';

/** Site footer: brand, contact channels, and legal line. */
export function Footer() {
  return (
    <footer id="contact" className="border-t border-heaven-mist bg-heaven-blush/35">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <div className="inline-flex items-center justify-center rounded-full bg-white p-3 shadow-[0_1px_2px_rgba(61,50,41,0.05),0_8px_24px_-6px_rgba(61,50,41,0.1)] ring-1 ring-heaven-cocoa/[0.07] sm:p-3.5">
              <BrandLogo
                className="h-28 w-28 object-contain sm:h-36 sm:w-36 lg:h-40 lg:w-40"
                alt="Love From Heaven home bakery"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-heaven-cocoa/65">
              Custom orders, celebrations, and corporate gifting. Replace the contact details below with your channels when you go live.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-heaven-cocoa/50">Contact</p>
            <dl className="mt-4 space-y-3 text-sm text-heaven-cocoa/80">
              <div>
                <dt className="font-medium text-heaven-cocoa">Email</dt>
                <dd className="mt-0.5">
                  <a
                    href="mailto:hello@lovefromheaven.com"
                    className="underline decoration-heaven-mist underline-offset-4 transition hover:text-heaven-rose hover:decoration-heaven-rose/40"
                  >
                    hello@lovefromheaven.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-heaven-cocoa">Instagram</dt>
                <dd className="mt-0.5">@lovefromheaven</dd>
              </div>
              <div>
                <dt className="font-medium text-heaven-cocoa">Phone</dt>
                <dd className="mt-0.5 tabular-nums">(000) 000-0000</dd>
              </div>
            </dl>
          </div>
        </div>
        <p className="mt-12 border-t border-heaven-mist/80 pt-8 text-center text-xs text-heaven-cocoa/45">
          © {new Date().getFullYear()} Love From Heaven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
