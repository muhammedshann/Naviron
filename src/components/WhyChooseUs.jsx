import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-white text-fir rounded-t-[40px] sm:rounded-t-[56px] -mt-12 sm:-mt-16 relative z-60 shadow-[0_-15px_40px_rgba(0,0,0,0.06)] overflow-hidden border-t border-fir/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#F3F5F2] border border-fir/10 text-xs font-semibold text-fir/70 mb-4 shadow-sm">
            The Naviron Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-fir mb-6 tracking-tight">
            Why Choose Naviron as Your{' '}
            <span className="text-3d-sm">Strategic Partner?</span>
          </h2>
          <p className="text-fir/60 text-base sm:text-lg leading-relaxed font-normal">
            Rooted in over 20 years of proven industry reputation, combining trusted methods with tomorrow's construction technologies.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {valuePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Award;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#F3F5F2] p-8 rounded-3xl border border-fir/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-lfgreen/20 border border-lfgreen/30 flex items-center justify-center text-lfgreen-dark mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lfgreen/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-fir mb-3 group-hover:text-lfgreen-dark transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-fir/60 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-fir/10 flex items-center justify-between text-[11px] font-semibold text-fir/40">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-lfgreen-dark">Guaranteed Standard</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
