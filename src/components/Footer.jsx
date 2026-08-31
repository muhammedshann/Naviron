import React from 'react';
import { companyInfo, services } from '../data/content';
import { Phone, Mail, MapPin, ShieldCheck, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080f] border-t border-white/10 pt-16 pb-8 relative z-20 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Sister Company */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-teal flex items-center justify-center font-display font-extrabold text-brand-dark text-xl">
                N
              </div>
              <span className="text-2xl font-bold font-display text-white">Naviron.</span>
            </div>

            <div className="inline-block px-3 py-1 bg-brand-teal/15 border border-brand-teal/30 rounded-full text-xs font-semibold text-brand-cyan mb-4">
              {companyInfo.sisterCompany}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Transforming Construction &amp; Trading in Qatar. Delivering cutting-edge civil infrastructure, facility maintenance, and specialized trading backed by 20+ years of engineering excellence.
            </p>

            <div className="p-3.5 rounded-2xl glass-panel border border-white/10 text-xs">
              <div className="text-white font-bold mb-0.5">Commercial Registration</div>
              <div className="text-brand-cyan font-mono font-bold">CR NO: {companyInfo.crNumber}</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-brand-cyan transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-brand-cyan transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-brand-cyan transition-colors">
                  Core Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-brand-cyan transition-colors">
                  Engineering Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-brand-cyan transition-colors">
                  Contact &amp; Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Engineering Divisions
            </h4>
            <ul className="space-y-2.5 text-xs">
              {services.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-brand-cyan transition-colors text-left flex items-center gap-1 group"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-brand-cyan transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Credentials */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Qatar Headquarters
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={companyInfo.phones[0].href} className="text-white hover:text-brand-cyan transition-colors">
                  {companyInfo.phones[0].number}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-white hover:text-brand-cyan transition-colors">
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

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Naviron Qatar. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Sister Company of <strong>Ainsnan Trading &amp; Contracting</strong></span>
            <span>&bull;</span>
            <span className="text-slate-400">CR: 237130</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
