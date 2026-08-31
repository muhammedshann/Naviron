import React, { useState } from 'react';
import { companyInfo } from '../data/content';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, ShieldCheck, Clock, Building, Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'civil-construction',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'civil-construction',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="pt-28 pb-16">
      
      {/* Header */}
      <section className="py-16 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-teal/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-4">
            Direct Coordination Desk
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Reach Out to Our Engineering Team
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We're here to assist you with your construction, maintenance, and specialized trading needs in Qatar.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Corporate Info & Direct Access */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="glass-panel-glow rounded-3xl p-8 border border-brand-teal/40 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-brand-teal/20 text-brand-cyan rounded-full text-xs font-bold border border-brand-teal/30 mb-3">
                    {companyInfo.sisterCompany}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                    Naviron
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Qatar's dependable partner for civil engineering, project support, preventative upkeep, and certified material procurement.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-white/10">
                  {/* WhatsApp & Primary Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block">WhatsApp &amp; Call</span>
                      <a
                        href={companyInfo.phones[0].whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-emerald-400 hover:text-emerald-300 block"
                      >
                        {companyInfo.phones[0].number} (Instant WhatsApp)
                      </a>
                      <a href={companyInfo.phones[1].href} className="text-xs text-slate-300 hover:text-white">
                        {companyInfo.phones[1].number} (Direct Line)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block">Official Inquiries</span>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-sm font-bold text-white hover:text-brand-cyan transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Commercial Registration */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block">Commercial Registration</span>
                      <span className="text-sm font-bold font-mono text-brand-cyan">
                        CR NO: {companyInfo.crNumber}
                      </span>
                    </div>
                  </div>

                  {/* Physical Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block">Doha Headquarters</span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels Bar */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Follow Our Channels:
                  </span>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-xl glass-panel border border-white/10 flex items-center justify-center text-slate-300 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl glass-panel border border-white/10 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-400 transition-all">
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl glass-panel border border-white/10 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-400 transition-all">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl glass-panel border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400 transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Interactive Proposal & Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-brand-cyan/30">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                    Send Us a Project Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    Complete the form below to receive a formal engineering review and quotation from our Doha office.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white font-display">Inquiry Received!</h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for contacting Naviron. One of our project managers will review your submission and connect with you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Mohammed Al-Kuwari"
                          className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@company.qa"
                          className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                          Phone Number / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +974 5090 9707"
                          className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                          Service of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full p-3.5 rounded-2xl bg-[#0e1626] border border-white/10 text-white focus:outline-none focus:border-brand-cyan text-sm transition-colors"
                        >
                          <option value="civil-construction">Civil Construction</option>
                          <option value="infrastructure-maintenance">Infrastructure Maintenance</option>
                          <option value="project-support">Project Support Services</option>
                          <option value="specialized-trading">Specialized Trading Solutions</option>
                          <option value="general-inquiry">General Inquiry / Strategic Partner</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Project Scope &amp; Details *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your requirements, specifications, location in Qatar, or desired timeline..."
                        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan text-sm transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-brand-teal to-brand-cyan text-brand-dark hover:from-white hover:to-brand-cyan transition-all shadow-xl shadow-brand-teal/25 hover:scale-[1.01]"
                    >
                      {loading ? (
                        <span>Processing Dispatch...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
