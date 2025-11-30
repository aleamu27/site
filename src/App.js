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
import BlogManagement from './components/BlogManagement';
import JobCMS from './components/JobCMS';
import Careers from './pages/Careers';
import JobListing from './pages/JobListing';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import GDPRChecklist from './pages/GDPRChecklist';
import KafekompassetPrivacy from './pages/KafekompassetPrivacy';
import KafekompassetSupport from './pages/KafekompassetSupport';
import Layout from './components/Layout';
import Footer from './components/Footer';
import ABTestingPage from './pages/MarketingTerms/ABTesting';
import AccountBasedMarketingPage from './pages/MarketingTerms/AccountBasedMarketing';
import AdRecallPage from './pages/MarketingTerms/AdRecall';
import AffiliateMarketingPage from './pages/MarketingTerms/AffiliateMarketing';
import AltTextPage from './pages/MarketingTerms/AltText';
import AdCopyPage from './pages/MarketingTerms/AdCopy';
import AIDAPage from './pages/MarketingTerms/AIDA';
import ActualValuePage from './pages/MarketingTerms/ActualValue';
import AverageTotalCostPage from './pages/MarketingTerms/AverageTotalCost';
import AverageOrderValuePage from './pages/MarketingTerms/AverageOrderValue';
import BrandAwarenessPage from './pages/MarketingTerms/BrandAwareness';
import BenchmarkPage from './pages/MarketingTerms/Benchmark';
import BounceRatePage from './pages/MarketingTerms/BounceRate';
import BacklinkPage from './pages/MarketingTerms/Backlink';
import BloggPage from './pages/MarketingTerms/Blogg';
import CTAPage from './pages/MarketingTerms/CTA';
import CACPage from './pages/MarketingTerms/CAC';
import CPAPage from './pages/MarketingTerms/CPA';
import CPCPage from './pages/MarketingTerms/CPC';
import CPMPage from './pages/MarketingTerms/CPM';
import CPOPage from './pages/MarketingTerms/CPO';
import CTRPage from './pages/MarketingTerms/CTR';
import CROPage from './pages/MarketingTerms/CRO';
import CRMPage from './pages/MarketingTerms/CRM';
import CMSPage from './pages/MarketingTerms/CMS';
import CPLPage from './pages/MarketingTerms/CPL';
import ContentMarketingPage from './pages/MarketingTerms/ContentMarketing';
import ContentMetricsPage from './pages/MarketingTerms/ContentMetrics';
import DirectMailPage from './pages/MarketingTerms/DirectMail';
import EmailMarketingPage from './pages/MarketingTerms/EmailMarketing';
import FacebookAdsPage from './pages/MarketingTerms/FacebookAds';
import FunnelPage from './pages/MarketingTerms/Funnel';
import GeoTargetingPage from './pages/MarketingTerms/GeoTargeting';
import GoogleAdsPage from './pages/MarketingTerms/GoogleAds';
import GoogleAnalyticsPage from './pages/MarketingTerms/GoogleAnalytics';
import ImpressionPage from './pages/MarketingTerms/Impression';
import InboundMarketingPage from './pages/MarketingTerms/InboundMarketing';
import InfluencerMarketingPage from './pages/MarketingTerms/InfluencerMarketing';
import InstagramAdsPage from './pages/MarketingTerms/InstagramAds';
import IntentDataPage from './pages/MarketingTerms/IntentData';
import KPIPage from './pages/MarketingTerms/KPI';
import KeywordPage from './pages/MarketingTerms/Keyword';
import LandingPage from './pages/MarketingTerms/LandingPage';
import LeadPage from './pages/MarketingTerms/Lead';
import LinkedInAdsPage from './pages/MarketingTerms/LinkedInAds';
import MarketingAutomationPage from './pages/MarketingTerms/MarketingAutomation';
import MarketingMixPage from './pages/MarketingTerms/MarketingMix';
import MQLPage from './pages/MarketingTerms/MQL';
import NativeAdvertisingPage from './pages/MarketingTerms/NativeAdvertising';
import NewsletterPage from './pages/MarketingTerms/Newsletter';
import OrganicSearchPage from './pages/MarketingTerms/OrganicSearch';
import PPCPage from './pages/MarketingTerms/PPC';
import ProgrammaticAdvertisingPage from './pages/MarketingTerms/ProgrammaticAdvertising';
import ROIPage from './pages/MarketingTerms/ROI';
import ROASPage from './pages/MarketingTerms/ROAS';
import SalesFunnelPage from './pages/MarketingTerms/SalesFunnel';
import SEMPage from './pages/MarketingTerms/SEM';
import SEOPage from './pages/MarketingTerms/SEO';
import SERPPage from './pages/MarketingTerms/SERP';
import SocialMediaMarketingPage from './pages/MarketingTerms/SocialMediaMarketing';
import SQLPage from './pages/MarketingTerms/SQL';
import TargetingPage from './pages/MarketingTerms/Targeting';
import TikTokAdsPage from './pages/MarketingTerms/TikTokAds';
import UTMTaggingPage from './pages/MarketingTerms/UTMTagging';
import WebinarPage from './pages/MarketingTerms/Webinar';
import MarketingTermsPage from './pages/MarketingTerms';

