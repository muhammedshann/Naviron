import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function CTABanner({ onNavigate }) {
  return (
    <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-fir text-white rounded-t-[36px] sm:rounded-t-[48px] -mt-10 sm:-mt-14 relative z-80 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] overflow-hidden border-t border-white/15">
      {/* Ambient glow removed for mobile performance and to prevent Safari rendering glitches */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl mx-auto relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold text-lfgreen mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Let's Build the Future Together</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-4 leading-tight text-3d-white tracking-tight">
            Let's Start Your Project Together Today!
          </h2>

          <p className="text-xs sm:text-base text-white/60 leading-relaxed mb-6 sm:mb-8 font-normal max-w-xl mx-auto">
            Connect with Naviron and discover innovative solutions designed to meet your specific needs and elevate your business. Partnered with Ainsnan Trading &amp; Contracting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={companyInfo.phones[0].whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-[12px] font-bold text-xs sm:text-sm bg-lfgreen text-fir transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[_-3px_3px_0_0_#84CC16]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Instant Inquiry</span>
            </a>

            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-[12px] font-bold text-xs sm:text-sm bg-white text-fir transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[_-3px_3px_0_0_#E8EBE6]"
            >
              <span>Request Project Consultation</span>
              <ArrowRight className="w-4 h-4 text-lfgreen-dark" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
