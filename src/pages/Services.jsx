import React from 'react';
import PageHeader from '../components/PageHeader';
import { services, companyInfo } from '../data/content';
import ProjectEstimator from '../components/ProjectEstimator';
import CTABanner from '../components/CTABanner';
import { Building2, Wrench, ShieldCheck, Truck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Building2,
  Wrench,
  ShieldCheck,
  Truck
};

export default function Services({ onNavigate }) {
  const whatsappBaseUrl = companyInfo.phones[0].whatsappHref;

  return (
    <div className="pt-20 sm:pt-24">
      {/* Page Header */}
      <PageHeader
        badge="Capabilities & Solutions"
        title="Engineered for Precision, Built for"
        highlightedTitle="Scale"
        subtitle="Explore our comprehensive range of innovative solutions, designed to elevate the standards of construction and maintenance for Qatari businesses and residences."
      />

      {/* Deep-Dive Alternating Service Blocks */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((svc, index) => {
            const Icon = iconMap[svc.icon] || Building2;
            const isEven = index % 2 === 1;
            const isDark = index % 2 === 1;
            const topOffset = 100 + (index * 24);

            return (
              <div
                key={svc.id}
                id={svc.id}
                style={{ top: `${topOffset}px`, zIndex: 10 + index }}
                className={`sticky shadow-[0_-8px_30px_rgba(0,0,0,0.12)] mb-12 sm:mb-20 last:mb-0 rounded-3xl p-8 sm:p-12 border ${
                  isDark
                    ? 'bg-fir text-white border-white/10'
                    : 'bg-sage text-fir border-fir/5'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                    <div className="flex items-center gap-3 mb-4">
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

                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-fir'
                    }`}>
                      {svc.title}
                    </h2>
                    <p className={`text-sm font-semibold mb-4 ${
                      isDark ? 'text-lfgreen' : 'text-lfgreen-dark'
                    }`}>
                      {svc.subtitle}
                    </p>
                    <p className={`text-base leading-relaxed mb-6 font-normal ${
                      isDark ? 'text-white/60' : 'text-fir/60'
                    }`}>
                      {svc.description}
                    </p>

                    {/* Feature Points */}
                    <div className="space-y-3 mb-8">
                      {svc.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-1 ${
                            isDark ? 'text-lfgreen' : 'text-lfgreen-dark'
                          }`} />
                          <span className={`text-sm ${isDark ? 'text-white/70' : 'text-fir/70'}`}>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={`${whatsappBaseUrl}?text=Hello%20Naviron,%20I%20am%20interested%20in%20consulting%20on%20${encodeURIComponent(
                          svc.title
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 rounded-[14px] text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
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
                        className={`flex items-center gap-2 px-6 py-3 rounded-[14px] text-sm font-semibold border-2 transition-all duration-200 hover:-translate-y-0.5 ${
                          isDark
                            ? 'border-white/20 text-white hover:bg-white/10'
                            : 'border-fir/20 text-fir hover:border-fir'
                        }`}
                      >
                        <span>Schedule Review</span>
                        <ArrowRight className={`w-4 h-4 ${isDark ? 'text-lfgreen' : 'text-lfgreen-dark'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl h-[360px] sm:h-[440px] group border border-fir/10">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-fir/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/50">
                        <span className="text-xs font-bold text-lfgreen-dark block">Division 0{index + 1}</span>
                        <span className="text-sm font-semibold text-fir">{svc.title} &bull; Qatar</span>
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
