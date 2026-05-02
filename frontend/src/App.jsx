import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';
import { SiteSkipLink } from './components/SiteSkipLink.jsx';
import { ErrorBoundary } from './components/ErrorBoundary.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { OurStoryPage } from './pages/OurStoryPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { GalleryPage } from './pages/GalleryPage.jsx';
import { MenuPage } from './pages/MenuPage.jsx';

/** App shell: router, shared header/footer, and page routes. */
function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <SiteSkipLink />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/our-story" element={<OurStoryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/menu" element={<MenuPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
