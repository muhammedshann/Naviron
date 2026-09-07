import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/content';
import { Building2, Trees, Zap, Wrench, ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';

const iconMap = {
  Building2,
  Trees,
  Zap,
  Wrench
};

export default function ServicesSection({ onNavigate }) {
  return (
    <section className="py-16 sm:py-24 bg-[#F3F5F2] text-fir relative z-30 border-t border-b border-fir/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-fir/10 text-xs font-semibold text-fir/70 mb-4 shadow-sm">
            Integrated Service Divisions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-fir mb-6 tracking-tight">
            Our Core Service Divisions in{' '}
            <span className="text-3d-sm">Qatar</span>
          </h2>
          <p className="text-fir/60 text-base sm:text-lg leading-relaxed font-normal">
            Specialized execution across Fit-Out &amp; Construction, Landscaping &amp; Automatic Irrigation, MEP Engineering, and Preventive &amp; Corrective Maintenance.
          </p>
        </motion.div>

        {/* Stacking Card Deck Layout */}
        <div className="relative">
          {services.map((svc, index) => {
            const Icon = iconMap[svc.icon] || Building2;

            return (
              <div
                key={svc.id}
                className="sticky w-full mb-20 sm:mb-28 shadow-[0_-10px_35px_rgba(0,0,0,0.08)] rounded-3xl overflow-hidden bg-white border border-fir/10 transition-all duration-500"
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
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-fir mb-3 leading-tight">
                        {svc.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-fir/65 leading-relaxed mb-6 font-normal">
                        {svc.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-3 mb-6">
                        {svc.details.map((point, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-lfgreen-dark shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-fir/80 font-medium leading-snug">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-fir/10 mt-4">
                      <a
                        href={`https://wa.me/97450909707?text=Hello%20Naviron,%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                          svc.title
                        )}%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2.5 px-4 text-xs sm:text-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Instant Inquiry</span>
                      </a>

                      <button
                        onClick={() => onNavigate && onNavigate('services')}
                        className="btn-outline py-2.5 px-4 text-xs sm:text-sm"
                      >
                        <span>Full Division Scope</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Image Area (Right) */}
                  <div className="lg:col-span-6 relative h-[280px] sm:h-[380px] lg:h-auto overflow-hidden group">
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
                          <span className="text-[10px] text-white/80 font-bold uppercase tracking-wider block mb-0.5">Naviron Division</span>
                          <span className="text-xs sm:text-sm font-bold text-white leading-tight block">{svc.subtitle}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

          {/* Spacer at bottom so cards can scroll all the way up and stack */}
          <div className="h-[25vh] sm:h-[35vh]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
