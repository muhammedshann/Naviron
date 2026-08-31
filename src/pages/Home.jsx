import React from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectEstimator from '../components/ProjectEstimator';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import { companyInfo } from '../data/content';
import { ArrowRight, Phone, ShieldCheck, Award } from 'lucide-react';

export default function Home({ onNavigate }) {
  return (
    <div className="space-y-4">
      {/* 1. Hero Section with Loading & Particles */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Interactive Stats Section */}
      <StatsSection />

      {/* 3. About Snapshot Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-4">
                About Naviron
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
                Dynamic Solutions for Qatari Businesses
              </h2>
              <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
                With over 20 years of expertise, Naviron emphasizes quality, integrity, and innovative approaches, delivering sustainable solutions that meet the evolving needs of our clients in construction and trading.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={companyInfo.phones[0].href}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal hover:bg-brand-tealDark text-white shadow-lg shadow-brand-teal/20 transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us: {companyInfo.phones[0].number}</span>
                </a>
                <button
                  onClick={() => onNavigate('about')}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider glass-panel text-white hover:bg-white/10 border border-white/20 transition-all"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4 text-brand-cyan" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden group shadow-2xl h-[340px] sm:h-[400px]">
                <img
                  src="/assets/images/pexels-photo-31732877.jpeg"
                  alt="Naviron Engineering Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/15">
                  <span className="text-xs font-bold text-brand-cyan block">Ainsnan Legacy</span>
                  <span className="text-sm font-semibold text-white">20+ Years Trusted Operations in Qatar</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Services Showcase with Tabs */}
      <ServicesSection onNavigate={onNavigate} />

      {/* 5. Interactive Project Scope Estimator */}
      <ProjectEstimator />

      {/* 6. Why Choose Us (4 Pillars) */}
      <WhyChooseUs />

      {/* 7. Testimonials Carousel */}
      <Testimonials />

      {/* 8. Bottom CTA Banner */}
      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
