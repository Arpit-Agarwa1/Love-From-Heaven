import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to top on client-side navigation (professional SPA behavior). */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
