import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo.jsx';
import {
  CONTACT_EMAIL,
  CONTACT_INSTAGRAM_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from '../constants/contact.js';

const footerLink =
  'text-sm font-medium text-heaven-cocoa/75 underline decoration-heaven-mist/80 underline-offset-[5px] transition hover:text-heaven-rose hover:decoration-heaven-rose/50';

/** Site footer: brand, explore links, contact, and legal line. */
export function Footer() {
  return (
    <footer id="contact" className="border-t border-heaven-mist/80 bg-gradient-to-b from-heaven-blush/40 to-heaven-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:gap-10">
          <div>
            <BrandLogo
              className="h-28 w-auto max-h-40 max-w-[min(17rem,78vw)] object-contain sm:h-32 sm:max-h-44 lg:h-36 lg:max-w-[19rem]"
              alt="Love From Heaven home bakery"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-heaven-cocoa/65">
              Specialty home bakery — custom cakes, cookies, and celebrations. Baked with care for your table.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-heaven-cocoa/45">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/menu" className={footerLink}>
                  Menu 2026
                </Link>
              </li>
              <li>
                <Link to="/gallery" className={footerLink}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/our-story" className={footerLink}>
                  Our story
                </Link>
              </li>
              <li>
                <Link to="/contact" className={footerLink}>
                  Contact &amp; quotes
                </Link>
              </li>
              <li>
                <Link to={{ pathname: '/', hash: 'order' }} className={footerLink}>
                  Order on home
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-heaven-cocoa/45">Contact</p>
            <dl className="mt-4 space-y-4 text-sm text-heaven-cocoa/80">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-heaven-cocoa/50">Email</dt>
                <dd className="mt-1 break-all">
                  <a href={`mailto:${CONTACT_EMAIL}`} className={footerLink}>
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-heaven-cocoa/50">Instagram</dt>
                <dd className="mt-1">
                  <a
                    href={CONTACT_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerLink}
                  >
                    @lovefromheaven.lfh
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-heaven-cocoa/50">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${CONTACT_PHONE_E164}`} className={`${footerLink} tabular-nums`}>
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-heaven-mist/80 pt-8 sm:flex-row">
          <p className="text-center text-xs text-heaven-cocoa/45 sm:text-left">
            © {new Date().getFullYear()} Love From Heaven. All rights reserved.
          </p>
          <p className="text-center text-[11px] text-heaven-cocoa/40 sm:text-right">Artisan desserts · Made to order</p>
        </div>
      </div>
    </footer>
  );
}
