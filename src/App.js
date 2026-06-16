import './i18n';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, matchPath } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VisualIdentity from './pages/VisualIdentity';
import Development from './pages/Development';
import About from './pages/About';
import CalarOS from './pages/CalarOS';
import Consulting from './pages/Consulting';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Funnel101 from './pages/Funnel101.jsx';
import Funnel102 from './pages/Funnel102.jsx';
import Dento from './pages/Dento.jsx';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import { AuthProvider } from './contexts/AuthContext.jsx';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import GeoRedirectBanner from './components/GeoRedirectBanner';
import { Analytics } from '@vercel/analytics/react';

const STANDALONE_PAGES = ['/101', '/102', '/dento'];

const normalizePath = pathname => {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed || '/';
};

const knownRoutePatterns = [
  '/',
  ...STANDALONE_PAGES,
  '/visual-identity',
  '/silmaril',
  '/development',
  '/about',
  '/calar-os',
  '/consulting',
  '/contact',
  '/privacy',
  '/news',
  '/news/:slug',
];

function AppContent() {
  const location = useLocation();
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const currentPath = normalizePath(location.pathname);
  const isKnownRoute = knownRoutePatterns.some(pattern =>
    matchPath({ path: pattern, end: true }, currentPath)
  );
  const isNotFoundPage = !isKnownRoute;
  const isStandalonePage = STANDALONE_PAGES.includes(currentPath);

  const handleGeoBannerDismiss = () => {
    setShowCookieConsent(true);
  };

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/101" element={<Funnel101 />} />
      <Route path="/102" element={<Funnel102 />} />
      <Route path="/dento" element={<Dento />} />
      <Route path="/visual-identity" element={<VisualIdentity />} />
      <Route path="/silmaril" element={<Navigate to="/visual-identity" replace />} />
      <Route path="/development" element={<Development />} />
      <Route path="/about" element={<About />} />
      <Route path="/calar-os" element={<CalarOS />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:slug" element={<NewsArticle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  if (isStandalonePage) {
    return (
      <>
        <ScrollToTop />
        {routes}
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      {!isNotFoundPage && <Navbar />}
      {routes}
      {!isNotFoundPage &&
        !['/about', '/calar-os'].includes(currentPath) &&
        !currentPath.startsWith('/news') && <Footer />}
      {!isNotFoundPage && <GeoRedirectBanner onDismiss={handleGeoBannerDismiss} />}
      {!isNotFoundPage && showCookieConsent && <CookieConsent />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
      <Analytics />
    </AuthProvider>
  );
}

export default App;
