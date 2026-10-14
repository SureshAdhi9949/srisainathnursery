import React, { useState, useEffect, useRef } from 'react';
import { Trees, Sprout, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function StatsCounter() {
  const [counts, setCounts] = useState({ years: 0, varieties: 0, customers: 0, healthy: 0 });
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animatedRef.current) {
        animatedRef.current = true;
        
        const targets = { years: 30, varieties: 1500, customers: 25000, healthy: 100 };
        const duration = 2000;
        const startTime = performance.now();

        const update = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          setCounts({
            years: Math.floor(progress * targets.years),
            varieties: Math.floor(progress * targets.varieties),
            customers: Math.floor(progress * targets.customers),
            healthy: Math.floor(progress * targets.healthy)
          });
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        };
        requestAnimationFrame(update);
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 -mt-8 max-w-6xl mx-auto px-4">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-xl border border-white/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        
        <div className="border-r border-gray-100 last:border-0 p-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl mx-auto mb-2">
            <Trees className="w-6 h-6" />
          </div>
          <p className="text-3xl sm:text-4xl font-black text-[#062b1a]">{counts.years}+</p>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">Years Nursery Legacy</p>
        </div>

        <div className="border-r border-gray-100 last:border-0 p-2">
          <div className="w-12 h-12 rounded-2xl bg-lime-50 text-lime-700 flex items-center justify-center text-xl mx-auto mb-2">
            <Sprout className="w-6 h-6" />
          </div>
          <p className="text-3xl sm:text-4xl font-black text-[#062b1a]">{counts.varieties.toLocaleString()}+</p>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">Curated Plant Varieties</p>
        </div>

        <div className="border-r border-gray-100 last:border-0 p-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center text-xl mx-auto mb-2">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <p className="text-3xl sm:text-4xl font-black text-[#062b1a]">{counts.customers.toLocaleString()}+</p>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">Happy Garden Customers</p>
        </div>

        <div className="p-2">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center text-xl mx-auto mb-2">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <p className="text-3xl sm:text-4xl font-black text-[#062b1a]">{counts.healthy}%</p>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">Pest-Free Healthy Guarantee</p>
        </div>

      </div>
    </section>
  );
}

