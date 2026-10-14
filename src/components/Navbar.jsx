import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#plants', label: 'Catalog' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#matcher', label: 'Matcher', highlight: true },
    { href: '#transformation', label: 'Makeovers' },
    { href: '#heritage', label: 'Heritage' },
    { href: '#bulk', label: 'Wholesale' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 glass-nav transition-all duration-300 shadow-sm border-b border-emerald-100/80 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 md:gap-3">
          
          {/* Logo & Brand: Big, Clear, High-Resolution Logo Display */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <div className="h-12 sm:h-14 w-auto flex items-center justify-center shrink-0">
              <img
                src="/images/logo.png"
                alt="Sri Sainath Nursery Logo"
                className="h-11 sm:h-13 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-lg lg:text-xl font-black text-gray-900 tracking-tight leading-none whitespace-nowrap">
                Sri Sainath <span className="text-emerald-700">Nursery</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-600 mt-0.5 leading-none whitespace-nowrap">
                Kadiyapulanka • కడియం
              </span>
            </div>
          </a>

          {/* Navigation Links: Compact, Balanced & Spaced to Guarantee No Overflow */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[11.5px] xl:text-[13px] font-semibold px-2 xl:px-2.5 py-1.5 rounded-full transition-all whitespace-nowrap flex items-center gap-1 ${
                  item.highlight
                    ? 'text-emerald-950 bg-emerald-100/80 hover:bg-emerald-200/80 border border-emerald-300/80 shadow-xs font-bold'
                    : 'text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/80'
                }`}
              >
                {item.highlight && <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Action CTAs: Properly Inset and Guaranteed Never to Get Cut Off */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 pr-1 sm:pr-0">
            
            {/* Direct Phone Pill (Visible on XL+ screens) */}
            <a
              href="tel:+919440421579"
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#062b1a] hover:bg-[#0c4a2a] text-white text-xs font-bold transition-all shadow-sm border border-emerald-500/30 whitespace-nowrap shrink-0 group"
              title="Call Sri Sainath Nursery"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="whitespace-nowrap">+91 94404 21579</span>
            </a>

            {/* Compact Phone Pill (Visible on LG & XL screens) */}
            <a
              href="tel:+919440421579"
              className="hidden lg:inline-flex 2xl:hidden w-8 h-8 rounded-full bg-[#062b1a] hover:bg-[#0c4a2a] text-white items-center justify-center transition shadow-sm border border-emerald-500/30 shrink-0"
              title="Call +91 94404 21579"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
            </a>

            {/* Direct WhatsApp Order Pill: Sits safely within viewport without overflowing */}
            <a
              href="https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20would%20like%20to%20enquire%20about%20plants."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-700/20 whitespace-nowrap shrink-0 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-9 h-9 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center hover:bg-emerald-100 transition border border-emerald-200 shrink-0"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <img src="/images/logo.png" alt="Logo" className="h-11 w-auto object-contain" />
                  <div>
                    <span className="font-extrabold text-gray-900 block leading-tight">Sri Sainath Nursery</span>
                    <span className="text-[10px] text-emerald-600 font-bold">Kadiyapulanka, Kadiam</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl font-bold transition ${
                      item.highlight
                        ? 'text-emerald-900 bg-emerald-50 border border-emerald-200'
                        : 'text-gray-800 hover:bg-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.highlight && <Sparkles className="w-4 h-4 text-amber-500" />}
                      {item.label}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-3">
              <a
                href="tel:+919440421579"
                className="w-full py-3 px-4 rounded-xl bg-[#062b1a] text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-400" /> +91 94404 21579
              </a>
              <a
                href="https://wa.me/919989435886"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
