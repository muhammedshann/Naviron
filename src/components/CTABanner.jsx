import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Building } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function CTABanner({ onNavigate }) {
  return (
    <section className="py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden glass-panel-glow border border-brand-teal/50 p-8 sm:p-14 text-center shadow-2xl">
          
          {/* Animated Glow Backdrops */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-cyan/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-teal/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-xs font-bold text-brand-cyan mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let’s Build the Future Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Let’s Start Your Project Together Today!
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
              Connect with Naviron and discover innovative solutions designed to meet your specific needs and elevate your business. Proud partner of Ainsnan Trading &amp; Contracting with over 20 years of experience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={companyInfo.phones[0].whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Instant Inquiry</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider bg-white hover:bg-slate-100 text-brand-dark shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4 text-brand-teal" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
