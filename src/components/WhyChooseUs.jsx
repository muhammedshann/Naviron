import React from 'react';
import { valuePillars } from '../data/content';
import { Award, Zap, CheckCircle2, HeartHandshake } from 'lucide-react';

const iconMap = {
  Award,
  Zap,
  CheckCircle: CheckCircle2,
  Users: HeartHandshake
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-4">
            The Naviron Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Why Choose Naviron as Your Strategic Partner?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Rooted in over 20 years of proven industry reputation, combining trusted methods with tomorrow's construction technologies.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl glow-card hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-teal/20 to-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-cyan/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-brand-cyan">Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
