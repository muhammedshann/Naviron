import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, MessageSquare, ArrowRight, Check, Sparkles, Building, Clock, Layers, Wrench, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState('civil-construction');
  const [projectScale, setProjectScale] = useState('commercial');
  const [timeline, setTimeline] = useState('standard');

  const serviceOptions = [
    { id: 'civil-construction', name: 'Civil Construction', icon: Building, desc: 'Structural engineering' },
    { id: 'infrastructure-maintenance', name: 'Facility Upkeep', icon: Wrench, desc: 'HVAC & preservation' },
    { id: 'project-support', name: 'Project Support', icon: ShieldCheck, desc: 'QC site management' },
    { id: 'specialized-trading', name: 'Specialized Trading', icon: Truck, desc: 'ISO certified materials' },
  ];

  const scaleOptions = [
    { id: 'residential', name: 'Residential Villa', detail: 'Private luxury compound' },
    { id: 'commercial', name: 'Commercial Tower', detail: 'Corporate high-rise' },
    { id: 'industrial', name: 'Industrial Facility', detail: 'Warehouse or energy site' },
    { id: 'custom', name: 'Bespoke Gulf Scope', detail: 'Tailored Qatari infrastructure' },
  ];

  const timelineOptions = [
    { id: 'urgent', name: 'Immediate (7 Days)' },
    { id: 'standard', name: 'Standard Milestone Plan' },
    { id: 'planning', name: 'Future Feasibility' },
  ];

  const getWhatsappMessage = () => {
    const sName = serviceOptions.find((s) => s.id === selectedService)?.name;
    const scName = scaleOptions.find((s) => s.id === projectScale)?.name;
    const tName = timelineOptions.find((t) => t.id === timeline)?.name;
    return `Hello Naviron Engineering Desk, I would like to consult on a project in Qatar:%0A- Service: ${encodeURIComponent(
      sName
    )}%0A- Sector: ${encodeURIComponent(scName)}%0A- Timeline: ${encodeURIComponent(
      tName
    )}%0A%0APlease assign a senior project manager for a consultation call.`;
  };

  return (
    <section className="pt-12 pb-24 sm:pt-16 sm:pb-32 bg-gradient-to-b from-[#EEF5FF] via-[#F4F8FE] to-[#EEF5FF] text-[#0A1D16] rounded-3xl sm:rounded-[40px] mt-10 sm:mt-14 relative z-40 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-blue-200/50 flex items-center">
      {/* Background Soft Blue Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[140px] transform-gpu backface-visibility-hidden pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-300/15 rounded-full blur-[140px] transform-gpu backface-visibility-hidden pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header - Centered & Spacious */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200/80 text-xs font-semibold text-[#0A1D16] mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>GCC Scope Configurator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0A1D16] tracking-tight mb-4">
            Plan Your Project &amp; <span className="text-3d-sm">Get an Estimate</span>
          </h2>
          <p className="text-sm sm:text-base text-[#334155] max-w-xl mx-auto">
            Select your requirements to calculate project parameters and connect directly with our Doha engineers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10"
        >
          {/* Left Controls - Spacious Grid */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1 */}
            <div>
              <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0A1D16] mb-3">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>1. Primary Capability</span>
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedService === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedService(opt.id)}
                      className={`p-4 rounded-xl text-left transition-all duration-200 border flex items-center gap-3.5 ${
                        isSelected
                          ? 'bg-white border-blue-500 ring-1 ring-blue-400 shadow-md scale-[1.01]'
                          : 'bg-white/90 border-blue-100/80 hover:bg-white hover:border-blue-300'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-[#EBF3FC] text-blue-700'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <span className="text-sm font-bold text-[#0A1D16] block leading-tight truncate">{opt.name}</span>
                        <p className="text-xs text-[#64748B] mt-1 leading-snug truncate">{opt.desc}</p>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 ml-1" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0A1D16] mb-3">
                <Building className="w-4 h-4 text-blue-600" />
                <span>2. Project Sector</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scaleOptions.map((scale) => {
                  const isSelected = projectScale === scale.id;
                  return (
                    <button
                      key={scale.id}
                      onClick={() => setProjectScale(scale.id)}
                      className={`p-4 rounded-xl text-left transition-all duration-200 border flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-white border-blue-500 ring-1 ring-blue-400 shadow-md scale-[1.01]'
                          : 'bg-white/90 border-blue-100/80 hover:bg-white hover:border-blue-300'
                      }`}
                    >
                      <div className="flex-grow min-w-0">
                        <div className="text-sm font-bold text-[#0A1D16] leading-tight truncate">{scale.name}</div>
                        <div className="text-xs text-[#64748B] mt-1 leading-snug truncate">{scale.detail}</div>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 ml-1" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0A1D16] mb-3">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>3. Target Schedule</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelineOptions.map((t) => {
                  const isSelected = timeline === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTimeline(t.id)}
                      className={`p-4 rounded-xl text-left transition-all duration-200 border flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-white border-blue-500 ring-1 ring-blue-400 shadow-md scale-[1.01]'
                          : 'bg-white/90 border-blue-100/80 hover:bg-white hover:border-blue-300'
                      }`}
                    >
                      <span className="text-sm font-bold text-[#0A1D16] leading-tight truncate pr-1">{t.name}</span>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Card - Spacious */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-5 sm:p-7 border border-blue-100 shadow-xl lg:sticky lg:top-28">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-[10px] uppercase font-extrabold text-blue-600 tracking-wider block">Live Estimate</span>
                <h3 className="text-lg font-bold text-[#0A1D16]">Project Scope</h3>
              </div>
              <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-3.5 mb-6">
              <div className="p-4 rounded-xl bg-[#F0F6FF] border border-blue-100/60 flex flex-col justify-center">
                <span className="text-[11px] text-[#64748B] font-medium leading-none mb-1.5">Selected Capability</span>
                <strong className="text-[#0A1D16] font-bold text-sm leading-none">
                  {serviceOptions.find((s) => s.id === selectedService)?.name}
                </strong>
              </div>

              <div className="p-4 rounded-xl bg-[#F0F6FF] border border-blue-100/60 flex flex-col justify-center">
                <span className="text-[11px] text-[#64748B] font-medium leading-none mb-1.5">Sector Scope</span>
                <strong className="text-[#0A1D16] font-bold text-sm leading-none">
                  {scaleOptions.find((s) => s.id === projectScale)?.name}
                </strong>
              </div>

              <div className="p-4 rounded-xl bg-[#F0F6FF] border border-blue-100/60 flex flex-col justify-center">
                <span className="text-[11px] text-[#64748B] font-medium leading-none mb-1.5">Target Timeline</span>
                <strong className="text-[#0A1D16] font-bold text-sm leading-none">
                  {timelineOptions.find((t) => t.id === timeline)?.name}
                </strong>
              </div>
            </div>

            <div className="mb-6 bg-sage/50 p-4 rounded-xl border border-fir/5">
               <div className="flex items-center gap-2 text-xs font-bold text-[#0A1D16] mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Qatari Compliance Included</span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-snug">
                  MME & Civil Defense standards verified.
                </p>
            </div>

            {/* Submit to WhatsApp */}
            <a
              href={`https://wa.me/97450909707?text=${getWhatsappMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center !py-4 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Dispatch via WhatsApp</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
