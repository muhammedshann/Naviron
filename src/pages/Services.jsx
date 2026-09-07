import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { services, companyInfo } from '../data/content';
import CTABanner from '../components/CTABanner';
import { Building2, Trees, Zap, Wrench, CheckCircle2, MessageSquare, ArrowRight, ChevronDown, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  Building2,
  Trees,
  Zap,
  Wrench
};

export default function Services({ onNavigate }) {
  const whatsappBaseUrl = companyInfo.phones[0].whatsappHref;
  const [expandedSubCategory, setExpandedSubCategory] = useState({});

  const toggleSubCategory = (divisionId, subTitle) => {
    const key = `${divisionId}-${subTitle}`;
    setExpandedSubCategory((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
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
              A complete visual layout of our core contracting and maintenance scope across Qatar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((svc, idx) => {
              const Icon = iconMap[svc.icon] || Building2;
              return (
                <a
                  key={svc.id}
                  href={`#${svc.id}`}
                  className="p-5 rounded-2xl bg-[#F3F5F2] border border-fir/10 hover:border-lfgreen/50 hover:bg-white transition-all duration-300 group shadow-sm flex flex-col justify-between"
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
                    <span>{svc.subDivisions ? svc.subDivisions.length : 0} Scope Areas</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lfgreen-dark group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Alternating Service Division Cards */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((svc, index) => {
            const Icon = iconMap[svc.icon] || Building2;
            const isDark = index % 2 === 1;
            const topOffset = 90 + (index * 24);

            return (
              <div
                key={svc.id}
                id={svc.id}
                style={{ top: `${topOffset}px`, zIndex: 10 + index }}
                className={`sticky shadow-[0_-8px_30px_rgba(0,0,0,0.12)] mb-8 sm:mb-10 last:mb-0 rounded-3xl p-6 sm:p-10 lg:p-12 border transform-gpu will-change-transform ${
                  isDark
                    ? 'bg-fir text-white border-white/10'
                    : 'bg-white text-fir border-fir/10'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Text & Detailed Sub-Divisions Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isDark
                          ? 'bg-lfgreen/20 border border-lfgreen/30 text-lfgreen'
                          : 'bg-lfgreen/15 border border-lfgreen/30 text-lfgreen-dark'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        isDark
                          ? 'bg-lfgreen/20 text-lfgreen border-lfgreen/30'
                          : 'bg-lfgreen/15 text-lfgreen-dark border-lfgreen/30'
                      }`}>
                        {svc.badge}
                      </span>
                    </div>

                    <div>
                      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold mb-2 ${
                        isDark ? 'text-white' : 'text-fir'
                      }`}>
                        {svc.title}
                      </h2>
                      <p className={`text-sm font-semibold ${
                        isDark ? 'text-lfgreen' : 'text-lfgreen-dark'
                      }`}>
                        {svc.subtitle}
                      </p>
                    </div>

                    <p className={`text-sm sm:text-base leading-relaxed font-normal ${
                      isDark ? 'text-white/70' : 'text-fir/70'
                    }`}>
                      {svc.description}
                    </p>

                    {/* Detailed Sub-Divisions Accordion / Grid */}
                    {svc.subDivisions && svc.subDivisions.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <h4 className={`text-xs font-bold uppercase tracking-wider ${
                          isDark ? 'text-white/40' : 'text-fir/40'
                        }`}>
                          Specific Works &amp; Scope Breakdown:
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {svc.subDivisions.map((sub, sIdx) => {
                            const key = `${svc.id}-${sub.title}`;
                            const isExpanded = expandedSubCategory[key] ?? true;

                            return (
                              <div
                                key={sIdx}
                                className={`p-4 rounded-2xl border transition-all ${
                                  isDark
                                    ? 'bg-white/5 border-white/10 hover:border-lfgreen/40'
                                    : 'bg-[#F3F5F2] border-fir/10 hover:border-lfgreen-dark/40'
                                }`}
                              >
                                <button
                                  onClick={() => toggleSubCategory(svc.id, sub.title)}
                                  className="w-full flex items-center justify-between text-left font-bold text-xs sm:text-sm mb-2"
                                >
                                  <span className={isDark ? 'text-white' : 'text-fir'}>{sub.title}</span>
                                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-lfgreen' : 'text-fir/40'}`} />
                                </button>

                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="flex flex-wrap gap-1.5 pt-1"
                                    >
                                      {sub.items.map((item, itemIdx) => (
                                        <span
                                          key={itemIdx}
                                          className={`text-[11px] px-2.5 py-1 rounded-lg font-medium ${
                                            isDark
                                              ? 'bg-white/10 text-white/90 border border-white/10'
                                              : 'bg-white text-fir/80 border border-fir/10 shadow-2xs'
                                          }`}
                                        >
                                          {item}
                                        </span>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <a
                        href={`${whatsappBaseUrl}?text=Hello%20Naviron,%20I%20am%20interested%20in%20consulting%20on%20${encodeURIComponent(
                          svc.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 rounded-[14px] text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                          isDark
                            ? 'bg-lfgreen text-fir hover:shadow-[_-3px_3px_0_0_#84CC16]'
                            : 'bg-fir text-white hover:shadow-[_-3px_3px_0_0_#163D2F]'
                        }`}
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Direct WhatsApp Inquiry</span>
                      </a>

                      <button
                        onClick={() => onNavigate('contact')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-[14px] text-xs sm:text-sm font-semibold border-2 transition-all duration-200 hover:-translate-y-0.5 ${
                          isDark
                            ? 'border-white/20 text-white hover:bg-white/10'
                            : 'border-fir/20 text-fir hover:border-fir'
                        }`}
                      >
                        <span>Request Official Proposal</span>
                        <ArrowRight className={`w-4 h-4 ${isDark ? 'text-lfgreen' : 'text-lfgreen-dark'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Visual Image Column */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[420px] group border border-fir/10">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-fir/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-md">
                        <span className="text-[11px] font-bold text-lfgreen-dark uppercase tracking-wider block">Division Focus</span>
                        <span className="text-xs sm:text-sm font-bold text-fir">{svc.subtitle}</span>
                      </div>
                    </div>

                    {/* Highlights Card */}
                    <div className={`p-5 rounded-2xl border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-[#F3F5F2] border-fir/10'
                    }`}>
                      <span className={`text-[11px] font-bold uppercase tracking-wider block mb-3 ${
                        isDark ? 'text-lfgreen' : 'text-lfgreen-dark'
                      }`}>
                        Division Highlights:
                      </span>
                      <div className="space-y-2">
                        {svc.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isDark ? 'text-lfgreen' : 'text-lfgreen-dark'
                            }`} />
                            <span className={isDark ? 'text-white/80' : 'text-fir/80'}>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
