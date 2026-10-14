import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Compass, Truck, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current || !isDraggingRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (pos < 5) pos = 5;
    if (pos > 95) pos = 95;
    setSliderPos(pos);
  }, []);

  const onMouseDown = () => { isDraggingRef.current = true; };
  const onMouseUp = () => { isDraggingRef.current = false; };
  const onMouseMove = (e) => handleMove(e.clientX);
  const onTouchMove = (e) => handleMove(e.touches[0].clientX);

  return (
    <section id="transformation" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider">
            Landscape Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif-lux text-gray-900 mt-3">
            See How Our Greenery Transforms Barren Ground into Paradise
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Drag the center handle to see the visual contrast between a bare villa yard and an enchanting botanical sanctuary created with Sri Sainath Nursery specimen plants.
          </p>
        </div>

        {/* Drag Container */}
        <div
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchStart={onMouseDown}
          onTouchEnd={onMouseUp}
          onTouchMove={onTouchMove}
          className="relative w-full h-[380px] sm:h-[500px] overflow-hidden rounded-3xl select-none shadow-2xl cursor-ew-resize border border-emerald-100"
        >
          {/* Before Layer (Left overlay) */}
          <div
            className="absolute top-0 left-0 h-full overflow-hidden z-20 border-r-2 border-white shadow-lg"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/images/about-bg.jpg"
              alt="Transformed Sainath Garden"
              decoding="async"
              className="absolute top-0 left-0 h-full w-auto max-w-none object-cover"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
            />
            <div className="absolute top-4 left-4 bg-emerald-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md">
              🌿 After: Lush Sainath Garden
            </div>
          </div>

          {/* After / Underlying Layer */}
          <div className="w-full h-full">
            <img
              src="/images/hero-bg.jpg"
              alt="Botanical Acreage"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-gray-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md">
              Dry Ground Before Greening
            </div>
          </div>

          {/* Draggable Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-emerald-800 border-2 border-emerald-500 shadow-xl flex items-center justify-center z-30 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <ArrowLeftRight className="w-5 h-5 text-emerald-700" />
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="mt-8 grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-5 rounded-2xl bg-[#ecfdf5] border border-emerald-100">
            <Compass className="w-6 h-6 text-emerald-700 mx-auto mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Site &amp; Sunlight Assessment</h4>
            <p className="text-xs text-gray-600 mt-1">We analyze soil pH, drainage, and sun angles before suggesting varieties.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#ecfdf5] border border-emerald-100">
            <Truck className="w-6 h-6 text-emerald-700 mx-auto mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Safe Truck Sourcing</h4>
            <p className="text-xs text-gray-600 mt-1">Direct farmgate dispatch in protected rootballs without leaf bruising.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#ecfdf5] border border-emerald-100">
            <Sparkles className="w-6 h-6 text-emerald-700 mx-auto mb-2" />
            <h4 className="font-bold text-gray-900 text-sm">Post-Planting Guidance</h4>
            <p className="text-xs text-gray-600 mt-1">Practical watering, organic manure, and seasonal pruning support.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

