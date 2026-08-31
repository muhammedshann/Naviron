import React from 'react';
import StatsSection from '../components/StatsSection';
import CTABanner from '../components/CTABanner';
import { companyInfo } from '../data/content';
import { ShieldCheck, Target, Sparkles, Building, ArrowRight, HeartHandshake } from 'lucide-react';

export default function About({ onNavigate }) {
  return (
    <div className="pt-28 pb-16">
      
      {/* Page Header Banner */}
      <section className="py-16 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-teal/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-4">
            About Naviron
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Pioneering Engineering &amp; Strategic Trading
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Discover how Naviron combines innovative solutions and a legacy of reliability to serve Qatari businesses and households effectively.
          </p>
        </div>
      </section>

      {/* 1. Our Mission Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-brand-teal/30 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px] sm:h-[440px] group">
                <img
                  src="/assets/images/pexels-photo-10546989.jpeg"
                  alt="Our Mission"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10">
                  <span className="text-xs font-bold text-brand-cyan block">Strategic Focus</span>
                  <span className="text-sm font-semibold text-white">Empowering Qatari Progress &amp; Infrastructure</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full text-xs font-bold text-brand-cyan mb-4">
                <Target className="w-3.5 h-3.5" />
                <span>Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                Empowering Qatari Progress
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
                {companyInfo.mission}
              </p>
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <span>
                  Every milestone is aligned with Qatar National Vision 2030, delivering sustainable durability and technological excellence.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Interactive Animated Stats */}
      <StatsSection />

      {/* 3. Our Approach Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-glow rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto border border-brand-teal/40">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-teal/20 border border-brand-teal/30 rounded-full text-xs font-bold text-brand-cyan mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Commitment to Excellence
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {companyInfo.approach}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Story Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full text-xs font-bold text-brand-cyan mb-4">
                <Building className="w-3.5 h-3.5" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                Rooted in Legacy, Driven by Innovation
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
                {companyInfo.story}
              </p>
              
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-teal to-brand-cyan text-brand-dark hover:from-white hover:to-brand-cyan transition-all hover:scale-105 shadow-lg shadow-brand-teal/20"
              >
                <span>Connect With Our Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px] sm:h-[440px] group">
                <img
                  src="/assets/images/pexels-photo-31732877.jpeg"
                  alt="Our Story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10">
                  <span className="text-xs font-bold text-brand-cyan block">Ainsnan Family</span>
                  <span className="text-sm font-semibold text-white">Over Two Decades of Uncompromised Trust</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CTABanner onNavigate={onNavigate} />

    </div>
  );
}
