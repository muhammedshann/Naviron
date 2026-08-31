import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
      {/* Outer fixed container to align header centered */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.header
          initial={false}
          animate={{
            width: scrolled ? '90%' : '100%',
            maxWidth: scrolled ? '1024px' : '1280px',
            marginTop: scrolled ? '16px' : '0px',
            borderRadius: scrolled ? '9999px' : '0px',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
            boxShadow: scrolled
              ? '0 20px 30px -10px rgba(11, 37, 28, 0.12), 0 8px 15px -6px rgba(11, 37, 28, 0.08)'
              : '0 0px 0px 0px rgba(0, 0, 0, 0)',
            borderColor: scrolled ? 'rgba(11, 37, 28, 0.1)' : 'rgba(11, 37, 28, 0)',
            paddingTop: scrolled ? '10px' : '20px',
            paddingBottom: scrolled ? '10px' : '20px',
            paddingLeft: scrolled ? '16px' : '20px',
            paddingRight: scrolled ? '16px' : '20px',
          }}
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 24,
            mass: 0.8,
          }}
          className="pointer-events-auto border backdrop-blur-xl transition-colors"
        >
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => handleNavClick('home')} className="flex items-center gap-2.5 group text-left">
              <div className="w-9 h-9 rounded-full bg-lfgreen flex items-center justify-center font-display font-extrabold text-fir text-lg group-hover:scale-105 transition-transform shadow-sm">
                N
              </div>
              <div>
                <span className="text-lg font-bold font-display tracking-tight text-fir group-hover:text-fir-light transition-colors">
                  Naviron<span className="text-lfgreen-dark">.</span>
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                    activePage === item.id
                      ? 'bg-fir text-white shadow-sm'
                      : 'text-fir/70 hover:text-fir hover:bg-fir/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={companyInfo.phones[0].whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold rounded-full border border-fir/20 text-fir hover:bg-fir/5 transition-all"
              >
                WhatsApp
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-5 py-2 text-xs font-bold rounded-full bg-lfgreen text-fir hover:bg-lfgreen-dark transition-all shadow-sm"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-fir hover:text-fir-light bg-sage rounded-full"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm z-50 bg-white border-l border-sage-dark p-6 flex flex-col justify-between md:hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-sage-dark">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-lfgreen flex items-center justify-center font-bold text-fir text-sm">N</div>
                  <span className="text-lg font-bold font-display text-fir">Naviron.</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-fir/40 hover:text-fir">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                      activePage === item.id
                        ? 'bg-lfgreen/15 text-fir font-bold'
                        : 'text-fir/60 hover:bg-sage hover:text-fir'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activePage === item.id && <ArrowRight className="w-4 h-4 text-lfgreen-dark" />}
                  </button>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-sage-dark flex flex-col gap-3">
              <a href={companyInfo.phones[0].whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline w-full justify-center !border-emerald-500/30 !text-emerald-600">
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <button onClick={() => handleNavClick('contact')} className="btn-primary w-full justify-center">
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
