import React from 'react';
import PageHeader from '../components/PageHeader';
import { services, companyInfo } from '../data/content';
import CTABanner from '../components/CTABanner';
import { Building2, Trees, Zap, Wrench, CheckCircle2, MessageSquare, ArrowRight, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Building2,
  Trees,
  Zap,
  Wrench
};

export default function Services({ onNavigate }) {
  const whatsappBaseUrl = companyInfo.phones[0].whatsappHref;

  const scrollToCard = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 sm:pt-24 bg-[#F8FAF7]">
      {/* 1. Page Header */}
      <PageHeader
        badge="Integrated Service Divisions"
        title="Integrated Contracting &"
        highlightedTitle="Facility Solutions"
        subtitle="Explore our major divisions: Fit-Out & Construction, Landscaping & Irrigation, MEP Engineering, and Preventive & Corrective Maintenance."
      />

      {/* 2. Visual Service Map Overview */}
      <section className="py-10 bg-white border-y border-fir/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-lfgreen/15 text-lfgreen-dark text-xs font-bold border border-lfgreen/30 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Visual Service Map</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-fir">
              Integrated Service Divisions
            </h2>
            <p className="text-xs sm:text-sm text-fir/60 mt-2">
              Select any division below to jump directly to its complete scope breakdown and details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((svc, idx) => {
              const Icon = iconMap[svc.icon] || Building2;
              return (
                <button
                  key={svc.id}
                  onClick={() => scrollToCard(svc.id)}
                  className="p-5 rounded-2xl bg-[#F3F5F2] border border-fir/10 hover:border-lfgreen/50 hover:bg-white transition-all duration-300 group shadow-sm flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-lfgreen/20 text-lfgreen-dark">
                        {svc.badge}
                      </span>
                      <Icon className="w-5 h-5 text-fir/60 group-hover:text-lfgreen-dark transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-fir group-hover:text-lfgreen-dark transition-colors mb-1">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-fir/60 line-clamp-2 leading-relaxed">
                      {svc.subtitle}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-fir/5 flex items-center justify-between text-xs font-bold text-fir/40 group-hover:text-fir">
                    <span>0{idx + 1} / 0{services.length} Division</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lfgreen-dark group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Stacking Service Division Cards Deck Layout */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {services.map((svc, index) => {
              const Icon = iconMap[svc.icon] || Building2;

              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="sticky w-full mb-20 sm:mb-28 shadow-[0_-10px_35px_rgba(0,0,0,0.08)] rounded-3xl overflow-hidden bg-white border border-fir/10 transition-all duration-500 scroll-mt-28"
                  style={{
                    top: `calc(5.5rem + ${index * 20}px)`,
                    zIndex: index + 1,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[460px]">
                    
                    {/* Content Area (Left) */}
                    <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white relative">
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-lfgreen-dark bg-lfgreen/10 px-3.5 py-1.5 rounded-full border border-lfgreen/30 inline-block">
                            {svc.badge}
                          </span>
                          <span className="text-xs font-semibold text-fir/40">
                            0{index + 1} / 0{services.length}
                          </span>
                        </div>
                        
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-fir mb-3 leading-tight">
                          {svc.title}
                        </h2>
                        
                        <p className="text-sm text-lfgreen-dark font-bold mb-3">
                          {svc.subtitle}
                        </p>

                        <p className="text-xs sm:text-sm text-fir/65 leading-relaxed mb-6 font-normal">
                          {svc.description}
                        </p>

                        {/* Key Scope Highlights */}
                        <div className="space-y-2.5 mb-6">
                          {svc.details.map((point, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-lfgreen-dark shrink-0 mt-0.5" />
                              <span className="text-xs text-fir/80 font-medium leading-snug">{point}</span>
                            </div>
                          ))}
                        </div>

                        {/* Sub-Divisions Scope Tags */}
                        {svc.subDivisions && (
                          <div className="pt-3 border-t border-fir/10 mb-6">
                            <span className="text-[11px] font-bold text-fir/40 uppercase tracking-wider block mb-2">
                              Core Scope Capabilities:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {svc.subDivisions.map((sub, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[10px] font-semibold text-fir/75 bg-[#F3F5F2] px-2.5 py-1 rounded-lg border border-fir/10"
                                >
                                  {sub.title}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-fir/10 mt-auto">
                        <a
                          href={`${whatsappBaseUrl}?text=Hello%20Naviron,%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                            svc.title
                          )}%20services.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary py-2.5 px-4 text-xs sm:text-sm"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Direct Inquiry</span>
                        </a>

                        <button
                          onClick={() => onNavigate('contact')}
                          className="btn-outline py-2.5 px-4 text-xs sm:text-sm"
                        >
                          <span>Official Proposal</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Image Area (Right) */}
                    <div className="lg:col-span-6 relative h-[260px] sm:h-[360px] lg:h-auto overflow-hidden group">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-fir/85 via-fir/30 to-transparent" />
                      
                      <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 shadow-lg">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-xl bg-lfgreen text-fir flex items-center justify-center shrink-0 shadow-md">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider block mb-0.5">Naviron Qatar</span>
                            <span className="text-xs sm:text-sm font-bold text-white leading-tight block">{svc.subtitle}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}

            {/* Bottom Scroll Spacer so all cards can scroll up and stack cleanly */}
            <div className="h-[25vh] sm:h-[35vh]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
