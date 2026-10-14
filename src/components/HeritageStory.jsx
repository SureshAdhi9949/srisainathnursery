import React from 'react';
import { Star, Check, Quote } from 'lucide-react';

export default function HeritageStory() {
  return (
    <section id="heritage" className="py-24 bg-dark-forest text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Narrative & Real Testimonial */}
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
              Our 30-Year Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-lux leading-tight">
              Nurturing Plants, Soil, &amp; Unwavering Trust in Kadiam.
            </h2>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Kadiyapulanka is legendary across India for fertile Godavari alluvium and favorable subtropical humidity. For over three decades, <strong>Sri Sainath Nursery</strong> has stood on Veeravaram Road as a trusted sanctuary for genuine plant quality and ethical business.
            </p>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Unlike commercial brokers or online marketplaces that ship bare roots in paper boxes, every single plant at Sri Sainath Nursery is rooted in Godavari soil, nurtured with organic compost, and rigorously acclimatized so that it thrives the moment you plant it.
            </p>

            {/* Real Review Highlight (Teja Padarthi) */}
            <div className="p-6 rounded-2xl bg-emerald-950/90 border border-emerald-500/30 shadow-xl relative">
              <Quote className="w-10 h-10 text-emerald-500/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 text-amber-400 text-xs mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm italic text-emerald-100 leading-relaxed">
                “I should give a major credit to the owner. 1 year back we gave advance for some plants and for some personal reasons we couldn't finish the deal. When we remembered this advance after an year, he understood and gave back the refund which was in 5 figures. Gem of a person!!”
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-emerald-800/80 pt-3">
                <span className="font-bold text-white text-xs">Teja Padarthi</span>
                <span className="text-[11px] text-emerald-400">Verified Client Review • Kadiam Hub</span>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Direct Farmgate Pricing</h4>
                  <p className="text-xs text-emerald-200/80">No middle agents; direct nursery savings.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Genuine Guidance</h4>
                  <p className="text-xs text-emerald-200/80">Honest advice on what will survive in your city.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Nursery Visual Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden h-52 bg-emerald-950 border border-emerald-700/50 shadow-lg">
                <img src="/images/flower.jpg" alt="Vibrant Flowering Hybrids" decoding="async" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="rounded-3xl overflow-hidden h-72 bg-emerald-950 border border-emerald-700/50 shadow-lg">
                <img src="/images/bonsai-3.jpg" alt="Sculpted Banyan Bonsai" decoding="async" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-3xl overflow-hidden h-72 bg-emerald-950 border border-emerald-700/50 shadow-lg">
                <img src="/images/dragon-fruit.jpg" alt="High Yield Dragon Fruit" decoding="async" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="rounded-3xl overflow-hidden h-52 bg-emerald-950 border border-emerald-700/50 shadow-lg">
                <img src="/images/monstera.jpg" alt="Lush Indoor Monstera Deliciosa" decoding="async" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

