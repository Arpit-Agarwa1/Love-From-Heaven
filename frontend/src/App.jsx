import { useEffect, useState } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { FeaturedTreats } from './components/FeaturedTreats.jsx';
import { Footer } from './components/Footer.jsx';

/**
 * Main page layout. On load, it asks the backend for the list of featured treats.
 */
function App() {
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
        if (!res.ok) throw new Error('The menu did not load.');
        const data = await res.json();
        if (!cancelled) setTreats(data.data ?? []);
      } catch (e) {
        const raw = e?.message ?? '';
        const friendly =
          raw === 'Failed to fetch'
            ? 'Could not reach the backend. Make sure it is running (see the tip below).'
            : raw || 'Something went wrong. Please try again.';
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedTreats items={treats} loading={loading} error={error} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
