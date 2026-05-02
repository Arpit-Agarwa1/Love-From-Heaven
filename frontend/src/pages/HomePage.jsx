import { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero.jsx';
import { GalleryTeaser } from '../components/GalleryTeaser.jsx';
import { FeaturedTreats } from '../components/FeaturedTreats.jsx';

/**
 * Landing page: hero, featured treats from API, anchors (#treats, #order), and links to /menu.
 */
export function HomePage() {
  const location = useLocation();
  const [treats, setTreats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/products/featured');
        if (!res.ok) throw new Error('The menu could not be loaded.');
        const data = await res.json();
        if (!cancelled) setTreats(data.data ?? []);
      } catch (e) {
        const raw = e?.message ?? '';
        const friendly =
          raw === 'Failed to fetch'
            ? 'Unable to reach the server. Confirm the API is running (see the note on this page).'
            : raw || 'An unexpected error occurred. Please try again.';
        if (!cancelled) setError(friendly);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useLayoutEffect(() => {
    const id = location.hash.replace(/^#/, '');
    if (!id) return undefined;
    const el = document.getElementById(id);
    if (!el) return undefined;
    const frame = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const previous = document.title;
    document.title = 'Love From Heaven | Artisan home bakery';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <Hero />
      <GalleryTeaser />
      <FeaturedTreats items={treats} loading={loading} error={error} />
    </>
  );
}
