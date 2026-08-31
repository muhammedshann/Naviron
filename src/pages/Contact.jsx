import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import CTABanner from '../components/CTABanner';
import { companyInfo } from '../data/content';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, Building, Twitter, Youtube, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact({ onNavigate }) {
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
    <div className="pt-20 sm:pt-24">
      {/* Header Banner */}
      <PageHeader
        badge="Direct Coordination Desk"
        title="Reach Out to Our"
        highlightedTitle="Engineering Team"
        subtitle="We're here to assist you with your construction, maintenance, and specialized trading needs in Qatar."
      />

      {/* Main Contact Grid */}
      <section className="pt-4 pb-24 sm:pb-36 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10"
          >
            {/* Left Column: Corporate Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-sage rounded-3xl p-8 border border-fir/5 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-lfgreen/15 text-lfgreen-dark rounded-full text-xs font-bold border border-lfgreen/30 mb-3">
                    {companyInfo.sisterCompany}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-fir mb-2">
                    Naviron
                  </h2>
                  <p className="text-xs text-fir/50 leading-relaxed font-normal">
                    Qatar's dependable partner for civil engineering, project support, preventative upkeep, and certified material procurement.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-fir/10">
                  {/* WhatsApp & Primary Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-fir/40 block">WhatsApp & Call</span>
                      <a
                        href={companyInfo.phones[0].whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-emerald-600 hover:text-emerald-500 block"
                      >
                        {companyInfo.phones[0].number} (Instant WhatsApp)
                      </a>
                      <a href={companyInfo.phones[1].href} className="text-xs text-fir/50 hover:text-fir">
                        {companyInfo.phones[1].number} (Direct Line)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-lfgreen/10 border border-lfgreen/20 flex items-center justify-center text-lfgreen-dark shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-fir/40 block">Official Inquiries</span>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-sm font-bold text-fir hover:text-lfgreen-dark transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Commercial Registration */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-fir/5 border border-fir/10 flex items-center justify-center text-fir/60 shrink-0 mt-0.5">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-fir/40 block">Commercial Registration</span>
                      <span className="text-sm font-bold font-mono text-fir">
                        CR NO: {companyInfo.crNumber}
                      </span>
                    </div>
                  </div>

                  {/* Physical Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-fir/5 border border-fir/10 flex items-center justify-center text-fir/60 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-fir/40 block">Doha Headquarters</span>
                      <p className="text-xs text-fir/50 leading-relaxed">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-fir/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-fir/30 block mb-3">
                    Follow Our Channels:
                  </span>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-xl bg-white border border-fir/10 flex items-center justify-center text-fir/40 hover:text-fir hover:border-fir/20 transition-all">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl bg-white border border-fir/10 flex items-center justify-center text-fir/40 hover:text-red-500 hover:border-red-200 transition-all">
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl bg-white border border-fir/10 flex items-center justify-center text-fir/40 hover:text-blue-500 hover:border-blue-200 transition-all">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-xl bg-white border border-fir/10 flex items-center justify-center text-fir/40 hover:text-sky-500 hover:border-sky-200 transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-sage rounded-3xl p-8 sm:p-12 border border-fir/5">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-fir mb-2">
                    Send Us a Project Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-fir/50 font-normal">
                    Complete the form below to receive a formal engineering review and quotation from our Doha office.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-3xl bg-lfgreen/10 border border-lfgreen/30 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-lfgreen/20 text-lfgreen-dark flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-fir font-display">Inquiry Received!</h4>
                    <p className="text-sm text-fir/50 max-w-md mx-auto">
                      Thank you for contacting Naviron. One of our project managers will review your submission and connect with you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-fir/50 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Mohammed Al-Kuwari"
                          className="w-full p-3.5 rounded-2xl bg-white border border-fir/10 text-fir placeholder-fir/30 focus:outline-none focus:border-lfgreen-dark text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-fir/50 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@company.qa"
                          className="w-full p-3.5 rounded-2xl bg-white border border-fir/10 text-fir placeholder-fir/30 focus:outline-none focus:border-lfgreen-dark text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-fir/50 mb-2">
                          Phone Number / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +974 5090 9707"
                          className="w-full p-3.5 rounded-2xl bg-white border border-fir/10 text-fir placeholder-fir/30 focus:outline-none focus:border-lfgreen-dark text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-fir/50 mb-2">
                          Service of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full p-3.5 rounded-2xl bg-white border border-fir/10 text-fir focus:outline-none focus:border-lfgreen-dark text-sm transition-colors"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-fir/50 mb-2">
                        Project Scope &amp; Details *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your requirements, specifications, location in Qatar, or desired timeline..."
                        className="w-full p-4 rounded-2xl bg-white border border-fir/10 text-fir placeholder-fir/30 focus:outline-none focus:border-lfgreen-dark text-sm transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-primary justify-center !py-4"
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
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
