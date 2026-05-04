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
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import { AuthProvider } from './contexts/AuthContext.jsx';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import GeoRedirectBanner from './components/GeoRedirectBanner';
import { Analytics } from '@vercel/analytics/react';

function AppContent() {
  const location = useLocation();
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const knownRoutePatterns = [
    '/',
    '/101',
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
  const isKnownRoute = knownRoutePatterns.some(pattern =>
    matchPath({ path: pattern, end: true }, location.pathname)
  );
  const isNotFoundPage = !isKnownRoute;

  const handleGeoBannerDismiss = () => {
    setShowCookieConsent(true);
  };
  const isFunnelPage = location.pathname === '/101';
  return (
    <>
      <ScrollToTop />
      {!isFunnelPage && !isNotFoundPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/101" element={<Funnel101 />} />
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
      {!isFunnelPage &&
        !isNotFoundPage &&
        !['/about', '/calar-os'].includes(location.pathname) &&
        !location.pathname.startsWith('/news') && <Footer />}
      {!isFunnelPage && !isNotFoundPage && <GeoRedirectBanner onDismiss={handleGeoBannerDismiss} />}
      {!isFunnelPage && !isNotFoundPage && showCookieConsent && <CookieConsent />}
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
