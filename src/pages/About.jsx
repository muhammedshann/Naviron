import React from 'react';
import PageHeader from '../components/PageHeader';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CTABanner from '../components/CTABanner';
import { companyInfo } from '../data/content';
import { ShieldCheck, Target, Sparkles, Building, ArrowRight, Award, Zap, Handshake, CheckCircle2, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About({ onNavigate }) {
  const missionHighlights = [
    { icon: ShieldCheck, title: "Qatar Vision 2030 Aligned", desc: "Every milestone contributes directly to Qatari infrastructure sustainability." },
    { icon: Award, title: "Qatari Engineering Codes", desc: "Certified civil structures built to strict MME and Civil Defense standards." },
    { icon: Sparkles, title: "Turnkey Execution", desc: "End-to-end master planning, structural foundation, and asset management." }
  ];

  const approachPillars = [
    {
      icon: Handshake,
      title: "Collaborative Partnership",
      desc: "We work side-by-side with developers, consultants, and public stakeholders to solve complex engineering challenges effectively."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Integration",
      desc: "Integrating modern BIM modeling, geotechnical diagnostics, and energy-efficient building systems into every project."
    },
    {
      icon: ShieldCheck,
      title: "Uncompromised Quality Control",
      desc: "Rigorous QA/QC site supervision adhering to global ISO safety guidelines and Qatari building specifications."
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 bg-white">
      {/* 1. Page Header Banner */}
      <PageHeader
        badge="About Naviron"
        title="Pioneering Engineering &"
        highlightedTitle="Strategic Trading"
        subtitle="Discover how Naviron combines innovative solutions and over two decades of Ainsnan legacy to serve Qatari businesses and infrastructure effectively."
      />

      {/* 2. Our Mission Section (Curved Light Section) */}
      <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 bg-[#F3F5F2] text-fir rounded-t-[40px] sm:rounded-t-[56px] -mt-10 sm:-mt-14 relative z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.06)] border-t border-fir/10 overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-lfgreen/15 rounded-full blur-[140px] transform-gpu backface-visibility-hidden pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-mint/20 rounded-full blur-[140px] transform-gpu backface-visibility-hidden pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[320px] sm:h-[440px] group border border-fir/10">
                <img
                  src="/assets/images/pexels-photo-10546989.jpeg"
                  alt="Naviron Engineering Mission"
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fir/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-lfgreen/20 text-lfgreen-dark flex items-center justify-center font-bold shrink-0">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-lfgreen-dark uppercase tracking-wider block">Strategic Focus</span>
                      <span className="text-sm font-bold text-fir">Empowering Qatari Progress &amp; Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-fir/10 text-xs font-semibold text-fir/70 mb-5 shadow-sm">
                <Target className="w-3.5 h-3.5 text-lfgreen-dark" />
                <span>Our Core Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-fir mb-6 tracking-tight">
                Empowering Qatari <span className="text-3d-sm">Progress</span>
              </h2>
              <p className="text-base sm:text-lg text-fir/60 leading-relaxed mb-8 font-normal">
                {companyInfo.mission}
              </p>

              {/* 3 Bullet Highlights */}
              <div className="space-y-3.5 pt-2">
                {missionHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white border border-fir/10 shadow-sm flex items-start gap-3.5 hover:shadow-md transition-shadow">
                      <div className="w-9 h-9 rounded-xl bg-lfgreen/15 text-lfgreen-dark flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-fir block">{item.title}</h4>
                        <p className="text-[11px] text-fir/60 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Interactive Animated Stats */}
      <StatsSection />

      {/* 4. Our Approach Section (Curved Dark Panel Section) */}
      <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 bg-fir text-white rounded-t-[40px] sm:rounded-t-[56px] -mt-12 sm:-mt-16 relative z-40 shadow-[0_-15px_40px_rgba(0,0,0,0.2)] overflow-hidden border-t border-white/10">
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-lfgreen/15 rounded-full blur-[140px] transform-gpu backface-visibility-hidden pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-mint/15 rounded-full blur-[140px] transform-gpu backface-visibility-hidden pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-lfgreen mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Operational Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-6 leading-tight text-3d-white tracking-tight">
              Commitment to <span className="text-lfgreen">Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed font-normal">
              {companyInfo.approach}
            </p>
          </motion.div>

          {/* 3 Glassmorphism Approach Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {approachPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-7 border border-white/10 hover:border-lfgreen/40 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-lfgreen/20 border border-lfgreen/30 flex items-center justify-center text-lfgreen mb-6 group-hover:bg-lfgreen group-hover:text-fir transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-lfgreen transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-white/40">
                    <span>Principle 0{idx + 1}</span>
                    <span className="text-lfgreen">Naviron Standard</span>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* 5. Our Story Section (Curved Light Section) */}
      <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 bg-[#F3F5F2] text-fir rounded-t-[40px] sm:rounded-t-[56px] -mt-12 sm:-mt-16 relative z-50 shadow-[0_-15px_40px_rgba(0,0,0,0.06)] border-t border-fir/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* Text Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-fir/10 text-xs font-semibold text-fir/70 mb-5 shadow-sm">
                <Building className="w-3.5 h-3.5 text-lfgreen-dark" />
                <span>Our Heritage &amp; Foundations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-fir mb-6 tracking-tight">
                Rooted in Legacy, <span className="text-3d-sm">Driven by Innovation</span>
              </h2>
              <p className="text-base sm:text-lg text-fir/60 leading-relaxed mb-6 font-normal">
                {companyInfo.story}
              </p>

              {/* Registration & Legacy Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-semibold text-fir/70">
                <div className="px-3.5 py-2 rounded-xl bg-white border border-fir/10 flex items-center gap-2 shadow-sm">
                  <FileCheck className="w-4 h-4 text-lfgreen-dark" />
                  <span>Commercial Reg: CR {companyInfo.crNumber}</span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-white border border-fir/10 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-lfgreen-dark" />
                  <span>20+ Years Ainsnan Group Legacy</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary"
              >
                <span>Connect With Our Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[320px] sm:h-[440px] group border border-fir/10">
                <img
                  src="/assets/images/pexels-photo-31732877.jpeg"
                  alt="Naviron Legacy Doha"
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fir/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg">
                  <span className="text-xs font-bold text-lfgreen-dark block">Ainsnan Family</span>
                  <span className="text-sm font-bold text-fir">Over Two Decades of Uncompromised Trust in Qatar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Why Choose Us / Value Pillars */}
      <WhyChooseUs />

      {/* 7. Bottom CTA Banner */}
      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
