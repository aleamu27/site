import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Design from './pages/Design';
import Development from './pages/Development';
import CustomAI from './pages/CustomAI';
import AIAutomations from './pages/AIAutomations';
import Production from './pages/Production';
import Work from './pages/Work';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogCMS from './components/BlogCMS';
import Layout from './components/Layout';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Layout><Design /></Layout>} />
        <Route path="/development" element={<Layout><Development /></Layout>} />
        <Route path="/custom-ai" element={<Layout><CustomAI /></Layout>} />
        <Route path="/ai-automations" element={<Layout><AIAutomations /></Layout>} />
        <Route path="/production" element={<Layout><Production /></Layout>} />
        <Route path="/work" element={<Layout><Work /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
        <Route path="/blog/new" element={<Layout><BlogCMS /></Layout>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== '/contact' && <Footer />}
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;
