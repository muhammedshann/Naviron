import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 group text-left">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center font-display font-extrabold text-white text-xl shadow-sm group-hover:scale-105 transition-transform">
                N
              </div>
              <div>
                <span className="text-xl font-bold font-display tracking-tight text-brand-dark group-hover:text-brand-600 transition-colors">
                  Naviron<span className="text-brand-600">.</span>
                </span>
                <span className="block text-[10px] tracking-wider uppercase text-gray-400 font-medium">
                  Qatar Engineering
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 bg-gray-100 px-2 py-1.5 rounded-full">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    activePage === item.id
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-brand-dark hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={companyInfo.phones[0].whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !py-2 !px-4 !text-xs !border-emerald-400 !text-emerald-600 hover:!border-emerald-500"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <button onClick={() => handleNavClick('contact')} className="btn-primary !py-2 !px-5 !text-xs">
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-brand-dark bg-gray-100 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm z-50 bg-white border-l border-gray-200 p-6 flex flex-col justify-between transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center font-bold text-white text-sm">N</div>
              <span className="text-lg font-bold font-display text-brand-dark">Naviron.</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activePage === item.id
                    ? 'bg-brand-50 text-brand-700 border border-brand-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-dark'
                }`}
              >
                <span>{item.label}</span>
                {activePage === item.id && <ArrowRight className="w-4 h-4 text-brand-600" />}
              </button>
            ))}
          </div>
        </div>
        <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
          <a href={companyInfo.phones[0].whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center !border-emerald-400 !text-emerald-600">
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <button onClick={() => handleNavClick('contact')} className="btn-primary w-full justify-center">
            <span>Request Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
