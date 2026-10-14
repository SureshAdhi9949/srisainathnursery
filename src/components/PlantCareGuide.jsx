import React from 'react';
import { Sun, Droplet, Sprout } from 'lucide-react';

export default function PlantCareGuide() {
  const tips = [
    {
      icon: Sun,
      color: 'text-amber-500',
      title: '1. Light Matching',
      desc: 'Indoor plants thrive in bright indirect light. Keep near east or north-facing windows. Fruit trees & bonsai require 4-6 hours of radiant morning sun for prolific flower bud induction.'
    },
    {
      icon: Droplet,
      color: 'text-blue-500',
      title: '2. Deep Watering Rule',
      desc: 'Never sprinkle lightly every day — this causes shallow weak roots. Instead, water thoroughly until it drains out the bottom hole, then let the top 2 inches dry before watering again.'
    },
    {
      icon: Sprout,
      color: 'text-emerald-600',
      title: '3. Organic Nourishment',
      desc: 'Feed every 3 weeks with well-decomposed vermicompost or neem cake powder. Godavari red soil enriched with organic manure keeps foliage glossy and naturally repels root parasites.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider">
            Practical Horticulture
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif-lux text-gray-900 mt-3">
            The Kadiam Nursery Plant Care Guide
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Simple, foolproof habits cultivated by nurserymen to keep your greens bursting with life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tips.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-[#ecfdf5]/60 border border-emerald-100 hover:shadow-lg transition">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl mb-6">
                  <Icon className={`w-7 h-7 ${t.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t.title}</h3>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

