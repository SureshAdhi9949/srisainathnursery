import React from 'react';
import { Heart, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#062b1a] text-white pt-16 pb-8 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/60">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Sri Sainath Nursery"
                className="w-12 h-12 object-contain bg-white rounded-xl p-1"
              />
              <div>
                <h4 className="font-black text-lg text-white">Sri Sainath Nursery</h4>
                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Kadiyapulanka, Kadiam</p>
              </div>
            </div>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Spanning three decades of botanical excellence. Cultivating top-grade fruit saplings, bonsai masterpieces, and landscape greenery nurtured by Godavari alluvium.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-extrabold uppercase tracking-wider text-emerald-400 mb-4">Plant Categories</h5>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li><a href="#plants" className="hover:text-white transition">🪴 Indoor Air Purifiers (Monstera, Areca, ZZ)</a></li>
              <li><a href="#plants" className="hover:text-white transition">🥭 Grafted Mango &amp; Fruit Varieties</a></li>
              <li><a href="#plants" className="hover:text-white transition">🌳 Sculpted Ficus &amp; Banyan Bonsai</a></li>
              <li><a href="#plants" className="hover:text-white transition">🌺 Hybrid Flowering Bougainvilleas</a></li>
              <li><a href="#plants" className="hover:text-white transition">🌴 Avenue &amp; Royal Landscape Palms</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-extrabold uppercase tracking-wider text-emerald-400 mb-4">Quick Links</h5>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li><a href="#hero" className="hover:text-white transition">Home Overview</a></li>
              <li><a href="#plants" className="hover:text-white transition">Plant Catalog</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Live Gallery &amp; Video Showcase</a></li>
              <li><a href="#matcher" className="hover:text-white transition">Smart Plant Matcher Quiz</a></li>
              <li><a href="#transformation" className="hover:text-white transition">Garden Makeover Gallery</a></li>
              <li><a href="#heritage" className="hover:text-white transition">30+ Years Heritage &amp; Reviews</a></li>
              <li><a href="#bulk" className="hover:text-white transition">Wholesale Truck Logistics</a></li>
              <li><a href="#contact" className="hover:text-white transition">Route &amp; Driving Directions</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-extrabold uppercase tracking-wider text-emerald-400 mb-4">Nursery Hub</h5>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Veeravaram Road, Kadiyapulanka,<br />
              Rajamahendravaram, Kadiam,<br />
              Andhra Pradesh – 533126
            </p>
            <div className="mt-4 pt-3 border-t border-emerald-900/60 text-xs text-emerald-200">
              <p><strong>Phones:</strong> +91 94404 21579</p>
              <p>+91 93939 88799 / +91 89198 58313</p>
              <p className="mt-1"><strong>Email:</strong> srisainathnursery@gmail.com</p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/80 text-center">
          <p>© 2026 Sri Sainath Nursery. All rights reserved. • Kadiyapulanka, Kadiam</p>
          <p className="text-emerald-300 flex items-center justify-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for Green Nature Lovers
          </p>
        </div>

      </div>
    </footer>
  );
}

