import React, { useEffect, useRef } from 'react';
import { Leaf, MessageSquare, Award, Sparkles } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let leaves = [];
    const leafCount = window.innerWidth < 768 ? 16 : 28;
    let animId;

    const resize = () => {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class LeafParticle {
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
      leaves.push(new LeafParticle());
    }

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      for (const leaf of leaves) {
        leaf.update();
        leaf.draw();
      }
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden bg-dark-forest min-h-[720px] flex items-center text-white py-16 lg:py-24">
      {/* Falling Leaf Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Atmospheric Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-lime-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Copy: Appears second on mobile, first on desktop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Growing Green. Growing Life. • Open All 7 Days</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif-lux leading-tight tracking-tight">
              Quality Plants &amp; Trees for a <span className="text-shimmer">Greener Tomorrow</span>.
            </h1>

            <p className="text-emerald-100/90 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed">
              Welcome to <strong>Sri Sainath Nursery</strong> in Kadiyapulanka — the renowned plant capital of Andhra Pradesh. Backed by <span className="text-amber-300 font-bold">30+ years of horticultural mastery</span>, we supply over 1,500+ healthy, pest-free, field-acclimatized plants for homes, villas, corporate towers, and expansive farm landscapes.
            </p>

            <p className="text-xs text-emerald-300/80 font-medium italic">
              కడియపులంక వీరవరం రోడ్ లోని ప్రముఖ మొక్కల నర్సరీ • హోల్‌సేల్ &amp; రిటైల్ మొక్కల సరఫరా
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#plants" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-900/40 transition transform hover:-translate-y-0.5 w-full sm:w-auto">
                <Leaf className="w-5 h-5 text-lime-300" /> Explore Plant Collection
              </a>
              <a href="https://wa.me/919989435886?text=Hello%20Sri%20Sainath%20Nursery%2C%20I%20am%20looking%20for%20plants%20for%20my%20garden." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-amber-400/80 bg-amber-400/10 hover:bg-amber-400 hover:text-emerald-950 text-amber-200 font-bold text-base transition backdrop-blur-md w-full sm:w-auto">
                <MessageSquare className="w-5 h-5" /> Direct WhatsApp Inquiry
              </a>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-center max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-xs text-emerald-300/80">Heritage</p>
                <p className="text-lg sm:text-xl font-black text-white">30+ Years</p>
              </div>
              <div>
                <p className="text-xs text-emerald-300/80">Varieties</p>
                <p className="text-lg sm:text-xl font-black text-white">1,500+ Types</p>
              </div>
              <div>
                <p className="text-xs text-emerald-300/80">Hub Location</p>
                <p className="text-lg sm:text-xl font-black text-white">Kadiyapulanka</p>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card: Appears FIRST on mobile (పైన), and on the right for desktop */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 w-full">
            <div className="relative w-full max-w-md">
              
              <div className="absolute -top-6 -right-4 z-30 glass-panel p-4 rounded-2xl shadow-xl border border-white/40 animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">Acclimatized</span>
                    <span className="text-xs font-extrabold text-gray-900">100% Root Integrity</span>
                  </div>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden glass-dark p-3.5 sm:p-4 shadow-2xl border border-white/20">
                <div className="relative h-72 sm:h-96 lg:h-[440px] rounded-2xl overflow-hidden bg-forest-dark">
                  <img
                    src="/images/hero-bg.jpg"
                    alt="Sri Sainath Nursery Kadiyapulanka"
                    fetchpriority="high"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-[10px] font-extrabold uppercase tracking-wider">
                      Kadiam Botanical Sanctuary
                    </span>
                    <h3 className="text-xl font-bold mt-2">Nurtured with fertile Godavari Silt</h3>
                    <p className="text-xs text-emerald-200/90 mt-1">
                      Every sapling is nurtured to ensure zero transplant shock and maximum longevity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 z-30 glass-panel p-3.5 rounded-2xl shadow-xl border border-white/40 hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-gray-800">Visit Nursery &amp; Walk Through</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

