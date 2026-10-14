import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import PlantCatalog from './components/PlantCatalog';
import PlantModal from './components/PlantModal';
import SmartPlantMatcher from './components/SmartPlantMatcher';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import HeritageStory from './components/HeritageStory';
import BulkLogistics from './components/BulkLogistics';
import GallerySection from './components/GallerySection';
import PlantCareGuide from './components/PlantCareGuide';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';

export default function App() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfdfc] text-gray-800 selection:bg-emerald-500 selection:text-white">
      {/* Top Scroll Indicator */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-emerald-500 via-lime-400 to-amber-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Bar */}
      <AnnouncementBar />

      {/* Sticky Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Plant Catalog & Filter */}
      <PlantCatalog onSelectPlant={(plant) => setSelectedPlant(plant)} />

      {/* Real-Time Nursery Visuals & Video Tours */}
      <GallerySection />

      {/* Smart Plant Matcher */}
      <SmartPlantMatcher onSelectPlant={(plant) => setSelectedPlant(plant)} />

      {/* Garden Transformation Before & After */}
      <BeforeAfterSlider />

      {/* Heritage & Authentic Reviews */}
      <HeritageStory />

      {/* Wholesale & Truck Logistics Estimator */}
      <BulkLogistics />

      {/* Plant Care Guide */}
      <PlantCareGuide />

      {/* FAQ */}
      <FAQSection />

      {/* Contact & Map Hub */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Speed Dock */}
      <FloatingDock />

      {/* Dossier Modal */}
      {selectedPlant && (
        <PlantModal
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      )}
    </div>
  );
}