// New imports for authentication
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import LoginForm from './components/Auth/LoginForm';
import AdminDashboard from './pages/Admin/Dashboard';
import SessionManager from './components/Auth/SessionManager';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
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
        
        {/* Protected routes for blog management */}
        <Route path="/blog/manage" element={
          <ProtectedRoute>
            <Layout><BlogManagement /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/blog/cms" element={
          <ProtectedRoute>
            <Layout><BlogCMS /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/blog/new" element={
          <ProtectedRoute>
            <Layout><BlogCMS /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/blog-cms" element={
          <ProtectedRoute>
            <Layout><BlogCMS /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/careers/:slug" element={<Layout><JobListing /></Layout>} />
        
        {/* Protected route for job posting */}
        <Route path="/careers/cms/new" element={
          <ProtectedRoute>
            <Layout><JobCMS /></Layout>
          </ProtectedRoute>
        } />
        
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/gdpr-checklist" element={<GDPRChecklist />} />
        <Route path="/kafekompasset-privacy" element={<KafekompassetPrivacy />} />
        <Route path="/kafekompasset-support" element={<KafekompassetSupport />} />
                <Route path="/contact" element={<Contact />} />

        {/* Marketing Terms */}
                <Route path="/marketing-terms" element={<Layout><MarketingTermsPage /></Layout>} />
        <Route path="/marketing-terms/ab-testing" element={<Layout><ABTestingPage /></Layout>} />
                <Route path="/marketing-terms/account-based-marketing" element={<Layout><AccountBasedMarketingPage /></Layout>} />
        <Route path="/marketing-terms/ad-recall" element={<Layout><AdRecallPage /></Layout>} />
        <Route path="/marketing-terms/affiliate-marketing" element={<Layout><AffiliateMarketingPage /></Layout>} />
                <Route path="/marketing-terms/alt-text" element={<Layout><AltTextPage /></Layout>} />
        <Route path="/marketing-terms/ad-copy" element={<Layout><AdCopyPage /></Layout>} />
        <Route path="/marketing-terms/aida" element={<Layout><AIDAPage /></Layout>} />
        <Route path="/marketing-terms/actual-value" element={<Layout><ActualValuePage /></Layout>} />
        <Route path="/marketing-terms/average-total-cost" element={<Layout><AverageTotalCostPage /></Layout>} />
                <Route path="/marketing-terms/average-order-value" element={<Layout><AverageOrderValuePage /></Layout>} />
        <Route path="/marketing-terms/brand-awareness" element={<Layout><BrandAwarenessPage /></Layout>} />
        <Route path="/marketing-terms/benchmark" element={<Layout><BenchmarkPage /></Layout>} />
        <Route path="/marketing-terms/bounce-rate" element={<Layout><BounceRatePage /></Layout>} />
        <Route path="/marketing-terms/backlink" element={<Layout><BacklinkPage /></Layout>} />
                <Route path="/marketing-terms/blogg" element={<Layout><BloggPage /></Layout>} />
        <Route path="/marketing-terms/cta" element={<Layout><CTAPage /></Layout>} />
        <Route path="/marketing-terms/cac" element={<Layout><CACPage /></Layout>} />
        <Route path="/marketing-terms/cpa" element={<Layout><CPAPage /></Layout>} />
        <Route path="/marketing-terms/cpc" element={<Layout><CPCPage /></Layout>} />
                <Route path="/marketing-terms/cpm" element={<Layout><CPMPage /></Layout>} />
        <Route path="/marketing-terms/cpo" element={<Layout><CPOPage /></Layout>} />
        <Route path="/marketing-terms/ctr" element={<Layout><CTRPage /></Layout>} />
        <Route path="/marketing-terms/cro" element={<Layout><CROPage /></Layout>} />
        <Route path="/marketing-terms/crm" element={<Layout><CRMPage /></Layout>} />
                <Route path="/marketing-terms/cms" element={<Layout><CMSPage /></Layout>} />
        <Route path="/marketing-terms/cpl" element={<Layout><CPLPage /></Layout>} />
        <Route path="/marketing-terms/content-marketing" element={<Layout><ContentMarketingPage /></Layout>} />
        <Route path="/marketing-terms/content-metrics" element={<Layout><ContentMetricsPage /></Layout>} />
        <Route path="/marketing-terms/direct-mail" element={<Layout><DirectMailPage /></Layout>} />
                <Route path="/marketing-terms/email-marketing" element={<Layout><EmailMarketingPage /></Layout>} />
        <Route path="/marketing-terms/facebook-ads" element={<Layout><FacebookAdsPage /></Layout>} />
        <Route path="/marketing-terms/funnel" element={<Layout><FunnelPage /></Layout>} />
        <Route path="/marketing-terms/geo-targeting" element={<Layout><GeoTargetingPage /></Layout>} />
        <Route path="/marketing-terms/google-ads" element={<Layout><GoogleAdsPage /></Layout>} />
                <Route path="/marketing-terms/google-analytics" element={<Layout><GoogleAnalyticsPage /></Layout>} />
        <Route path="/marketing-terms/impression" element={<Layout><ImpressionPage /></Layout>} />
        <Route path="/marketing-terms/inbound-marketing" element={<Layout><InboundMarketingPage /></Layout>} />
        <Route path="/marketing-terms/influencer-marketing" element={<Layout><InfluencerMarketingPage /></Layout>} />
        <Route path="/marketing-terms/instagram-ads" element={<Layout><InstagramAdsPage /></Layout>} />
                <Route path="/marketing-terms/intent-data" element={<Layout><IntentDataPage /></Layout>} />
        <Route path="/marketing-terms/kpi" element={<Layout><KPIPage /></Layout>} />
        <Route path="/marketing-terms/keyword" element={<Layout><KeywordPage /></Layout>} />
        <Route path="/marketing-terms/landing-page" element={<Layout><LandingPage /></Layout>} />
        <Route path="/marketing-terms/lead" element={<Layout><LeadPage /></Layout>} />
                <Route path="/marketing-terms/linkedin-ads" element={<Layout><LinkedInAdsPage /></Layout>} />
        <Route path="/marketing-terms/marketing-automation" element={<Layout><MarketingAutomationPage /></Layout>} />
        <Route path="/marketing-terms/marketing-mix" element={<Layout><MarketingMixPage /></Layout>} />
        <Route path="/marketing-terms/mql" element={<Layout><MQLPage /></Layout>} />
        <Route path="/marketing-terms/native-advertising" element={<Layout><NativeAdvertisingPage /></Layout>} />
                <Route path="/marketing-terms/newsletter" element={<Layout><NewsletterPage /></Layout>} />
        <Route path="/marketing-terms/organic-search" element={<Layout><OrganicSearchPage /></Layout>} />
        <Route path="/marketing-terms/ppc" element={<Layout><PPCPage /></Layout>} />
        <Route path="/marketing-terms/programmatic-advertising" element={<Layout><ProgrammaticAdvertisingPage /></Layout>} />
        <Route path="/marketing-terms/roi" element={<Layout><ROIPage /></Layout>} />
                <Route path="/marketing-terms/roas" element={<Layout><ROASPage /></Layout>} />
        <Route path="/marketing-terms/sales-funnel" element={<Layout><SalesFunnelPage /></Layout>} />
        <Route path="/marketing-terms/sem" element={<Layout><SEMPage /></Layout>} />
        <Route path="/marketing-terms/seo" element={<Layout><SEOPage /></Layout>} />
        <Route path="/marketing-terms/serp" element={<Layout><SERPPage /></Layout>} />
                <Route path="/marketing-terms/social-media-marketing" element={<Layout><SocialMediaMarketingPage /></Layout>} />
        <Route path="/marketing-terms/sql" element={<Layout><SQLPage /></Layout>} />
        <Route path="/marketing-terms/targeting" element={<Layout><TargetingPage /></Layout>} />
        <Route path="/marketing-terms/tiktok-ads" element={<Layout><TikTokAdsPage /></Layout>} />
        <Route path="/marketing-terms/utm-tagging" element={<Layout><UTMTaggingPage /></Layout>} />
        <Route path="/marketing-terms/webinar" element={<Layout><WebinarPage /></Layout>} />
        
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