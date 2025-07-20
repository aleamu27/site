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
import JobCMS from './components/JobCMS';
import Careers from './pages/Careers';
import JobListing from './pages/JobListing';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Layout from './components/Layout';
import Footer from './components/Footer';

// New imports for authentication
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import LoginForm from './components/Auth/LoginForm';
import AdminDashboard from './pages/Admin/Dashboard';
import SessionManager from './components/Auth/SessionManager';

function AppContent() {
  const location = useLocation();
  return (
    <>
      <SessionManager />
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
        
        {/* Protected routes for blog creation */}
        <Route path="/blog/new" element={
          <ProtectedRoute allowedRoles={['admin', 'editor', 'author']}>
            <Layout><BlogCMS /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/careers/:slug" element={<Layout><JobListing /></Layout>} />
        
        {/* Protected route for job posting */}
        <Route path="/careers/cms/new" element={
          <ProtectedRoute allowedRoles={['admin', 'editor']}>
            <Layout><JobCMS /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Authentication routes */}
        <Route path="/login" element={<LoginForm />} />
        
        {/* Admin routes */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <Layout>
              <Routes>
                <Route path="posts" element={<div>Blog Posts Management</div>} />
                <Route path="posts/new" element={<BlogCMS />} />
                <Route path="media" element={<div>Media Library</div>} />
                <Route path="subscribers" element={<div>Newsletter Subscribers</div>} />
                <Route path="settings" element={<div>Site Settings</div>} />
              </Routes>
            </Layout>
          </ProtectedRoute>
        } />
      </Routes>
      {location.pathname !== '/contact' && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;