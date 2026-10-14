import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Clock, Mail, MapPin } from 'lucide-react';

export default function AnnouncementBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  const toggleAudio = () => {
    if (!isPlaying) {
      startProceduralBirdsong();
      setIsPlaying(true);
    } else {
      stopProceduralBirdsong();
      setIsPlaying(false);
    }
  };

  const startProceduralBirdsong = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    const playChirp = () => {
      if (!audioCtxRef.current) return;
      try {
        const ctx = audioCtxRef.current;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        const startFreq = 2200 + Math.random() * 800;
        osc.frequency.setValueAtTime(startFreq, now);
        osc.frequency.exponentialRampToValueAtTime(startFreq + 600, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(startFreq - 200, now + 0.16);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.04, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.25);
      } catch (e) {}

      const next = 2500 + Math.random() * 3500;
      timerRef.current = setTimeout(playChirp, next);
    };

    playChirp();
  };

  const stopProceduralBirdsong = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="bg-[#031d10] text-white border-b border-emerald-500/20 py-2 px-4 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Side: Hub Location & Core Pitch */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold whitespace-nowrap shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Kadiyapulanka Hub</span>
          </div>
          <span className="text-emerald-100/85 text-xs font-medium truncate hidden sm:inline">
            Direct Farmgate Nursery • 100% Acclimatized Godavari Silt Plants • All India Delivery
          </span>
        </div>

        {/* Right Side: Ambience Sound & Utility Info */}
        <div className="flex items-center gap-3 text-xs shrink-0">
          
          {/* Nature Ambience Sound Button */}
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all shadow-sm whitespace-nowrap ${
              isPlaying
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/30 ring-1 ring-emerald-300/50'
                : 'bg-white/10 hover:bg-emerald-500/20 text-emerald-200 hover:text-white border border-white/10'
            }`}
            title="Toggle soothing nature birdsong ambience"
          >
            {isPlaying ? (
              <>
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-white rounded-full animate-soundwave-1" />
                  <span className="w-0.5 bg-white rounded-full animate-soundwave-2" />
                  <span className="w-0.5 bg-white rounded-full animate-soundwave-3" />
                </div>
                <span>Ambience: <strong className="text-white">ON</strong></span>
              </>
            ) : (
              <>
                <VolumeX className="w-3 h-3 text-emerald-300 shrink-0" />
                <span>Ambience: <strong className="text-gray-300">OFF</strong></span>
              </>
            )}
          </button>

          <span className="text-white/20 hidden md:inline">|</span>

          {/* Operating Hours */}
          <div className="hidden md:flex items-center gap-1.5 text-emerald-200/90 text-[11px] font-medium whitespace-nowrap">
            <Clock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Mon - Sun: 7 AM - 7 PM</span>
          </div>

          <span className="text-white/20 hidden lg:inline">|</span>

          {/* Email */}
          <a
            href="mailto:srisainathnursery@gmail.com"
            className="hidden lg:flex items-center gap-1.5 text-emerald-200/90 hover:text-white text-[11px] font-medium transition-colors whitespace-nowrap"
          >
            <Mail className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>srisainathnursery@gmail.com</span>
          </a>

        </div>

      </div>
    </div>
  );
}
