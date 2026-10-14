/**
 * SRI SAINATH NURSERY - KADIYAPULANKA, KADIAM
 * Core Application Engine & Interactivity
 */

// ==========================================
// 1. NURSERY PLANTS DATABASE (AUTHENTIC DATA)
// ==========================================
const PLANTS_DATA = [
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    teluguName: 'స్విస్ చీజ్ ప్లాంట్ (మాన్‌స్టెరా)',
    category: 'indoor',
    categoryLabel: 'Indoor Air Purifier',
    price: '₹349 – ₹1,299',
    image: 'images/monstera.jpg',
    sunlight: 'Bright Indirect Light',
    water: 'Once every 4-6 days (Top-soil dry)',
    potSize: '8" to 14" Ceramic/Grow Bag',
    growthRate: 'Fast climbing / Lush foliage',
    benefits: 'Top NASA-grade air purifier. Imparts an immediate tropical luxury ambiance to living spaces and villa lobbies.',
    description: 'Distinctive natural split leaves (fenestrations) that symbolize prosperity and lush botanical luxury. Acclimatized in Godavari red soil.',
    featured: true
  },
  {
    id: 'areca-palm',
    name: 'Areca Palm (Golden Cane)',
    teluguName: 'అరెకా పామ్',
    category: 'indoor',
    categoryLabel: 'Indoor Air Purifier',
    price: '₹199 – ₹899',
    image: 'images/areca-palm.jpg',
    sunlight: 'Filtered Sunlight / Semi-shade',
    water: 'Regular, moist well-draining soil',
    potSize: '10" to 18" Large Planter',
    growthRate: 'Moderate feathery clusters',
    benefits: 'Removes toxic indoor VOCs like benzene & xylene while humidifying dry air-conditioned rooms.',
    description: 'Majestic arching fronds with golden-yellow stems. Highly favored for corporate receptions, living room corners, and covered verandas.',
    featured: true
  },
  {
    id: 'snake-plant',
    name: 'Sansevieria (Snake Plant)',
    teluguName: 'స్నేక్ ప్లాంట్ (అత్తగారి నాలుక)',
    category: 'indoor',
    categoryLabel: 'Indoor Air Purifier',
    price: '₹149 – ₹599',
    image: 'images/snake-plant.jpg',
    sunlight: 'Low Light to Full Sun (Indestructible)',
    water: 'Once every 10-14 days (Drought tolerant)',
    potSize: '6" to 10" Minimalist Pot',
    growthRate: 'Slow architectural upright',
    benefits: 'One of the rare plants releasing Oxygen at night (CAM photosynthesis). Ideal for bedrooms and study rooms.',
    description: 'Thick, architectural sword-shaped variegated foliage that thrives even with minimum maintenance. Perfect for first-time plant parents.',
    featured: false
  },
  {
    id: 'zz-plant',
    name: 'Zamioculcas Zamiifolia (ZZ Plant)',
    teluguName: 'జెడ్-జెడ్ అదృష్ట మొక్క',
    category: 'indoor',
    categoryLabel: 'Indoor Air Purifier',
    price: '₹299 – ₹850',
    image: 'images/zz-plant.jpg',
    sunlight: 'Low to Medium Indirect Light',
    water: 'Once every 2 weeks (Stores water in tubers)',
    potSize: '6" to 12" Tabletop or Floor',
    growthRate: 'Slow to Medium glossy stems',
    benefits: 'Ultra low-light tolerant, removes xylene and toluene from air.',
    description: 'High-gloss deep green leaves resembling polished jade. Withstands neglect, dark office cubicles, and erratic watering effortlessly.',
    featured: false
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily (Spathiphyllum)',
    teluguName: 'పీస్ లిల్లీ (శాంతి మొక్క)',
    category: 'indoor',
    categoryLabel: 'Indoor Flowering',
    price: '₹220 – ₹650',
    image: 'images/peace-lily.jpg',
    sunlight: 'Medium Filtered Light',
    water: 'When leaves droop slightly (Moist soil)',
    potSize: '6" to 10" Ceramic Pot',
    growthRate: 'Moderate clumping blooms',
    benefits: 'Absorbs mold spores, formaldehyde and acetone; produces gorgeous serene white spathes.',
    description: 'Lush dark foliage punctuated by iconic white flower bracts. The ultimate symbol of tranquility and indoor grace.',
    featured: true
  },
  {
    id: 'aloe-vera',
    name: 'Medicinal Barbadensis Aloe',
    teluguName: 'కలబంద (అలోవెరా)',
    category: 'indoor',
    categoryLabel: 'Medicinal & Succulent',
    price: '₹99 – ₹350',
    image: 'images/aloe-vera.jpg',
    sunlight: 'Full Sun to Bright Indirect Light',
    water: 'Once a week, sandy porous soil',
    potSize: '6" to 10" Clay Pot',
    growthRate: 'Vigorous side-pup producer',
    benefits: 'Rich in cooling healing gel for skin, burns, hair; continuous nighttime oxygen generator.',
    description: 'Farm-cultivated thick succulent aloe plants nurtured organically in Kadiam soil, loaded with natural bioactive gel.',
    featured: false
  },
  {
    id: 'fern',
    name: 'Boston Sword Fern',
    teluguName: 'బోస్టన్ ఫెర్న్',
    category: 'indoor',
    categoryLabel: 'Indoor Hanging Greenery',
    price: '₹180 – ₹450',
    image: 'images/fern.jpg',
    sunlight: 'High Humidity, Dappled Shade',
    water: 'Consistent moisture, mist leaves',
    potSize: '8" Hanging Basket or Urn',
    growthRate: 'Lush cascading arch fronds',
    benefits: 'High natural air humidifier and formaldehyde filter.',
    description: 'Cascade of vibrant lime-green fronds. Perfect for hanging balcony baskets, shaded patios, and indoor waterfall perimeters.',
    featured: false
  },
  {
    id: 'mango',
    name: 'Banganapalli & Alphonso Mango',
    teluguName: 'బంగినపల్లి మామిడి చెట్టు',
    category: 'fruit',
    categoryLabel: 'Grafted Fruit Tree',
    price: '₹250 – ₹1,800',
    image: 'images/mango.jpg',
    sunlight: 'Direct Full Sun (6+ Hours)',
    water: 'Moderate deep watering at roots',
    potSize: 'Direct Ground / 50L Drum Planter',
    growthRate: 'Fast grafted fruiting (Within 1-2 yrs)',
    benefits: 'High-yield sweet GI-tagged Andhra Banganapalli variety with fiber-free golden pulp.',
    description: 'Mother-plant grafted mango saplings prepared by traditional Kadiam horticulturists for high yield and sweet aromatic fruits.',
    featured: true
  },
  {
    id: 'dragon-fruit',
    name: 'Red Velvet Dragon Fruit (Pitaya)',
    teluguName: 'డ్రాగన్ ఫ్రూట్ మొక్క',
    category: 'fruit',
    categoryLabel: 'Exotic Fruit Variety',
    price: '₹120 – ₹450',
    image: 'images/dragon-fruit.jpg',
    sunlight: 'Abundant Hot Sunlight',
    water: 'Low water (Cactus family, drought proof)',
    potSize: 'RCC Pole support with Ring',
    growthRate: 'Rapid climbing succulent',
    benefits: 'High antioxidant superfood fruit with rich crimson sweet flesh and high market value.',
    description: 'High-fruiting hybrid varieties with heavy flowering. Suitable for rooftop terraces, small farm orchards, and commercial cultivation.',
    featured: true
  },
  {
    id: 'star-fruit',
    name: 'Sweet Star Fruit (Averrhoa carambola)',
    teluguName: 'కారంబోలా (స్టార్ ఫ్రూట్)',
    category: 'fruit',
    categoryLabel: 'Grafted Fruit Tree',
    price: '₹280 – ₹750',
    image: 'images/star-fruit.jpg',
    sunlight: 'Full Sun to Moderate Sun',
    water: 'Keep root zone evenly moist',
    potSize: 'Large 18" Terra-Cotta or Ground',
    growthRate: 'Compact bushy tree, heavy bearer',
    benefits: 'Crisp star-shaped juicy fruits high in Vitamin C, potassium, and antioxidants.',
    description: 'Ornamental and fruiting combination tree! Blossoms with delicate pink flowers and produces clusters of golden star fruits all season.',
    featured: false
  },
  {
    id: 'custard-apple',
    name: 'Balanagar Custard Apple (Sitaphal)',
    teluguName: 'బాలానగర్ సీతాఫలం',
    category: 'fruit',
    categoryLabel: 'Hardy Fruit Tree',
    price: '₹180 – ₹550',
    image: 'images/custard-apple.jpg',
    sunlight: 'Harsh Direct Sun (Thrives anywhere)',
    water: 'Low water requirement, drought hardy',
    potSize: 'Ground / Large Root Bag',
    growthRate: 'Moderate hardy growth',
    benefits: 'Extra-large creamy sweet segments with small seed ratio; natural wild pest resistance.',
    description: 'Selected Balanagar & NMK-1 hybrid varieties guaranteeing prolific yields even in challenging soils and dry summers.',
    featured: false
  },
  {
    id: 'amla',
    name: 'NA-7 Grafted Giant Amla',
    teluguName: 'ఉసిరి చెట్టు (లక్ష్మీ ఉసిరి)',
    category: 'fruit',
    categoryLabel: 'Medicinal Fruit Tree',
    price: '₹150 – ₹480',
    image: 'images/amla.jpg',
    sunlight: 'Full Open Sun',
    water: 'Moderate, very hardy',
    potSize: 'Direct Garden Planting',
    growthRate: 'Fast branching tree',
    benefits: 'Rich source of natural Vitamin C; sacred and auspicious plant for Indian courtyard gardens.',
    description: 'High-potency medicinal gooseberry with juicy, non-bitter flesh. Highly valued for holistic wellness and traditional ceremonies.',
    featured: false
  },
  {
    id: 'coconut',
    name: 'Godavari Ganga Bondam Hybrid Coconut',
    teluguName: 'గంగా బొండం కొబ్బరి మొక్క',
    category: 'fruit',
    categoryLabel: 'Commercial Fruit Palm',
    price: '₹220 – ₹600',
    image: 'images/coconut.jpg',
    sunlight: 'Full Sun (Tropical)',
    water: 'Deep watering with organic mulch',
    potSize: 'Direct Soil / Farm Border',
    growthRate: 'Dwarf to semi-tall, yields in 3.5 yrs',
    benefits: 'Produces 200+ sweet tender water coconuts annually per palm; sturdy hurricane-resistant trunk.',
    description: 'Authentic East Godavari seedling palms known throughout South India for rapid maturity and high water volume.',
    featured: false
  },
  {
    id: 'bonsai-1',
    name: 'Imperial Ficus Bonsai (Formal Upright)',
    teluguName: 'బోన్సాయ్ ఫైకస్ వృక్షం (10 సం॥ల కళ)',
    category: 'bonsai',
    categoryLabel: 'Master Bonsai Collection',
    price: '₹1,800 – ₹15,000',
    image: 'images/bonsai-1.jpg',
    sunlight: 'Morning Sun or Bright Veranda Light',
    water: 'When top soil dries; mist aerial roots',
    potSize: 'Glazed Japanese Ceramic Bonsai Tray',
    growthRate: 'Disciplined artistic growth',
    benefits: 'Symbol of longevity, wisdom, and inner balance in Feng Shui and Vastu Shastra.',
    description: 'Sculpted patiently over 10-15 years by Kadiam bonsai masters. Showcases dense miniature leaf canopy and muscular aerial root buttresses.',
    featured: true
  },
  {
    id: 'bonsai-2',
    name: 'Cascading Twin-Trunk Bonsai',
    teluguName: 'ట్విన్ ట్రంక్ ఆర్టిస్టిక్ బోన్సాయ్',
    category: 'bonsai',
    categoryLabel: 'Master Bonsai Collection',
    price: '₹2,500 – ₹22,000',
    image: 'images/bonsai-2.jpg',
    sunlight: 'Filtered Sunlight 3-4 hrs daily',
    water: 'Moist gravel tray technique',
    potSize: 'Hand-carved Stone Planter',
    growthRate: 'Slow architectural refinement',
    benefits: 'Centerpiece conversation art piece for luxury villa entrances and executive boardrooms.',
    description: 'A harmonious dual-trunk composition capturing the windswept drama of mountain crags, wired and pruned to perfection.',
    featured: false
  },
  {
    id: 'bonsai-3',
    name: 'Banyan Root-Over-Rock Bonsai',
    teluguName: 'మర్రి చెట్టు బోన్సాయ్ (రాతిపై వేర్లు)',
    category: 'bonsai',
    categoryLabel: 'Master Bonsai Collection',
    price: '₹3,500 – ₹35,000',
    image: 'images/bonsai-3.jpg',
    sunlight: 'Bright Open Air / Sunny Balcony',
    water: 'Regular root hydration',
    potSize: 'Heavy Terracotta Shallow Basin',
    growthRate: 'Thickening muscular root structure',
    benefits: 'Recreates the majestic Indian sacred banyan tree in miniature living sculpture.',
    description: 'Aerial prop roots clasping natural river stone from the Godavari basin. Truly an heirloom living sculpture that increases in beauty each decade.',
    featured: true
  },
  {
    id: 'bonsai-8',
    name: 'Desert Rose Adenium Bonsai',
    teluguName: 'ఎడేనియం బోన్సాయ్ (ఎడారి గులాబీ)',
    category: 'bonsai',
    categoryLabel: 'Master Bonsai Collection',
    price: '₹750 – ₹6,500',
    image: 'images/bonsai-8.jpg',
    sunlight: 'Blazing Direct Sunlight',
    water: 'Sparse (Bulbous caudex retains water)',
    potSize: 'Wide Shallow Ceramic Tray',
    growthRate: 'Chubby trunk with vibrant flushes',
    benefits: 'Massive swollen caudex reminiscent of ancient baobabs; blooms explosive pink, red & dual-tone flowers.',
    description: 'Tough as nails and stunningly photogenic! Requires virtually zero pampering and rewards you with months of nonstop blossoms.',
    featured: false
  },
  {
    id: 'flower-royal',
    name: 'Exotic Hybrid Flowering Bougainvillea & Hibiscus',
    teluguName: 'కడియం రంగుల మందార మరియు కాగితపు పూల మొక్కలు',
    category: 'flowering',
    categoryLabel: 'Flowering & Ornamentals',
    price: '₹120 – ₹450',
    image: 'images/flower.jpg',
    sunlight: 'Full Sun (6+ Hours)',
    water: 'Water when soil dries slightly',
    potSize: '10" to 14" Planter or Hedge',
    growthRate: 'Prolific year-round blooming',
    benefits: 'Breathtaking vivid colors, attracts native butterflies and honeybees to garden ecosystems.',
    description: 'World-famous Kadiam flowering hybrids. Cultivated with specialized grafting techniques producing vibrant multicolored blooms on single branches.',
    featured: true
  }
];

