import React from 'react';
import { motion } from 'framer-motion';
import { valuePillars } from '../data/content';
import { ShieldCheck, Award, CheckCircle2, Zap, Users, Clock, Leaf } from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Award,
  CheckCircle: CheckCircle2,
  Zap,
  Users,
  Clock,
  Leaf
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white text-fir relative z-10 border-t border-b border-fir/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#F3F5F2] border border-fir/10 text-xs font-semibold text-fir/70 mb-4 shadow-sm">
            Our Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-fir mb-6 tracking-tight">
            Guiding Principles of <span className="text-3d-sm">Naviron</span>
          </h2>
          <p className="text-fir/60 text-base sm:text-lg leading-relaxed font-normal">
            Safety, Integrity, Professionalism, Innovation, Customer Satisfaction, Timely Delivery, and Sustainability are at the heart of everything we do.
          </p>
        </motion.div>

        {/* 7 Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {valuePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || ShieldCheck;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-[#F3F5F2] p-7 rounded-3xl border border-fir/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-lfgreen/20 border border-lfgreen/30 flex items-center justify-center text-lfgreen-dark mb-5 group-hover:scale-110 group-hover:bg-lfgreen group-hover:text-fir transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-fir mb-2 group-hover:text-lfgreen-dark transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-fir/60 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-fir/10 flex items-center justify-between text-[11px] font-bold text-fir/40">
                  <span>Value 0{idx + 1}</span>
                  <span className="text-lfgreen-dark uppercase tracking-wider">Naviron Standard</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
