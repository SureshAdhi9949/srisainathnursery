import React, { useState } from 'react';
import { Truck, Tag, MessageSquare } from 'lucide-react';

export default function BulkLogistics() {
  const [quantity, setQuantity] = useState(500);

  const getLogistics = (qty) => {
    if (qty < 500) {
      return {
        truck: 'Mini Pickup (Tata Ace / Bolero Camper)',
        discount: '15% Wholesale Farmgate Discount'
      };
    } else if (qty < 1500) {
      return {
        truck: '14-Foot Eicher Truck (Covered Aerated)',
        discount: '25% Direct Kadiam Nursery Wholesale'
      };
    } else if (qty < 4000) {
      return {
        truck: '19-Foot / 22-Foot Dedicated Container',
        discount: '35% Farm & Villa Developer Special Rate'
      };
    } else {
      return {
        truck: '32-Foot Multi-Axle Interstate Long-Haul Fleet',
        discount: '45% Maximum Bulk Landscape Direct Rate'
      };
    }
  };

  const logistics = getLogistics(quantity);

  return (
    <section id="bulk" className="py-24 bg-[#ecfdf5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full bg-emerald-200 text-emerald-900 font-extrabold text-xs uppercase tracking-wider">
            Wholesale &amp; Commercial Orders
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-serif-lux text-gray-900 mt-3">
            Bulk Nursery Orders &amp; Direct Truck Logistics
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Are you a landscape architect, farm developer, villa contractor, or municipality? Calculate your truck capacity and unlock tiered direct farmgate pricing.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-100">
          <div className="space-y-6">
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-700">Select Desired Plant Quantity:</span>
              <span className="text-2xl font-black text-emerald-700">{quantity.toLocaleString()} Plants</span>
            </div>

            <input
              type="range"
              min="50"
              max="8000"
              step="50"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              className="w-full accent-emerald-600 h-3 bg-gray-200 rounded-lg cursor-pointer"
            />
            
            <div className="flex justify-between text-[11px] text-gray-400 font-semibold">
              <span>50 Plants (Pickup)</span>
              <span>1,000 Plants (Eicher)</span>
              <span>4,000+ Plants (Container)</span>
              <span>8,000+ Plants (Multi-Fleet)</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                <span className="text-xs text-emerald-800 font-bold flex items-center gap-1.5 mb-1">
                  <Truck className="w-4 h-4 text-emerald-600" /> Recommended Truck Logistics
                </span>
                <p className="text-base font-extrabold text-gray-900">{logistics.truck}</p>
                <p className="text-[11px] text-gray-500 mt-1">Dispatched directly from Kadiyapulanka yard with live packing check.</p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
                <span className="text-xs text-amber-900 font-bold flex items-center gap-1.5 mb-1">
                  <Tag className="w-4 h-4 text-amber-600" /> Volume Pricing Tier
                </span>
                <p className="text-base font-extrabold text-gray-900">{logistics.discount}</p>
                <p className="text-[11px] text-gray-500 mt-1">Official invoice &amp; GST billing available on request.</p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <a
                href={`https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20we%20require%20a%20formal%20wholesale%20quotation%20for%20*${quantity}%20plants*%20with%20logistics%20support%20(${encodeURIComponent(logistics.truck)}).`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4" /> Request Official Bulk Quotation via WhatsApp
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

