import React, { useState, useEffect } from 'react';
import {
  Play,
  Image as ImageIcon,
  Video,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  MapPin,
  Eye,
  Clock,
  Radio,
  Share2
} from 'lucide-react';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [videoLoading, setVideoLoading] = useState(true);

  const mediaItems = [
    // --- VIDEOS ---
    {
      id: 'vid-1',
      type: 'video',
      category: 'videos',
      title: 'Kadiyam Nurseries 4K Aerial Drone Tour',
      teluguTitle: 'కడియం నర్సరీల 4K డ్రోన్ విహంగ వీక్షణం',
      tag: '4K Drone Tour',
      youtubeId: 'uyupNvRz3cM',
      duration: '5:20 Min',
      quality: '4K Ultra HD',
      image: '/images/gallery/nursery-greenhouse-avenue.webp',
      badge: 'Drone Aerial',
      description: 'Experience the breathtaking sprawling greenery of Kadiyapulanka & Kadiyam nurseries from above. Miles of lush shade nets, tropical palm avenues, and fertile Godavari nursery beds.'
    },
    {
      id: 'vid-2',
      type: 'video',
      category: 'videos',
      title: 'NTV News Special Documentary on Kadiyam Hub',
      teluguTitle: 'NTV ప్రత్యేక నివేదిక: కడియం నర్సరీల అంతర్జాతీయ ఖ్యాతి',
      tag: 'NTV Telugu Feature',
      youtubeId: '8EFSLb91mb8',
      duration: '8:45 Min',
      quality: 'HD Documentary',
      image: '/images/gallery/nursery-foliage-rows.webp',
      badge: 'Official Media',
      description: 'Exclusive Telugu news report documenting how the rich alluvial silt of River Godavari nurtures over 1,500 species, exported to top landscapers across India and abroad.'
    },
    {
      id: 'vid-3',
      type: 'video',
      category: 'videos',
      title: 'Kadiyam Rare Plants & Garden Tour Walkthrough',
      teluguTitle: 'అరుదైన మొక్కలు & నర్సరీ కలెక్షన్ గైడెడ్ టూర్',
      tag: 'Walking Tour',
      youtubeId: 'Qk9RrCqoKQ0',
      duration: '11:10 Min',
      quality: 'Full HD 1080p',
      image: '/images/gallery/nursery-propagation-beds.webp',
      badge: 'Botanical Walk',
      description: 'Step-by-step walking guide through exotic botanical foliage, mature bonsai displays, and high-yield grafted fruit tree sections.'
    },

    // --- NURSERY SETUP & GREENHOUSES ---
    {
      id: 'setup-1',
      type: 'image',
      category: 'nursery',
      title: 'Main Micro-Climate Shade Net Canopy',
      teluguTitle: 'మైక్రో-క్లైమేట్ షేడ్ నెట్ పరిరక్షణ కేంద్రం',
      tag: 'Shade Net System',
      image: '/images/gallery/nursery-shade-net-1.webp',
      badge: 'Real Nursery Photo',
      description: 'State-of-the-art 50% UV-stabilized shade nets protecting young saplings from harsh midday sun while maintaining Godavari humidity for ideal root development.'
    },
    {
      id: 'setup-2',
      type: 'image',
      category: 'nursery',
      title: 'Central Greenhouse Propagation Avenue',
      teluguTitle: 'సెంట్రల్ గ్రీన్‌హౌస్ అవెన్యూ వరుసలు',
      tag: 'Greenhouse Rows',
      image: '/images/gallery/nursery-greenhouse-avenue.webp',
      badge: 'Real Nursery Photo',
      description: 'Sprawling covered corridors at our Kadiyapulanka facility with automated micro-misting and alluvium soil beds housing thousands of commercial foliage varieties.'
    },
    {
      id: 'setup-3',
      type: 'image',
      category: 'nursery',
      title: 'Godavari Alluvial Propagation Beds',
      teluguTitle: 'గోదావరి ఒండ్రు మట్టి నర్సరీ మడులు',
      tag: 'Soil Propagation',
      image: '/images/gallery/nursery-propagation-beds.webp',
      badge: 'Real Nursery Photo',
      description: 'Nutrient-rich River Godavari alluvial silt mixed with matured organic vermicompost, ensuring rapid root proliferation and zero root-shock.'
    },
    {
      id: 'setup-4',
      type: 'image',
      category: 'nursery',
      title: 'Wholesale Stockyard & Interstate Dispatch Deck',
      teluguTitle: 'హోల్‌సేల్ స్టాక్‌యార్డ్ & డిస్పాచ్ డెక్',
      tag: 'Bulk Logistics',
      image: '/images/gallery/nursery-wholesale-stock.webp',
      badge: 'Real Nursery Photo',
      description: 'Acclimatized plants conditioned for long-haul truck transport, ready for municipal landscaping, gated community projects, and garden centers across India.'
    },
    {
      id: 'setup-5',
      type: 'image',
      category: 'nursery',
      title: 'Ornamental Palm & Avenue Specimen Grove',
      teluguTitle: 'అలంకార తాటి & రాయల్ పామ్ వృక్షాలు',
      tag: 'Landscape Palms',
      image: '/images/gallery/nursery-ornamental-palms.webp',
      badge: 'Real Nursery Photo',
      description: 'Mature Foxtail, Royal, and Areca palms cultivated for hotel resorts, highway medians, farmhouses, and modern architectural landscapes.'
    },
    {
      id: 'setup-6',
      type: 'image',
      category: 'nursery',
      title: 'Dense Tropical Foliage Acclimatization Rows',
      teluguTitle: 'ట్రోపికల్ మొక్కల సాగు క్షేత్రం',
      tag: 'Tropical Foliage',
      image: '/images/gallery/nursery-foliage-rows.webp',
      badge: 'Real Nursery Photo',
      description: 'Endless rows of glossy foliage plants acclimatized to handle varying indoor lighting and varied Indian climate zones with minimal leaf drop.'
    },
    {
      id: 'setup-7',
      type: 'image',
      category: 'nursery',
      title: 'Tender Seedling & Grafting Care Nursery',
      teluguTitle: 'చిన్న అంటుమొక్కల ప్రత్యేక నర్సింగ్ యూనిట్',
      tag: 'Graft Nursing',
      image: '/images/gallery/nursery-seedling-care.webp',
      badge: 'Real Nursery Photo',
      description: 'Daily individual inspection by veteran Kadiam horticulturists, monitoring fungal resistance, graft unions, and balanced hydration.'
    },
    {
      id: 'setup-8',
      type: 'image',
      category: 'nursery',
      title: 'Sri Sainath Nursery Model Display Garden',
      teluguTitle: 'శ్రీ సాయినాథ్ నర్సరీ మోడల్ గార్డెన్ డిస్ప్లే',
      tag: 'Display Garden',
      image: '/images/gallery/nursery-garden-display.jpg',
      badge: 'Veeravaram Road Yard',
      description: 'Walk-in visitor landscaped rockery and plant showcase at our Veeravaram Road nursery entrance in Kadiyapulanka.'
    },

    // --- MASTER BONSAI SPECIMEN ---
    {
      id: 'bon-1',
      type: 'image',
      category: 'bonsai',
      title: 'Ficus Microcarpa Aerial Pillar Root Bonsai',
      teluguTitle: 'ఫికస్ మైక్రోకార్పా శిల్ప బోన్సాయ్ (18+ ఏళ్ళు)',
      tag: '18+ Years Specimen',
      image: '/images/gallery/bonsai-ficus-specimen.jpg',
      badge: 'Master Bonsai',
      description: 'Hand-sculpted over nearly two decades. Features ancient aerial prop roots gripping natural stone in an imported glazed ceramic tray.'
    },
    {
      id: 'bon-2',
      type: 'image',
      category: 'bonsai',
      title: 'Casuarina Equisetifolia Artistic Bonsai',
      teluguTitle: 'కాజువారినా (సర్వి) ఆర్టిస్టిక్ బోన్సాయ్',
      tag: 'Sculpted Tree',
      image: '/images/gallery/bonsai-casuarina.jpg',
      badge: 'Master Bonsai',
      description: 'Trained in the literati windswept style, this Casuarina captures the rugged grace of coastal Andhra riverbanks in miniature form.'
    },
    {
      id: 'bon-3',
      type: 'image',
      category: 'bonsai',
      title: 'Cliff-Draping Cascade Juniper Bonsai',
      teluguTitle: 'క్యాస్కేడ్ జూనిపర్ క్లిఫ్ బోన్సాయ్',
      tag: 'Cascade Style',
      image: '/images/gallery/bonsai-cascade-juniper.jpg',
      badge: 'Master Bonsai',
      description: 'Graceful downward sweep mimicking trees growing on mountain precipices. Dense needle foliage with copper wiring refinement.'
    },
    {
      id: 'bon-4',
      type: 'image',
      category: 'bonsai',
      title: 'Soju Twin-Trunk Harmony Bonsai',
      teluguTitle: 'ట్విన్-ట్రంక్ సామరస్య బోన్సాయ్',
      tag: 'Twin Trunk',
      image: '/images/gallery/bonsai-twin-trunk.jpg',
      badge: 'Master Bonsai',
      description: 'Two trunks emerging harmoniously from a unified root nebari, traditional symbol of friendship, partnership, and family unity.'
    },
    {
      id: 'bon-5',
      type: 'image',
      category: 'bonsai',
      title: 'Ancient Banyan Aerial Root Bonsai (Bonsai 5)',
      teluguTitle: 'మర్రి చెట్టు బోన్సాయ్ వైభవం',
      tag: 'Banyan Specimen',
      image: '/images/gallery/bonsai-banyan-root.jpg',
      badge: 'Master Bonsai',
      description: 'Majestic miniature banyan with robust buttress roots, capturing the spiritual and cultural heart of Godavari village shrines.'
    },

    // --- FRUIT ORCHARDS & INDOOR FLORA ---
    {
      id: 'pl-1',
      type: 'image',
      category: 'plants',
      title: 'Godavari Banganapalli Grafted Mango Sapling',
      teluguTitle: 'బంగనపల్లి అంటు మామిడి మొక్కలు (హైబ్రిడ్)',
      tag: 'Grafted Fruit',
      image: '/images/gallery/fruit-banganapalli-graft.jpg',
      badge: 'Kadiam Graft',
      description: 'Famous Andhra King of Mangoes! Grafted onto hardy native rootstocks to ensure bountiful, aromatic harvest within 2-3 years.'
    },
    {
      id: 'pl-2',
      type: 'image',
      category: 'plants',
      title: 'Red-Fleshed Hybrid Dragon Fruit Cactus',
      teluguTitle: 'రెడ్ ఫ్లెష్ డ్రాగన్ ఫ్రూట్ గ్రాఫ్ట్స్',
      tag: 'Exotic Fruit',
      image: '/images/gallery/fruit-dragon-cactus.jpg',
      badge: 'Organic Stock',
      description: 'High-sugar antioxidant-rich pitaya variety with resilient spine structure and disease-resistant root clusters.'
    },
    {
      id: 'pl-3',
      type: 'image',
      category: 'plants',
      title: 'Mature Swiss Cheese Monstera Deliciosa',
      teluguTitle: 'మాన్‌స్టెరా డెలిసియోసా ఇండోర్ ప్లాంట్',
      tag: 'Architectural Foliage',
      image: '/images/gallery/indoor-deliciosa-mature.jpg',
      badge: 'Indoor Best Seller',
      description: 'Dramatic broad split leaves that serve as living sculptures for luxury interiors, air purifying and thriving in bright indirect room light.'
    },
    {
      id: 'pl-4',
      type: 'image',
      category: 'plants',
      title: 'Godavari Sweet Star Fruit (Averrhoa Carambola)',
      teluguTitle: 'మధుర కారంబోలా (స్టార్ ఫ్రూట్) చెట్లు',
      tag: 'Exotic Fruit',
      image: '/images/star-fruit.jpg',
      badge: 'Fruit Orchard',
      description: 'Prolific fruiting saplings that produce crunchy, star-shaped tropical fruits rich in Vitamin C and natural minerals.'
    },
    {
      id: 'pl-5',
      type: 'image',
      category: 'plants',
      title: 'Bonsai Jade & Flowering Adenium Showcase',
      teluguTitle: 'పూల అడేనియం & బోన్సాయ్ కలెక్షన్',
      tag: 'Flowering Bonsai',
      image: '/images/flower.jpg',
      badge: 'Desert Rose',
      description: 'Vibrant hybrid blooms grafted on bulbous succulent caudexes, providing non-stop color on sunny balconies and terraces.'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Media', count: mediaItems.length },
    { id: 'videos', label: '🎬 Video Tours & Drone', count: mediaItems.filter(m => m.category === 'videos').length },
    { id: 'nursery', label: '🏡 Nursery Setup & Shade Nets', count: mediaItems.filter(m => m.category === 'nursery').length },
    { id: 'bonsai', label: '🌳 Master Bonsai Specimen', count: mediaItems.filter(m => m.category === 'bonsai').length },
    { id: 'plants', label: '🥭 Fruit Orchards & Indoor', count: mediaItems.filter(m => m.category === 'plants').length }
  ];

  const filteredItems = activeTab === 'all'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeTab);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMedia) return;
      if (e.key === 'Escape') setSelectedMedia(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia]);

  const handleNext = () => {
    if (!selectedMedia) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedMedia.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setVideoLoading(true);
    setSelectedMedia(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedMedia) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedMedia.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setVideoLoading(true);
    setSelectedMedia(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white via-emerald-50/25 to-white relative overflow-hidden">
      {/* Decorative Background Orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-lime-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-spin-slow" />
            <span>Real-Time Nursery Visuals & Drone Tour</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Sri Sainath Nursery <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-500">
              Live Photo & Video Gallery
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Real photos and video footage straight from our Veeravaram Road nursery beds in{' '}
            <strong className="text-emerald-800">Kadiyapulanka, Kadiam</strong>. Explore our sprawling shade net greenhouses,
            20-year-old master bonsai trees, high-yield fruit grafts, and 4K aerial drone tours.
          </p>

          <p className="mt-1 text-sm font-semibold text-emerald-700">
            కడియం శ్రీ సాయినాథ్ నర్సరీ క్షేత్ర స్థాయి ఫోటోలు & డాక్యుమెంటరీ వీడియోలు
          </p>
        </div>

        {/* Live WhatsApp Video Call Promo Banner */}
        <div className="mb-10 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-[#073822] to-teal-950 text-white shadow-xl border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
              <Radio className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/30 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Video Service
                </span>
                <span className="text-xs text-emerald-200/80 hidden sm:inline">Direct from Kadiyam Beds</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                Want a Real-Time Video Call Walkthrough of our Plants?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 mt-0.5">
                Can’t visit Kadiyapulanka today? Call our horticulturist on WhatsApp video to inspect your exact bonsai or fruit saplings before order!
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/918919858313?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20would%20like%20to%20request%20a%20LIVE%20WhatsApp%20video%20call%20to%20view%20your%20nursery%20plants."
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition transform hover:-translate-y-0.5 shrink-0"
          >
            <Video className="w-4 h-4" />
            <span>Request WhatsApp Video Call</span>
          </a>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/20 scale-105'
                    : 'bg-white hover:bg-emerald-50 text-gray-700 hover:text-emerald-800 border border-emerald-100 shadow-xs'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                    isActive ? 'bg-emerald-700 text-emerald-100' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isVideo = item.type === 'video';

            return (
              <div
                key={item.id}
                onClick={() => {
                  setVideoLoading(true);
                  setSelectedMedia(item);
                }}
                className="group cursor-pointer rounded-2xl bg-white border border-emerald-100/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-1.5"
              >
                {/* Media Image / Video Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />

                  {/* Shading Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-black/60 backdrop-blur-md text-emerald-300 border border-white/10 flex items-center gap-1.5 shadow-sm">
                      {isVideo ? <Video className="w-3 h-3 text-red-400" /> : <ImageIcon className="w-3 h-3 text-emerald-400" />}
                      <span>{item.tag}</span>
                    </span>

                    {isVideo ? (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-red-600 text-white flex items-center gap-1 shadow-sm">
                        <Clock className="w-3 h-3" />
                        <span>{item.duration}</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-700/80 backdrop-blur-xs text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Play Button Overlay for Videos */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-red-600/90 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-white/60">
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Hover Magnifying Badge for Photos */}
                  {!isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 border border-white/20 transform scale-95 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5 text-emerald-300" />
                        <span>View High-Res Photo</span>
                      </div>
                    </div>
                  )}

                  {/* Bottom Image Overlay Text */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-sm sm:text-base leading-snug drop-shadow-md line-clamp-1">
                      {item.title}
                    </p>
                    <p className="text-emerald-200 text-xs font-medium mt-0.5 line-clamp-1 drop-shadow-xs">
                      {item.teluguTitle}
                    </p>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-800">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>Kadiyapulanka, Kadiam</span>
                    </span>

                    <span className="text-emerald-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      <span>{isVideo ? 'Play Video' : 'Full Screen'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nursery Credentials Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold uppercase text-emerald-900">100% Authentic Imagery</p>
              <p className="text-[11px] text-gray-600">Captured at our Veeravaram Rd Acreage</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold uppercase text-emerald-900">4K Drone & Video Access</p>
              <p className="text-[11px] text-gray-600">Inspect scale before bulk truck orders</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold uppercase text-emerald-900">Direct Video Consultation</p>
              <p className="text-[11px] text-gray-600">WhatsApp live stock checks anytime</p>
            </div>
          </div>
        </div>

      </div>

      {/* --- LIGHTBOX MODAL (PHOTO & VIDEO PLAYER) --- */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all"
          onClick={() => setSelectedMedia(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center border border-white/20 transition"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Navigation Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-black/60 hover:bg-emerald-600 text-white flex items-center justify-center border border-white/20 transition shadow-xl"
            aria-label="Previous Media"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Navigation Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-black/60 hover:bg-emerald-600 text-white flex items-center justify-center border border-white/20 transition shadow-xl"
            aria-label="Next Media"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full bg-[#0a1f14] rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Player / Image Display */}
            <div className="relative bg-black flex items-center justify-center overflow-hidden aspect-[16/9] sm:aspect-[16/10] max-h-[60vh]">
              {selectedMedia.type === 'video' ? (
                <>
                  {videoLoading && (
                    <div className="absolute inset-0 bg-[#06180e] flex flex-col items-center justify-center gap-3 z-10">
                      <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-400 rounded-full animate-spin" />
                      <p className="text-xs font-bold text-emerald-300 uppercase tracking-widest animate-pulse">
                        Buffering 4K Video Tour...
                      </p>
                    </div>
                  )}
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedMedia.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={selectedMedia.title}
                    className="w-full h-full border-0 relative z-20"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setVideoLoading(false)}
                  />
                </>
              ) : (
                <img
                  src={selectedMedia.image}
                  alt={selectedMedia.title}
                  decoding="async"
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              )}

              {/* Tag indicator */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/70 backdrop-blur-md text-emerald-300 border border-white/20">
                  {selectedMedia.tag}
                </span>
              </div>
            </div>

            {/* Modal Bottom Metadata & Actions */}
            <div className="p-4 sm:p-6 bg-[#072417] text-white flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-y-auto">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {selectedMedia.type === 'video' ? 'Video Tour' : 'Botanical Archive'}
                  </span>
                  <span className="text-xs text-emerald-300/80">Kadiyapulanka, Kadiam</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                  {selectedMedia.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-300 mt-0.5">
                  {selectedMedia.teluguTitle}
                </p>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  {selectedMedia.description}
                </p>
              </div>

              {/* Inquire on WhatsApp */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                <a
                  href={`https://wa.me/918919858313?text=${encodeURIComponent(
                    `Hello Sri Sainath Nursery, I am inquiring about the plant/video shown in your gallery: "${selectedMedia.title}" (${selectedMedia.tag}). Could you share current stock details and pricing?`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm shadow-md transition transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire This Item on WhatsApp</span>
                </a>

                <a
                  href="tel:+919440421579"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition"
                >
                  <span>Call: +91 94404 21579</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

