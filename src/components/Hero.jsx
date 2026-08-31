import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function Hero({ onNavigate }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0d9488 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 mb-6 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>Innovative Solutions in Qatar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span className="text-gray-500 font-medium">20+ Years Legacy</span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-[3.75rem] font-display font-extrabold text-brand-dark tracking-tight leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Transforming{' '}
              <span className="text-brand-600">Construction</span> &{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Trading</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-brand-lime/40 -z-0 rounded" />
              </span>{' '}
              in Qatar
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Where modern technology meets reliable service for efficient project solutions tailored to your unique requirements.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href={companyInfo.phones[0].whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime"
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
            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-gray-100 text-xs text-gray-400 transition-all duration-700 delay-400 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {['CR Certified (237130)', 'Civil & Infrastructure', 'Material Sourcing'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl group">
                <img
                  src="/assets/images/pexels-photo-33670026.jpeg"
                  alt="Modern Construction Doha Qatar"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-brand-600 uppercase tracking-wider">Featured</span>
                      <h4 className="text-brand-dark font-bold text-sm">Civic & Commercial High-Rises</h4>
                    </div>
                    <span className="px-3 py-1 bg-brand-lime text-brand-dark rounded-full text-xs font-semibold">
                      Qatar 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 w-48 sm:w-56 p-4 rounded-2xl bg-white border border-gray-200 shadow-lg" style={{animation: 'float 6s ease-in-out infinite'}}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 text-sm font-bold">
                    A
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-dark block">Ainsnan Partner</span>
                    <span className="text-[10px] text-gray-400">20+ Yrs Heritage</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-brand-600 h-full w-[92%] rounded-full" />
                </div>
              </div>

              {/* Top Right Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-8 p-3.5 rounded-2xl bg-white border border-gray-200 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <span className="text-xs font-extrabold text-brand-dark block">92% Satisfaction</span>
                    <span className="text-[10px] text-gray-400">Across Qatar Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
