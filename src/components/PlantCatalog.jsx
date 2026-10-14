import React, { useState, useMemo } from 'react';
import { Search, Leaf, Eye, Droplet, Award, MessageSquare, Info } from 'lucide-react';
import { PLANTS_DATA } from '../data/plants';

export default function PlantCatalog({ onSelectPlant }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Varieties' },
    { id: 'indoor', label: '🪴 Indoor & Air Purifiers' },
    { id: 'fruit', label: '🥭 Fruit Trees & Hybrids' },
    { id: 'bonsai', label: '🌳 Master Bonsai Art' },
    { id: 'flowering', label: '🌺 Flowering & Exotics' }
  ];

  const filteredPlants = useMemo(() => {
    return PLANTS_DATA.filter((plant) => {
      const matchesCategory = activeCategory === 'all' || plant.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        plant.name.toLowerCase().includes(q) ||
        plant.teluguName.toLowerCase().includes(q) ||
        plant.categoryLabel.toLowerCase().includes(q) ||
        plant.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="plants" className="py-24 bg-mesh-green relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider mb-3">
            Explore Our Greenery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-lux text-gray-900 leading-tight">
            Plants for Every Living Space &amp; Landscape
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4">
            From lush indoor air purifiers and miniature bonsai art to commercial high-yield fruit trees and avenue shade trees — discover hand-selected plants from Kadiam.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, fruit, bonsai, or care need (e.g. Mango, Monstera)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-gray-300 bg-white shadow-sm focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none text-sm transition"
            />
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-bold transition border ${
                  activeCategory === cat.id
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plants Grid */}
        {filteredPlants.length === 0 ? (
          <div className="py-16 text-center max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">No varieties match "{searchQuery}"</h3>
            <p className="text-gray-500 mt-2 text-sm">
              We have 1,500+ unlisted varieties directly at our Kadiyapulanka acres. Contact our team directly on WhatsApp!
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-5 px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold"
            >
              Reset Filter &amp; View All
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredPlants.map((plant) => (
              <div
                key={plant.id}
                className="plant-card bg-white rounded-3xl border border-emerald-100/80 overflow-hidden shadow-sm flex flex-col group"
              >
                {/* Image Container */}
                <div
                  className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => onSelectPlant(plant)}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    decoding="async"
                    className="img-zoom w-full h-full object-cover"
                    onError={(e) => { e.target.src = '/images/logo.png'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <Leaf className="w-3 h-3 text-emerald-600" />
                    {plant.categoryLabel}
                  </span>

                  <button
                    onClick={(e) => { e.stopPropagation(); onSelectPlant(plant); }}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-emerald-700"
                    title="Quick Dossier"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs text-emerald-300 font-medium">{plant.sunlight}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          {plant.name}
                        </h3>
                        <p className="text-xs font-semibold text-emerald-600/90 mt-0.5">{plant.teluguName}</p>
                      </div>
                      <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {plant.price}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                      {plant.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-gray-100 text-xs text-gray-600">
                      <div className="flex items-center gap-1.5 truncate">
                        <Droplet className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="truncate">{plant.water.split('(')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>Acclimatized</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex items-center gap-2 pt-2">
                    <button
                      onClick={() => onSelectPlant(plant)}
                      className="flex-1 py-2.5 px-3 rounded-xl border border-emerald-300 text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition flex items-center justify-center gap-1.5"
                    >
                      <Info className="w-3.5 h-3.5" /> Care Info
                    </button>
                    <a
                      href={`https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20am%20interested%20in%20ordering%20*${encodeURIComponent(plant.name)}*%20(${encodeURIComponent(plant.categoryLabel)}).%20Please%20share%20current%20photos%20and%20pricing.`}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Acreage Assistance Card */}
        <div className="mt-16 p-8 rounded-3xl bg-[#062b1a] text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-300">
              Looking for a specific rare variety?
            </span>
            <h3 className="text-2xl font-black">We have 1,500+ plant varieties in our Kadiam acreage!</h3>
            <p className="text-sm text-emerald-100/80 max-w-xl">
              Can't find the exact plant you need in this preview? Our nursery acreage houses rare palms, exotic grafted climbers, medicinal herbs, and architectural trees.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20am%20looking%20for%20a%20specific%20plant%20variety%20not%20listed%20on%20the%20website."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" /> Inquire Custom Variety
            </a>
            <a
              href="tel:+919440421579"
              className="py-3 px-5 rounded-full bg-white text-[#062b1a] font-bold text-xs hover:bg-gray-100 transition"
            >
              Direct Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

