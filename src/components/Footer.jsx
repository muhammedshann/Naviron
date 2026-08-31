import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo, services } from '../data/content';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071A13] text-white/60 text-sm rounded-t-[40px] sm:rounded-t-[56px] -mt-12 sm:-mt-16 relative z-90 shadow-[0_-15px_40px_rgba(0,0,0,0.2)] overflow-hidden border-t border-white/10 pt-20 sm:pt-24">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10"
        >
          
          {/* Col 1: Brand & Tagline with CTAs */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight mb-6">
              Transforming Construction & Trading
            </h3>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 rounded-full text-xs font-bold border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                Get in Touch
              </button>
              <a
                href={companyInfo.phones[0].whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-bold border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="text-white/80 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-white/80 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-white/80 hover:text-white transition-colors">
                  Core Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-white/80 hover:text-white transition-colors">
                  Engineering Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-white/80 hover:text-white transition-colors">
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
              Engineering Divisions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-white/80 hover:text-white transition-colors text-left flex items-center gap-1 group"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-lfgreen transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
              Qatar Headquarters
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lfgreen shrink-0 mt-0.5" />
                <span className="leading-relaxed text-white/60">{companyInfo.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-lfgreen shrink-0" />
                <a href={companyInfo.phones[0].href} className="text-white/80 hover:text-white transition-colors">
                  {companyInfo.phones[0].number}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-lfgreen shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-white/80 hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={companyInfo.phones[0].whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>24/7 WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 text-center sm:text-left">
          <div>
            &copy; {currentYear} Naviron Qatar. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>Sister Company of <strong className="text-white/50">Ainsnan Trading &amp; Contracting</strong></span>
            <span className="hidden sm:inline">&bull;</span>
            <span>CR: {companyInfo.crNumber}</span>
          </div>
        </div>
      </div>

      {/* Giant NAVIRON Brand Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full overflow-hidden pb-4 px-4"
      >
        <div className="footer-brand-text text-center select-none w-full">
          NAVIRON
        </div>
      </motion.div>
    </footer>
  );
}
