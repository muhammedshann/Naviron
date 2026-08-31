import React from 'react';
import { services } from '../data/content';
import ProjectEstimator from '../components/ProjectEstimator';
import CTABanner from '../components/CTABanner';
import { Building2, Wrench, ShieldCheck, Truck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

const iconMap = {
  Building2,
  Wrench,
  ShieldCheck,
  Truck
};

export default function Services({ onNavigate }) {
  return (
    <div className="pt-28 pb-16">
      
      {/* Page Header */}
      <section className="py-16 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-teal/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-4">
            Capabilities &amp; Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Engineered for Precision, Built for Scale
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Explore our comprehensive range of innovative solutions, designed to elevate the standards of construction and maintenance for Qatari businesses and residences.
          </p>
        </div>
      </section>

      {/* Deep-Dive Alternating Service Blocks */}
      <section className="py-12 relative z-10 space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((svc, index) => {
            const Icon = iconMap[svc.icon] || Building2;
            const isEven = index % 2 === 1;

            return (
              <div
                key={svc.id}
                id={svc.id}
                className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-white/10 glow-card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-teal/20 border border-brand-teal/40 flex items-center justify-center text-brand-cyan">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                        {svc.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                      {svc.title}
                    </h2>
                    <p className="text-sm font-semibold text-brand-cyan mb-4">
                      {svc.subtitle}
                    </p>
                    <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
                      {svc.description}
                    </p>

                    {/* Feature Points */}
                    <div className="space-y-3 mb-8">
                      {svc.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                          <span className="text-sm text-slate-200">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={`https://wa.me/97450909707?text=Hello%20Naviron,%20I%20am%20interested%20in%20consulting%20on%20${encodeURIComponent(
                          svc.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Direct WhatsApp Inquiry</span>
                      </a>

                      <button
                        onClick={() => onNavigate('contact')}
                        className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider glass-panel text-white hover:bg-white/10 border border-white/20 transition-all"
                      >
                        <span>Schedule Review</span>
                        <ArrowRight className="w-4 h-4 text-brand-cyan" />
                      </button>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[360px] sm:h-[440px] group border border-white/10">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/15">
                        <span className="text-xs font-bold text-brand-cyan block">Division 0{index + 1}</span>
                        <span className="text-sm font-semibold text-white">{svc.title} &bull; Qatar</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Project Estimator Tool */}
      <ProjectEstimator />

      {/* Bottom CTA Banner */}
      <CTABanner onNavigate={onNavigate} />

    </div>
  );
}