// ==========================================
// 2. DOM INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initLeafCanvas();
  renderPlants('all');
  initCategoryFilters();
  initSearch();
  initPlantMatcher();
  initBeforeAfterSlider();
  initBulkCalculator();
  initScrollAnimations();
  initCounterObserver();
  initContactForm();
  initNatureAudio();
  initScrollProgress();
  initMobileMenu();
});

// ==========================================
// 3. BOTANICAL LEAF PARTICLE CANVAS ENGINE
// ==========================================
function initLeafCanvas() {
  const canvas = document.getElementById('heroLeafCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let leaves = [];
  const leafCount = window.innerWidth < 768 ? 16 : 28;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Leaf {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -30;
      this.size = 10 + Math.random() * 18;
      this.speedY = 0.6 + Math.random() * 1.4;
      this.speedX = -0.5 + Math.random() * 1.0;
      this.angle = Math.random() * Math.PI * 2;
      this.spin = -0.02 + Math.random() * 0.04;
      this.oscillationSpeed = 0.02 + Math.random() * 0.03;
      this.oscillationOffset = Math.random() * Math.PI * 2;
      this.opacity = 0.25 + Math.random() * 0.45;
      this.colorType = Math.random() > 0.3 ? 'green' : 'lime';
    }
    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.y * this.oscillationSpeed + this.oscillationOffset) * 0.8 + this.speedX;
      this.angle += this.spin;
      if (this.y > height + 40 || this.x < -40 || this.x > width + 40) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = this.opacity;

      // Draw leaf shape
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.bezierCurveTo(this.size * 0.7, -this.size * 0.5, this.size * 0.7, this.size * 0.5, 0, this.size);
      ctx.bezierCurveTo(-this.size * 0.7, this.size * 0.5, -this.size * 0.7, -this.size * 0.5, 0, -this.size);

      if (this.colorType === 'green') {
        const grad = ctx.createLinearGradient(0, -this.size, 0, this.size);
        grad.addColorStop(0, '#34d399');
        grad.addColorStop(1, '#059669');
        ctx.fillStyle = grad;
      } else {
        const grad = ctx.createLinearGradient(0, -this.size, 0, this.size);
        grad.addColorStop(0, '#fef08a');
        grad.addColorStop(1, '#84cc16');
        ctx.fillStyle = grad;
      }

      ctx.fill();

      // Delicate center vein
      ctx.beginPath();
      ctx.moveTo(0, -this.size * 0.8);
      ctx.lineTo(0, this.size * 0.8);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    }
  }

  for (let i = 0; i < leafCount; i++) {
    leaves.push(new Leaf());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    for (let leaf of leaves) {
      leaf.update();
      leaf.draw();
    }
    requestAnimationFrame(loop);
  }
  loop();
}

