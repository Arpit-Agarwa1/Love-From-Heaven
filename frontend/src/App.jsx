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
