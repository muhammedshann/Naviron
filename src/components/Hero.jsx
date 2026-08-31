import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function Hero({ onNavigate }) {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#F3F5F2] via-white to-[#F3F5F2]">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0B251C 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative ambient glows */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-lfgreen/15 rounded-full blur-[140px] transform-gpu backface-visibility-hidden pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-mint/20 rounded-full blur-[140px] transform-gpu backface-visibility-hidden pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-fir/10 text-xs font-semibold text-fir/70 mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-lfgreen-dark" />
              <span>Innovative Solutions in Qatar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-lfgreen" />
              <span className="text-fir/40 font-medium">20+ Years Legacy</span>
            </motion.div>

            {/* Headline with 3D text */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.85rem] font-display font-extrabold text-fir tracking-tight leading-[1.1] mb-6">
              Transforming{' '}
              <span className="text-3d inline-block">Construction</span> &{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Trading</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-lfgreen/40 -z-0 rounded-sm" />
              </span>{' '}
              in Qatar
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-fir/60 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 font-normal">
              Where modern technology meets reliable service for efficient project solutions tailored to your unique requirements.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href={companyInfo.phones[0].whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect via WhatsApp</span>
              </a>
              <button onClick={() => onNavigate('services')} className="btn-outline">
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-fir/10 text-xs text-fir/50">
              {['CR Certified (237130)', 'Civil & Infrastructure', 'Material Sourcing'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-lfgreen-dark shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border border-fir/10 shadow-2xl group">
                <img
                  src="/assets/images/pexels-photo-33670026.jpeg"
                  alt="Modern Construction Doha Qatar"
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fir/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold text-lfgreen-dark uppercase tracking-wider">Featured Project</span>
                      <h4 className="text-fir font-bold text-xs sm:text-sm">Civic & Commercial High-Rises</h4>
                    </div>
                    <span className="px-2.5 py-1 bg-lfgreen text-fir rounded-full text-[11px] sm:text-xs font-semibold">
                      Qatar 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div
                className="absolute -bottom-4 left-2 sm:-left-10 w-44 sm:w-56 p-3 sm:p-4 rounded-2xl bg-white border border-fir/10 shadow-xl"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-sage border border-fir/10 flex items-center justify-center text-fir text-xs sm:text-sm font-bold">
                    A
                  </div>
                  <div>
                    <span className="text-xs font-bold text-fir block leading-tight">Ainsnan Partner</span>
                    <span className="text-[10px] text-fir/40">20+ Yrs Heritage</span>
                  </div>
                </div>
                <div className="w-full bg-sage h-1.5 rounded-full overflow-hidden">
                  <div className="bg-lfgreen h-full w-[92%] rounded-full" />
                </div>
              </div>

              {/* Top Right Badge */}
              <div className="absolute -top-3 right-2 sm:-right-8 p-3 sm:p-3.5 rounded-2xl bg-white border border-fir/10 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-lfgreen" />
                  <div>
                    <span className="text-xs font-extrabold text-fir block leading-tight">92% Satisfaction</span>
                    <span className="text-[10px] text-fir/40">Across Qatar Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