// ==========================================
// 4. PLANT CATALOG RENDERER & SEARCH
// ==========================================
function renderPlants(filter = 'all', searchQuery = '') {
  const container = document.getElementById('plantsGrid');
  if (!container) return;

  let filtered = PLANTS_DATA;
  if (filter !== 'all') {
    filtered = filtered.filter(p => p.category === filter);
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.teluguName.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-20 h-20 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mb-4">
          <i class="fa-solid fa-seedling"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-800">No plant varieties found matching "${searchQuery}"</h3>
        <p class="text-gray-500 mt-2 max-w-md mx-auto">We have over 1,500+ unlisted varieties directly at our Kadiyapulanka nursery yard. Contact us directly!</p>
        <button onclick="document.getElementById('searchInput').value=''; renderPlants('all');" class="mt-5 btn-primary text-sm">
          Reset Filter & View All
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(plant => `
    <div class="plant-card bg-white rounded-3xl border border-emerald-100/80 overflow-hidden shadow-sm flex flex-col group">
      <!-- Image Container -->
      <div class="relative h-64 overflow-hidden bg-gray-100 cursor-pointer" onclick="openPlantModal('${plant.id}')">
        <img src="${plant.image}" alt="${plant.name}" class="img-zoom w-full h-full object-cover" onerror="this.src='https://srisainathnursery.com/logo.png'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
        
        <!-- Category Badge -->
        <span class="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
          <i class="fa-solid fa-leaf text-emerald-600 text-[10px]"></i>
          ${plant.categoryLabel}
        </span>

        <!-- Quick View Hover Icon -->
        <button class="absolute top-4 right-4 w-10 h-10 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-emerald-700" title="Quick Dossier">
          <i class="fa-solid fa-eye text-sm"></i>
        </button>

        <div class="absolute bottom-3 left-4 right-4 text-white">
          <span class="text-xs text-emerald-300 font-medium">${plant.sunlight}</span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-2">
            <div>
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">${plant.name}</h3>
              <p class="text-xs font-semibold text-emerald-600/90 mt-0.5">${plant.teluguName}</p>
            </div>
            <span class="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap">
              ${plant.price}
            </span>
          </div>

          <p class="text-sm text-gray-600 mt-3 line-clamp-2 leading-relaxed">
            ${plant.description}
          </p>

          <!-- Specs pill row -->
          <div class="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-gray-100 text-xs text-gray-600">
            <div class="flex items-center gap-1.5 truncate">
              <i class="fa-solid fa-droplet text-blue-500 shrink-0"></i>
              <span class="truncate">${plant.water.split('(')[0]}</span>
            </div>
            <div class="flex items-center gap-1.5 truncate">
              <i class="fa-solid fa-certificate text-amber-500 shrink-0"></i>
              <span>Acclimatized</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-6 flex items-center gap-2 pt-2">
          <button onclick="openPlantModal('${plant.id}')" class="flex-1 py-2.5 px-3 rounded-xl border border-emerald-300 text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-circle-info"></i> Care Info
          </button>
          <a href="https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20am%20interested%20in%20ordering%20*${encodeURIComponent(plant.name)}*%20(${encodeURIComponent(plant.categoryLabel)}).%20Please%20share%20current%20photos%20and%20pricing." target="_blank" class="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm">
            <i class="fa-brands fa-whatsapp text-sm"></i> Enquire
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function initCategoryFilters() {
  const buttons = document.querySelectorAll('.cat-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      const searchVal = document.getElementById('searchInput')?.value || '';
      renderPlants(cat, searchVal);
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  searchInput.addEventListener('input', (e) => {
    const activeBtn = document.querySelector('.cat-btn.active');
    const cat = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
    renderPlants(cat, e.target.value);
  });
}

// ==========================================
// 5. INTERACTIVE PLANT DETAIL MODAL
// ==========================================
function openPlantModal(plantId) {
  const plant = PLANTS_DATA.find(p => p.id === plantId);
  if (!plant) return;

  const modal = document.getElementById('plantModal');
  const modalBody = document.getElementById('modalContent');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="relative grid md:grid-cols-2 gap-8 p-6 md:p-8">
      <!-- Plant Image & Status -->
      <div class="relative rounded-2xl overflow-hidden bg-gray-100 max-h-[380px] md:max-h-full">
        <img src="${plant.image}" alt="${plant.name}" class="w-full h-full object-cover min-h-[300px]">
        <span class="absolute top-4 left-4 bg-emerald-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md">
          ${plant.categoryLabel}
        </span>
        <div class="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/50 text-xs">
          <p class="font-bold text-gray-900 flex items-center gap-1.5">
            <i class="fa-solid fa-location-dot text-emerald-600"></i> Fresh Stock at Kadiyapulanka Nursery
          </p>
        </div>
      </div>

      <!-- Dossier Details -->
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between">
            <div>
              <span class="text-xs font-bold tracking-wider text-emerald-600 uppercase">Botanical Dossier</span>
              <h2 class="text-2xl md:text-3xl font-black text-gray-900 mt-1">${plant.name}</h2>
              <p class="text-sm font-semibold text-emerald-700">${plant.teluguName}</p>
            </div>
            <button onclick="closePlantModal()" class="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <p class="text-gray-600 text-sm mt-4 leading-relaxed">
            ${plant.description}
          </p>

          <!-- Botanical Spec Table -->
          <div class="mt-5 space-y-2.5 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100 text-xs">
            <div class="flex items-center justify-between pb-2 border-b border-emerald-100/60">
              <span class="font-bold text-gray-700 flex items-center gap-1.5">
                <i class="fa-solid fa-sun text-amber-500"></i> Sunlight Requirement:
              </span>
              <span class="text-gray-900 font-semibold">${plant.sunlight}</span>
            </div>
            <div class="flex items-center justify-between pb-2 border-b border-emerald-100/60">
              <span class="font-bold text-gray-700 flex items-center gap-1.5">
                <i class="fa-solid fa-droplet text-blue-500"></i> Watering Cycle:
              </span>
              <span class="text-gray-900 font-semibold">${plant.water}</span>
            </div>
            <div class="flex items-center justify-between pb-2 border-b border-emerald-100/60">
              <span class="font-bold text-gray-700 flex items-center gap-1.5">
                <i class="fa-solid fa-mountain text-amber-700"></i> Recommended Pot / Space:
              </span>
              <span class="text-gray-900 font-semibold">${plant.potSize}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="font-bold text-gray-700 flex items-center gap-1.5">
                <i class="fa-solid fa-shield-heart text-rose-500"></i> Nursery Heritage:
              </span>
              <span class="text-emerald-800 font-semibold">100% Acclimatized Godavari Soil</span>
            </div>
          </div>

          <!-- Highlight Benefit -->
          <div class="mt-4 p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-600 mt-0.5 text-sm"></i>
            <p><strong>Nursery Specialist Note:</strong> ${plant.benefits}</p>
          </div>
        </div>

        <!-- Action Callout in Modal -->
        <div class="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20am%20interested%20in%20inquiring%20about%20*${encodeURIComponent(plant.name)}*%20(${encodeURIComponent(plant.price)}).%20Can%20you%20send%20live%20photos%20and%20delivery%20details%3F" target="_blank" class="btn-primary text-xs flex-1 text-center">
            <i class="fa-brands fa-whatsapp text-sm"></i> Request Live Photos via WhatsApp
          </a>
          <a href="tel:+919440421579" class="py-3 px-5 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold text-xs text-center transition flex items-center justify-center gap-2">
            <i class="fa-solid fa-phone"></i> Call Plant Expert
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('.modal-content').classList.remove('scale-95');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closePlantModal() {
  const modal = document.getElementById('plantModal');
  if (!modal) return;
  modal.classList.add('opacity-0');
  modal.querySelector('.modal-content').classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 300);
}

// ==========================================
// 6. SMART PLANT MATCHER (AI QUIZ ENGINE)
// ==========================================
function initPlantMatcher() {
  const form = document.getElementById('plantMatcherForm');
  const resultCard = document.getElementById('matcherResult');
  if (!form || !resultCard) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const space = form.querySelector('input[name="space"]:checked')?.value || 'balcony';
    const light = form.querySelector('input[name="light"]:checked')?.value || 'indirect';
    const goal = form.querySelector('input[name="goal"]:checked')?.value || 'purify';

    let recommendations = [];
    if (space === 'indoor' || light === 'low') {
      recommendations = PLANTS_DATA.filter(p => p.category === 'indoor').slice(0, 3);
    } else if (space === 'farm' || goal === 'fruits') {
      recommendations = PLANTS_DATA.filter(p => p.category === 'fruit').slice(0, 3);
    } else if (goal === 'luxury' || space === 'villa') {
      recommendations = PLANTS_DATA.filter(p => p.category === 'bonsai' || p.id === 'monstera').slice(0, 3);
    } else {
      recommendations = PLANTS_DATA.filter(p => p.featured).slice(0, 3);
    }

    resultCard.innerHTML = `
      <div class="p-6 md:p-8 bg-emerald-950 text-white rounded-3xl border border-emerald-600/40 shadow-2xl animate-fade-in">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl border border-emerald-500/30">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold">Your Custom Green Sanctuary Match</h3>
            <p class="text-xs text-emerald-300">Curated based on: ${space.toUpperCase()} • ${light.toUpperCase()} LIGHT • ${goal.toUpperCase()}</p>
          </div>
        </div>

        <div class="grid sm:grid-cols-3 gap-4">
          ${recommendations.map(r => `
            <div class="bg-emerald-900/40 rounded-2xl p-4 border border-emerald-800/60 flex flex-col justify-between">
              <div class="h-32 rounded-xl overflow-hidden mb-3 bg-emerald-950">
                <img src="${r.image}" alt="${r.name}" class="w-full h-full object-cover">
              </div>
              <h4 class="font-bold text-white text-sm">${r.name}</h4>
              <p class="text-xs text-emerald-300/80 mb-3">${r.sunlight}</p>
              <button onclick="openPlantModal('${r.id}')" class="w-full py-1.5 px-2 bg-emerald-600/60 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition">
                View Dossier
              </button>
            </div>
          `).join('')}
        </div>

        <div class="mt-6 pt-5 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-emerald-200">
            Want these delivered to your doorstep or loaded into your project transport?
          </p>
          <a href="https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20used%20your%20Smart%20Plant%20Matcher%20for%20my%20${space}%20and%20would%20like%20to%20order%20the%20recommended%20varieties!" target="_blank" class="btn-primary text-xs whitespace-nowrap">
            <i class="fa-brands fa-whatsapp"></i> Order This Recommendation Bundle
          </a>
        </div>
      </div>
    `;
    resultCard.classList.remove('hidden');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

// ==========================================
// 7. INTERACTIVE BEFORE & AFTER SLIDER
// ==========================================
function initBeforeAfterSlider() {
  const container = document.querySelector('.ba-container');
  if (!container) return;
  const beforeDiv = container.querySelector('.ba-before');
  const handle = container.querySelector('.ba-handle');
  let isDragging = false;

  function move(e) {
    if (!isDragging) return;
    const rect = container.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let pos = clientX - rect.left;
    if (pos < 30) pos = 30;
    if (pos > rect.width - 30) pos = rect.width - 30;
    const percentage = (pos / rect.width) * 100;

    beforeDiv.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  container.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', move);

  container.addEventListener('touchstart', () => isDragging = true);
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', move);
}

// ==========================================
// 8. WHOLESALE & BULK DIRECT ESTIMATOR
// ==========================================
function initBulkCalculator() {
  const slider = document.getElementById('bulkSlider');
  const countDisplay = document.getElementById('bulkCount');
  const truckDisplay = document.getElementById('bulkTruck');
  const discountDisplay = document.getElementById('bulkDiscount');
  const bulkWhatsAppBtn = document.getElementById('bulkWhatsAppBtn');
  if (!slider) return;

  function update() {
    const qty = parseInt(slider.value, 10);
    countDisplay.textContent = `${qty.toLocaleString()} Plants`;

    let truck = 'Mini Pickup (Tata Ace / Bolero Camper)';
    let discount = '15% Wholesale Farmgate Discount';

    if (qty >= 500 && qty < 1500) {
      truck = '14-Foot Eicher Truck (Covered Aerated)';
      discount = '25% Direct Kadiam Nursery Wholesale';
    } else if (qty >= 1500 && qty < 4000) {
      truck = '19-Foot / 22-Foot Dedicated Container';
      discount = '35% Farm & Villa Developer Special Rate';
    } else if (qty >= 4000) {
      truck = '32-Foot Multi-Axle Interstate Long-Haul Fleet';
      discount = '45% Maximum Bulk Landscape Direct Rate';
    }

    truckDisplay.textContent = truck;
    discountDisplay.textContent = discount;

    if (bulkWhatsAppBtn) {
      bulkWhatsAppBtn.href = `https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20we%20require%20a%20formal%20wholesale%20quotation%20for%20*${qty}%20plants*%20with%20logistics%20support%20(${encodeURIComponent(truck)}).`;
    }
  }

  slider.addEventListener('input', update);
  update();
}

// ==========================================
// 9. PROCEDURAL NATURE AUDIO SYNTHESIZER
// ==========================================
let audioCtx = null;
let isPlayingAudio = false;
let audioTimer = null;

function initNatureAudio() {
  const toggleBtn = document.getElementById('natureAudioBtn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (!isPlayingAudio) {
      startNatureAudio();
      toggleBtn.innerHTML = '<i class="fa-solid fa-volume-high text-emerald-600 animate-pulse"></i> <span class="hidden sm:inline">Nature Ambience: ON</span>';
      toggleBtn.classList.add('bg-emerald-100', 'text-emerald-900');
    } else {
      stopNatureAudio();
      toggleBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> <span class="hidden sm:inline">Nature Ambience: OFF</span>';
      toggleBtn.classList.remove('bg-emerald-100', 'text-emerald-900');
    }
    isPlayingAudio = !isPlayingAudio;
  });
}

function startNatureAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!audioCtx) audioCtx = new AudioContext();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  // Schedule realistic gentle procedural bird chirps every 3-6 seconds
  function playProceduralChirp() {
    if (!isPlayingAudio || !audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      // Pitch trajectory for bird tweet
      const startFreq = 2200 + Math.random() * 800;
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(startFreq + 600, now + 0.08);
      osc.frequency.exponentialRampToValueAtTime(startFreq - 200, now + 0.16);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch(e) {}

    const nextDelay = 2500 + Math.random() * 3500;
    audioTimer = setTimeout(playProceduralChirp, nextDelay);
  }

  playProceduralChirp();
}

function stopNatureAudio() {
  if (audioTimer) clearTimeout(audioTimer);
}

// ==========================================
// 10. SCROLL ANIMATIONS & NUMBER COUNTERS
// ==========================================
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

function initCounterObserver() {
  const counterEls = document.querySelectorAll('.stat-counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterEls.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 2000;
          const step = Math.ceil(target / (duration / 25));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.textContent = current.toLocaleString();
            }
          }, 25);
        });
      }
    });
  }, { threshold: 0.3 });

  const statSection = document.getElementById('statSection');
  if (statSection) observer.observe(statSection);
}

// ==========================================
// 11. CONTACT FORM WITH WHATSAPP DISPATCH
// ==========================================
function initContactForm() {
  const form = document.getElementById('nurseryContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || '';
    const phone = form.querySelector('[name="phone"]')?.value || '';
    const email = form.querySelector('[name="email"]')?.value || '';
    const spaceType = form.querySelector('[name="spaceType"]')?.value || 'General';
    const message = form.querySelector('[name="message"]')?.value || '';

    const whatsappMessage = `*NEW NURSERY ENQUIRY - SRI SAINATH NURSERY*%0A%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Email:* ${encodeURIComponent(email)}%0A` +
      `*Space Category:* ${encodeURIComponent(spaceType)}%0A` +
      `*Requirements:* ${encodeURIComponent(message)}`;

    // Show celebratory receipt modal
    const successModal = document.getElementById('formSuccessModal');
    if (successModal) {
      document.getElementById('receiptName').textContent = name;
      document.getElementById('receiptPhone').textContent = phone;
      document.getElementById('receiptReq').textContent = message || 'Plant consultation & nursery visit';
      document.getElementById('receiptWhatsAppLink').href = `https://wa.me/919989435886?text=${whatsappMessage}`;

      successModal.classList.remove('hidden');
      setTimeout(() => successModal.classList.remove('opacity-0'), 10);
    }

    form.reset();
  });
}

function closeSuccessModal() {
  const modal = document.getElementById('formSuccessModal');
  if (!modal) return;
  modal.classList.add('opacity-0');
  setTimeout(() => modal.classList.add('hidden'), 300);
}

// ==========================================
// 12. SCROLL PROGRESS & BACK TO TOP
// ==========================================
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgressBar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================
// 13. MOBILE MENU TOGGLE
// ==========================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('closeMobileMenu');
  const menu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-link');

  if (!toggleBtn || !menu) return;

  function openMenu() {
    menu.classList.remove('hidden');
    setTimeout(() => menu.classList.remove('translate-x-full'), 10);
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.add('translate-x-full');
    setTimeout(() => {
      menu.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  links.forEach(l => l.addEventListener('click', closeMenu));
}

