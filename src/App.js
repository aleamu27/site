import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import Footer from './components/Footer';

import { AuthProvider } from './contexts/AuthContext.jsx';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

function AppContent() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visual-identity" element={<VisualIdentity />} />
        <Route path="/silmaril" element={<Navigate to="/visual-identity" replace />} />
        <Route path="/development" element={<Development />} />
        <Route path="/about" element={<About />} />
        <Route path="/calar-os" element={<CalarOS />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsArticle />} />
      </Routes>
      {!['/about', '/calar-os'].includes(location.pathname) &&
        !location.pathname.startsWith('/news') && <Footer />}
      <CookieConsent />
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
    </AuthProvider>
  );
}

export default App;
