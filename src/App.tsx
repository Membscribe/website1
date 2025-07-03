import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LiveChat from './components/LiveChat';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import SolutionsPage from './pages/SolutionsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import EventTypesPage from './pages/EventTypesPage';
import PricingPage from './pages/PricingPage';
import DemoBookingPage from './pages/DemoBookingPage';
import AboutPage from './pages/AboutPage';
import CustomerStoriesPage from './pages/CustomerStoriesPage';
import BlogPage from './pages/BlogPage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AppDownloadPage from './pages/AppDownloadPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/event-types" element={<EventTypesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/demo" element={<DemoBookingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/customer-stories" element={<CustomerStoriesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/app-download" element={<AppDownloadPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <CookieBanner />
        <LiveChat />
      </div>
    </Router>
  );
}

export default App;