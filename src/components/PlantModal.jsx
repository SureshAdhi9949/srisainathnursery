import React from 'react';
import { X, Sun, Droplet, Mountain, ShieldCheck, Sparkles, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function PlantModal({ plant, onClose }) {
  if (!plant) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto animate-fade-in">
        
        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 max-h-[380px] md:max-h-full">
            <img
              src={plant.image}
              alt={plant.name}
              decoding="async"
              className="w-full h-full object-cover min-h-[300px]"
              onError={(e) => { e.target.src = '/images/logo.png'; }}
            />
            <span className="absolute top-4 left-4 bg-emerald-950/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
              {plant.categoryLabel}
            </span>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-white/50 text-xs shadow-sm">
              <p className="font-bold text-gray-900 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Fresh Stock at Kadiyapulanka Nursery
              </p>
            </div>
          </div>

          {/* Details Side */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase">Botanical Dossier</span>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-1">{plant.name}</h2>
                  <p className="text-sm font-semibold text-emerald-700">{plant.teluguName}</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {plant.description}
              </p>

              {/* Spec Table */}
              <div className="mt-5 space-y-2.5 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-emerald-100/60">
                  <span className="font-bold text-gray-700 flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-amber-500" /> Sunlight:
                  </span>
                  <span className="text-gray-900 font-semibold">{plant.sunlight}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-emerald-100/60">
                  <span className="font-bold text-gray-700 flex items-center gap-1.5">
                    <Droplet className="w-3.5 h-3.5 text-blue-500" /> Watering Cycle:
                  </span>
                  <span className="text-gray-900 font-semibold">{plant.water}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-emerald-100/60">
                  <span className="font-bold text-gray-700 flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-amber-700" /> Pot / Space:
                  </span>
                  <span className="text-gray-900 font-semibold">{plant.potSize}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-rose-500" /> Nursery Heritage:
                  </span>
                  <span className="text-emerald-800 font-semibold">100% Acclimatized Godavari Soil</span>
                </div>
              </div>

              {/* Benefit Note */}
              <div className="mt-4 p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p><strong>Nursery Specialist Note:</strong> {plant.benefits}</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20am%20interested%20in%20inquiring%20about%20*${encodeURIComponent(plant.name)}*%20(${encodeURIComponent(plant.price)}).%20Can%20you%20send%20live%20photos%20and%20delivery%20details%3F`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center transition flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" /> Request Photos on WhatsApp
              </a>
              <a
                href="tel:+919440421579"
                className="py-3 px-5 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold text-xs text-center transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" /> Call Specialist
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

