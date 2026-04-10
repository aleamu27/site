import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Silmaril from './pages/Silmaril';
import Development from './pages/Development';
import About from './pages/About';
import CalarOS from './pages/CalarOS';
import Consulting from './pages/Consulting';
import News from './pages/News';
import Layout from './components/Layout';
import Footer from './components/Footer';

import { AuthProvider } from './contexts/AuthContext.jsx';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

function AppContent() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      {location.pathname !== '/silmaril' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/silmaril" element={<Silmaril />} />
        <Route path="/development" element={<Development />} />
        <Route path="/about" element={<About />} />
        <Route path="/calar-os" element={<CalarOS />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/news" element={<Layout><News /></Layout>} />
      </Routes>
      {!['/silmaril', '/about', '/calar-os'].includes(location.pathname) && <Footer />}
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
