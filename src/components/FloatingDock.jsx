import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageSquare } from 'lucide-react';

export default function FloatingDock() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Back to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-white text-emerald-900 shadow-xl flex items-center justify-center transition border border-emerald-200 hover:bg-emerald-50 transform hover:-translate-y-1"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 text-emerald-800" />
        </button>
      )}

      {/* Quick Call */}
      <a
        href="tel:+919440421579"
        className="w-12 h-12 rounded-full bg-[#062b1a] text-white shadow-xl flex items-center justify-center hover:bg-[#0c4a2a] transition transform hover:-translate-y-1"
        title="Call Sri Sainath Nursery"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Pill */}
      <a
        href="https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20would%20like%20to%20enquire%20about%20plants."
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-2xl hover:bg-[#20ba5a] transition transform hover:-translate-y-1"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">Ask on WhatsApp</span>
      </a>
    </div>
  );
}

