import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectEstimator from '../components/ProjectEstimator';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import { companyInfo } from '../data/content';
import { ArrowRight, Phone } from 'lucide-react';

export default function Home({ onNavigate }) {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Interactive Stats Section */}
      <StatsSection />

      {/* 3. About Snapshot Section */}
      <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-white text-fir rounded-t-[40px] sm:rounded-t-[56px] -mt-12 sm:-mt-16 relative z-30 shadow-[0_-15px_40px_rgba(0,0,0,0.06)] overflow-hidden border-t border-fir/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            <div className="lg:col-span-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage border border-fir/10 text-xs font-semibold text-fir/70 mb-5">
                About Naviron
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-fir mb-6 tracking-tight">
                Dynamic Solutions for <span className="text-3d-sm">Qatari</span> Businesses
              </h2>
              <p className="text-base sm:text-lg text-fir/60 leading-relaxed mb-8 font-normal">
                With over 20 years of expertise, Naviron emphasizes quality, integrity, and innovative approaches, delivering sustainable solutions that meet the evolving needs of our clients in construction and trading.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={companyInfo.phones[0].href}
                  className="btn-primary"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us: {companyInfo.phones[0].number}</span>
                </a>
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-outline"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden group shadow-2xl h-[360px] sm:h-[420px] border border-fir/10">
                <img
                  src="/assets/images/pexels-photo-31732877.jpeg"
                  alt="Naviron Engineering Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fir/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg">
                  <span className="text-xs font-bold text-lfgreen-dark block">Ainsnan Legacy</span>
                  <span className="text-sm font-semibold text-fir">20+ Years Trusted Operations in Qatar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Core Services Showcase */}
      <ServicesSection onNavigate={onNavigate} />

      {/* 5. Interactive Project Scope Estimator */}
      <ProjectEstimator />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Testimonials Carousel */}
      <Testimonials />

      {/* 8. Bottom CTA Banner */}
      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
