import React, { useState } from 'react';
import { MapPin, PhoneCall, MessageSquare, Mail, Clock, Send, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    spaceType: 'Home & Balcony Garden',
    message: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (err) {}
  };

  const closeReceipt = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      spaceType: 'Home & Balcony Garden',
      message: ''
    });
  };

  const whatsappMessage = submittedData
    ? `*NEW NURSERY ENQUIRY - SRI SAINATH NURSERY*%0A%0A` +
      `*Name:* ${encodeURIComponent(submittedData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(submittedData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(submittedData.email || 'N/A')}%0A` +
      `*Category:* ${encodeURIComponent(submittedData.spaceType)}%0A` +
      `*Message:* ${encodeURIComponent(submittedData.message)}`
    : '';

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs uppercase tracking-wider">
            Plan Your Visit or Inquiry
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-lux text-gray-900 mt-3">
            Get in Touch with Sri Sainath Nursery
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Call, WhatsApp, or drop by Veeravaram Road in Kadiyapulanka. Our experienced nursery team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 rounded-3xl bg-[#ecfdf5]/80 border border-emerald-100 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-white text-emerald-700 flex items-center justify-center text-xl shrink-0 shadow-sm">
                <MapPin className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-800 uppercase">Nursery Location</p>
                <h4 className="text-base font-extrabold text-gray-900 mt-0.5">Veeravaram Rd, Kadiyapulanka</h4>
                <p className="text-xs text-gray-600 mt-1">Rajamahendravaram, Kadiam, Andhra Pradesh 533126</p>
                <a
                  href="https://www.google.com/maps?q=16.8943985,81.8246373"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 mt-2"
                >
                  <span>Open in Google Maps</span> <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#ecfdf5]/80 border border-emerald-100 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-white text-emerald-700 flex items-center justify-center text-xl shrink-0 shadow-sm">
                <PhoneCall className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-emerald-800 uppercase">Direct Helpline Lines</p>
                <a href="tel:+919440421579" className="block text-base font-extrabold text-gray-900 hover:text-emerald-700 transition">
                  +91 94404 21579 <span className="text-xs font-normal text-gray-500">(Primary / Orders)</span>
                </a>
                <a href="tel:+919393988799" className="block text-base font-extrabold text-gray-900 hover:text-emerald-700 transition">
                  +91 93939 88799 <span className="text-xs font-normal text-gray-500">(Landscape Consulting)</span>
                </a>
                <a href="tel:+918919858313" className="block text-base font-extrabold text-gray-900 hover:text-emerald-700 transition">
                  +91 89198 58313 <span className="text-xs font-normal text-gray-500">(Customer Care)</span>
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/919989435886"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-emerald-600 text-white flex items-center gap-3 shadow-md hover:bg-emerald-700 transition"
              >
                <MessageSquare className="w-6 h-6" />
                <div>
                  <p className="text-[11px] text-emerald-100 font-semibold uppercase">Instant Chat</p>
                  <p className="font-bold text-sm">99894 35886</p>
                </div>
              </a>

              <a
                href="mailto:srisainathnursery@gmail.com"
                className="p-5 rounded-2xl bg-white border border-gray-200 text-gray-800 flex items-center gap-3 shadow-sm hover:border-emerald-500 transition"
              >
                <Mail className="w-6 h-6 text-emerald-600 shrink-0" />
                <div className="truncate">
                  <p className="text-[11px] text-gray-500 font-semibold uppercase">Email Us</p>
                  <p className="font-bold text-xs truncate">srisainathnursery</p>
                </div>
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs font-bold text-gray-900">Operating Days</p>
                  <p className="text-xs text-gray-600">Monday to Sunday (All 7 Days)</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-xs">
                7:00 AM – 7:00 PM
              </span>
            </div>

          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-2">Send an Enquiry or Request Price Sheet</h3>
              <p className="text-xs text-gray-500 mb-6">
                Fill in your garden or project requirements below to receive an instant quotation link.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Suresh Varma"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 94400 12345"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Space / Requirement Type</label>
                    <select
                      value={formData.spaceType}
                      onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-sm bg-white"
                    >
                      <option value="Home & Balcony Garden">Home &amp; Balcony Garden</option>
                      <option value="Villa Landscaping">Villa &amp; Farmhouse Landscaping</option>
                      <option value="Fruit Orchard Plantation">Fruit Orchard / Commercial Farm</option>
                      <option value="Master Bonsai Collector">Collector Bonsai Plants</option>
                      <option value="Wholesale Truck Order">Wholesale / Bulk Truck Supply</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Plant Details / Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what varieties you need, number of plants, or how we can help your garden..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 outline-none text-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Submit Nursery Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Google Map Embed */}
        <div className="mt-16 rounded-3xl overflow-hidden border border-emerald-100 shadow-xl bg-gray-100">
          <div className="p-4 bg-[#062b1a] text-white flex items-center justify-between text-xs font-bold">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              Interactive Location Map: Veeravaram Road, Kadiyapulanka (Kadiam)
            </span>
            <span className="text-emerald-300 hidden sm:inline">Coordinates: 16.8943985° N, 81.8246373° E</span>
          </div>
          <iframe
            title="Sri Sainath Nursery Kadiyapulanka Map"
            src="https://www.google.com/maps?q=16.8943985,81.8246373&output=embed"
            className="w-full h-[400px] border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>

      </div>

      {/* Success Modal */}
      {submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl text-center relative animate-fade-in">
            <button
              onClick={closeReceipt}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-gray-900">Enquiry Received!</h3>
            <p className="text-xs text-gray-500 mt-1">Thank you, <strong className="text-gray-800">{submittedData.name}</strong>!</p>

            <div className="mt-5 p-4 rounded-2xl bg-[#ecfdf5] border border-emerald-100 text-left text-xs space-y-2">
              <p><strong>Registered Phone:</strong> {submittedData.phone}</p>
              <p><strong>Space Type:</strong> {submittedData.spaceType}</p>
              <p><strong>Requirement:</strong> {submittedData.message}</p>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={`https://wa.me/919989435886?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" /> Send Instantly via WhatsApp
              </a>
              <button
                onClick={closeReceipt}
                className="py-2.5 px-4 rounded-xl text-gray-600 font-bold text-xs hover:bg-gray-100 transition"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

