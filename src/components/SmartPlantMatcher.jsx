import React, { useState } from 'react';
import { Building2, Armchair, Home, Tractor, Sun, CloudSun, Moon, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PLANTS_DATA } from '../data/plants';

export default function SmartPlantMatcher({ onSelectPlant }) {
  const [space, setSpace] = useState('balcony');
  const [light, setLight] = useState('indirect');
  const [goal, setGoal] = useState('purify');
  const [results, setResults] = useState(null);

  const handleMatch = (e) => {
    e.preventDefault();

    let matches = [];
    if (space === 'indoor' || light === 'low') {
      matches = PLANTS_DATA.filter((p) => p.category === 'indoor').slice(0, 3);
    } else if (space === 'farm' || goal === 'fruits') {
      matches = PLANTS_DATA.filter((p) => p.category === 'fruit').slice(0, 3);
    } else if (goal === 'luxury' || space === 'villa') {
      matches = PLANTS_DATA.filter((p) => p.category === 'bonsai' || p.id === 'monstera').slice(0, 3);
    } else {
      matches = PLANTS_DATA.filter((p) => p.featured).slice(0, 3);
    }

    setResults(matches);

    // Confetti effect
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#84cc16', '#f59e0b']
      });
    } catch (err) {}
  };

  return (
    <section id="matcher" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-700/30 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-lime-600/20 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3.5 py-1 rounded-full bg-emerald-800 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Interactive Botanical Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif-lux mt-3">
            Find Your Perfect Plant Match in 3 Clicks
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base mt-2">
            Tell us about your space and lifestyle. Our nursery algorithm will pick the ideal varieties guaranteed to flourish under your care.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleMatch} className="space-y-8">
            
            {/* Step 1: Space */}
            <div>
              <label className="block text-sm font-extrabold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">1</span>
                Where do you plan to grow your plants?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'balcony', label: 'Apartment Balcony', icon: Building2 },
                  { id: 'indoor', label: 'Living Room / Desk', icon: Armchair },
                  { id: 'villa', label: 'Villa / Lawn', icon: Home },
                  { id: 'farm', label: 'Farm / Open Acre', icon: Tractor }
                ].map((item) => {
                  const Icon = item.icon;
                  const isChecked = space === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSpace(item.id)}
                      className={`cursor-pointer p-4 rounded-2xl border-2 text-center transition ${
                        isChecked
                          ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-200'
                          : 'border-gray-200 hover:border-emerald-400'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${isChecked ? 'text-emerald-700' : 'text-emerald-600'}`} />
                      <span className="font-bold text-xs block text-gray-800">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Sunlight */}
            <div>
              <label className="block text-sm font-extrabold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">2</span>
                What is the sunlight condition?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'full', label: 'Full Hot Sun (6+ Hours)', sub: 'Terrace / Open ground', icon: Sun, color: 'text-amber-500' },
                  { id: 'indirect', label: 'Bright Filtered / Semi-Shade', sub: 'Covered Balcony / Window', icon: CloudSun, color: 'text-blue-500' },
                  { id: 'low', label: 'Low / Artificial Light', sub: 'Office cabins / Bedrooms', icon: Moon, color: 'text-indigo-500' }
                ].map((item) => {
                  const Icon = item.icon;
                  const isChecked = light === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setLight(item.id)}
                      className={`cursor-pointer p-4 rounded-2xl border-2 text-center transition ${
                        isChecked
                          ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-200'
                          : 'border-gray-200 hover:border-emerald-400'
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                      <span className="font-bold text-xs block text-gray-800">{item.label}</span>
                      <span className="text-[11px] text-gray-500 block">{item.sub}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Goal */}
            <div>
              <label className="block text-sm font-extrabold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">3</span>
                What is your primary goal?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'purify', label: '🍃 Air Purification' },
                  { id: 'fruits', label: '🥭 Sweet Organic Fruits' },
                  { id: 'luxury', label: '🏛️ Luxury Living Art' },
                  { id: 'lowcare', label: '💧 Low Care & Resilient' }
                ].map((item) => {
                  const isChecked = goal === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setGoal(item.id)}
                      className={`cursor-pointer p-3.5 rounded-2xl border-2 text-center transition ${
                        isChecked
                          ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-200'
                          : 'border-gray-200 hover:border-emerald-400'
                      }`}
                    >
                      <span className="font-bold text-xs block text-gray-800">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition"
              >
                <Sparkles className="w-4 h-4 text-amber-300" /> Generate Recommended Plants
              </button>
            </div>
          </form>

          {/* Results display */}
          {results && (
            <div className="mt-8 p-6 md:p-8 bg-[#041f13] text-white rounded-3xl border border-emerald-600/40 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl border border-emerald-500/30">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Your Custom Green Sanctuary Match</h3>
                  <p className="text-xs text-emerald-300">
                    Curated based on: {space.toUpperCase()} • {light.toUpperCase()} LIGHT • {goal.toUpperCase()}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {results.map((r) => (
                  <div key={r.id} className="bg-emerald-950/60 rounded-2xl p-4 border border-emerald-800/60 flex flex-col justify-between">
                    <div className="h-32 rounded-xl overflow-hidden mb-3 bg-emerald-950">
                      <img src={r.image} alt={r.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-bold text-white text-sm">{r.name}</h4>
                    <p className="text-xs text-emerald-300/80 mb-3">{r.sunlight}</p>
                    <button
                      onClick={() => onSelectPlant(r)}
                      className="w-full py-1.5 px-2 bg-emerald-600/60 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition"
                    >
                      View Dossier
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-emerald-200">
                  Want these delivered to your doorstep or loaded into your project transport?
                </p>
                <a
                  href={`https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20used%20your%20Smart%20Plant%20Matcher%20for%20my%20${space}%20and%20would%20like%20to%20order%20the%20recommended%20varieties!`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs whitespace-nowrap flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Order This Recommendation Bundle
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

