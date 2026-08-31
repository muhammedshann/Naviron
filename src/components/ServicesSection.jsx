import React, { useState } from 'react';
import { services } from '../data/content';
import { Building2, Wrench, ShieldCheck, Truck, ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';

const iconMap = {
  Building2,
  Wrench,
  ShieldCheck,
  Truck
};

export default function ServicesSection({ onNavigate }) {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  const currentService = services.find((s) => s.id === activeServiceId) || services[0];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-4">
            Core Engineering &amp; Trading
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Comprehensive Offerings Tailored for Qatar
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Delivering high-specification civil engineering, facility preservation, management support, and global procurement to drive your projects forward.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon] || Building2;
            const isActive = activeServiceId === svc.id;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveServiceId(svc.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-teal to-brand-cyan text-brand-dark shadow-lg shadow-brand-teal/30 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-brand-cyan/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-dark' : 'text-brand-cyan'}`} />
                <span>{svc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Service Interactive Deep Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-brand-teal/30 glow-card mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20 inline-block mb-3">
                {currentService.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                {currentService.title}
              </h3>
              <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
                {currentService.description}
              </p>

              {/* Detailed Key Highlights */}
              <div className="space-y-3 mb-8">
                {currentService.details.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{point}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/97450909707?text=Hello%20Naviron,%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                    currentService.title
                  )}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider glass-panel text-white hover:bg-white/10 border border-white/20 transition-all duration-300"
                >
                  <span>Request Full Proposal</span>
                  <ArrowRight className="w-4 h-4 text-brand-cyan" />
                </button>
              </div>
            </div>

            {/* Right Image Display */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden group shadow-2xl h-[360px] sm:h-[420px]">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b13] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10">
                  <span className="text-xs text-brand-cyan font-bold block">Naviron Specialized Division</span>
                  <span className="text-sm font-semibold text-white">{currentService.subtitle}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Cards Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon] || Building2;
            const isSelected = activeServiceId === svc.id;
            return (
              <div
                key={svc.id}
                onClick={() => setActiveServiceId(svc.id)}
                className={`glass-panel rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 group flex flex-col ${
                  isSelected ? 'border-brand-cyan ring-1 ring-brand-cyan' : 'hover:-translate-y-2'
                }`}
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-dark/80 backdrop-blur-md text-brand-cyan border border-white/10">
                    {svc.badge}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {svc.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-grow line-clamp-3">
                    {svc.description}
                  </p>
                  <span className="text-xs font-bold text-brand-cyan flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
