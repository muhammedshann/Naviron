import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { services } from '../data/content';
import { Building2, Wrench, ShieldCheck, Truck, ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';

const iconMap = {
  Building2,
  Wrench,
  ShieldCheck,
  Truck
};

export default function ServicesSection({ onNavigate }) {
  return (
    // Removed overflow-hidden to allow sticky stacking to work properly
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-24 bg-[#F3F5F2] text-fir rounded-t-[40px] sm:rounded-t-[56px] -mt-12 sm:-mt-16 relative z-40 shadow-[0_-15px_40px_rgba(0,0,0,0.06)] border-t border-fir/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-fir/10 text-xs font-semibold text-fir/70 mb-4 shadow-sm">
            Core Engineering & Trading
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-fir mb-6 tracking-tight">
            Comprehensive Offerings Tailored for{' '}
            <span className="text-3d-sm">Qatar</span>
          </h2>
          <p className="text-fir/60 text-base sm:text-lg leading-relaxed font-normal">
            Delivering high-specification civil engineering, facility preservation, management support, and global procurement to drive your projects forward.
          </p>
        </motion.div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative">
          {services.map((svc, index) => {
            const Icon = iconMap[svc.icon] || Building2;
            
            // Calculate sticky top offset to create the stacking effect
            // Base offset is 100px. Each subsequent card adds 24px so they stack visually like a deck.
            const topOffset = 100 + (index * 24);

            return (
              <div
                key={svc.id}
                className="sticky shadow-[0_-8px_30px_rgba(0,0,0,0.12)] mb-12 sm:mb-20 last:mb-0 border border-fir/10 rounded-3xl overflow-hidden bg-white"
                style={{
                  top: `${topOffset}px`,
                  zIndex: 10 + index, // Ensure newer cards stack on top of older ones
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[440px]">
                  
                  {/* Content Area */}
                  <div className={`lg:col-span-6 p-6 sm:p-12 lg:p-14 flex flex-col justify-center bg-white relative`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-lfgreen-dark bg-lfgreen/10 px-3 py-1.5 rounded-full border border-lfgreen/30 inline-block mb-6 w-fit">
                      {svc.badge}
                    </span>
                    
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-fir mb-4 leading-tight">
                      {svc.title}
                    </h3>
                    
                    <p className="text-base text-fir/60 leading-relaxed mb-6 font-normal">
                      {svc.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-3.5 mb-8 flex-grow">
                      {svc.details.map((point, i) => (
                        <div key={i} className="flex items-start gap-3.5">
                          <CheckCircle className="w-5 h-5 text-lfgreen-dark shrink-0 mt-0.5" />
                          <span className="text-sm text-fir/80 font-medium leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-fir/5 mt-auto">
                      <a
                        href={`https://wa.me/97450909707?text=Hello%20Naviron,%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                          svc.title
                        )}%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-3 px-5 text-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Inquire</span>
                      </a>

                      <button
                        onClick={() => onNavigate('contact')}
                        className="btn-outline py-3 px-5 text-sm"
                      >
                        <span>Full Proposal</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Image Area */}
                  <div className={`lg:col-span-6 relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden group`}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fir/80 via-fir/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-lfgreen/90 text-fir flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] text-white/80 font-bold uppercase tracking-wider block mb-0.5">Naviron Division</span>
                          <span className="text-base font-bold text-white leading-tight">{svc.subtitle}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
