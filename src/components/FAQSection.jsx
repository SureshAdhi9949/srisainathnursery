import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Can we directly visit Sri Sainath Nursery in Kadiyapulanka?',
      a: 'Absolutely! You are warmly welcomed to walk through our sprawling green rows, view mature specimen plants, touch the foliage, and pick your favorite saplings. We are open Monday to Sunday from 7:00 AM to 7:00 PM.'
    },
    {
      q: 'Do you accept wholesale & bulk orders for farms or villas?',
      a: 'Yes! Bulk nursery supply is our key specialty. We regularly supply truckloads of avenue trees, fruit orchards, and decorative hedges to clients in Hyderabad, Vizag, Vijayawada, Bangalore, and across India.'
    },
    {
      q: 'Do you operate as an online e-commerce cart?',
      a: 'No, we do not operate as an impersonal shopping cart. Because plants are living organisms, we provide direct WhatsApp photos, video previews, and telephone consultations to ensure you get exactly the healthy plant you expect.'
    },
    {
      q: 'What plants work best for hot South Indian climates?',
      a: 'Our Kadiam-grown Banganapalli Mango, Dragon Fruit, Bougainvillea, Adenium Bonsai, and Snake Plants are naturally acclimatized to high summer temperatures and survive robustly with minimal care.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-3xl font-black font-serif-lux text-gray-900 mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-6 flex justify-between items-center font-bold text-gray-900 transition hover:bg-emerald-50/50"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

