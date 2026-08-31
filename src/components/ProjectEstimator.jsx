import React, { useState } from 'react';
import { Calculator, MessageSquare, ArrowRight, Check, Sparkles, Building, Clock, Layers } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState('civil-construction');
  const [projectScale, setProjectScale] = useState('commercial');
  const [timeline, setTimeline] = useState('standard');

  const serviceOptions = [
    { id: 'civil-construction', name: 'Civil Construction', icon: 'Building' },
    { id: 'infrastructure-maintenance', name: 'Infrastructure Maintenance', icon: 'Wrench' },
    { id: 'project-support', name: 'Project Support Services', icon: 'Shield' },
    { id: 'specialized-trading', name: 'Specialized Trading', icon: 'Truck' },
  ];

  const scaleOptions = [
    { id: 'residential', name: 'Residential / Villa', detail: 'Private or residential compound' },
    { id: 'commercial', name: 'Commercial High-Rise', detail: 'Office, retail or civic tower' },
    { id: 'industrial', name: 'Industrial / Logistics', detail: 'Warehouse or facility complex' },
    { id: 'custom', name: 'Bespoke Custom Scope', detail: 'Tailored Qatari infrastructure' },
  ];

  const timelineOptions = [
    { id: 'urgent', name: 'Immediate / Urgent', detail: 'Mobilize within 7 days' },
    { id: 'standard', name: 'Standard Schedule', detail: 'Phase-driven execution' },
    { id: 'planning', name: 'Future Planning', detail: 'Feasibility & design stage' },
  ];

  const getWhatsappMessage = () => {
    const sName = serviceOptions.find((s) => s.id === selectedService)?.name;
    const scName = scaleOptions.find((s) => s.id === projectScale)?.name;
    const tName = timelineOptions.find((t) => t.id === timeline)?.name;
    return `Hello Naviron Team, I would like to consult on a project with the following scope:%0A- Service: ${encodeURIComponent(
      sName
    )}%0A- Project Scale: ${encodeURIComponent(scName)}%0A- Timeline: ${encodeURIComponent(
      tName
    )}%0A%0APlease provide available consultation slots.`;
  };

  return (
    <section className="py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-brand-teal/40 relative overflow-hidden">
          
          {/* Background Ambient Mesh */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-xs font-bold text-brand-cyan mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Project Planner</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-3">
              Plan Your Project &amp; Get an Instant Consultation
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Configure your project scope below to receive a personalized roadmap and connect directly with our chief engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Controls: Selectors */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Step 1: Service Division */}
              <div>
                <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-brand-cyan mb-3">
                  <Layers className="w-4 h-4" />
                  <span>1. Select Service Category</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {serviceOptions.map((opt) => {
                    const isSelected = selectedService === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedService(opt.id)}
                        className={`p-4 rounded-2xl text-left transition-all duration-200 border ${
                          isSelected
                            ? 'bg-brand-teal/25 border-brand-cyan text-white shadow-md shadow-brand-teal/20 scale-[1.02]'
                            : 'glass-panel border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="text-xs font-bold">{opt.name}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Project Scale */}
              <div>
                <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-brand-cyan mb-3">
                  <Building className="w-4 h-4" />
                  <span>2. Project Scale &amp; Sector</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scaleOptions.map((scale) => {
                    const isSelected = projectScale === scale.id;
                    return (
                      <button
                        key={scale.id}
                        onClick={() => setProjectScale(scale.id)}
                        className={`p-4 rounded-2xl text-left transition-all duration-200 border ${
                          isSelected
                            ? 'bg-brand-teal/25 border-brand-cyan text-white shadow-md shadow-brand-teal/20 scale-[1.01]'
                            : 'glass-panel border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="text-sm font-bold text-white mb-0.5">{scale.name}</div>
                        <div className="text-xs text-slate-400">{scale.detail}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline */}
              <div>
                <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-brand-cyan mb-3">
                  <Clock className="w-4 h-4" />
                  <span>3. Execution Timeline</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {timelineOptions.map((t) => {
                    const isSelected = timeline === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setTimeline(t.id)}
                        className={`p-4 rounded-2xl text-left transition-all duration-200 border ${
                          isSelected
                            ? 'bg-brand-teal/25 border-brand-cyan text-white shadow-md shadow-brand-teal/20 scale-[1.01]'
                            : 'glass-panel border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="text-xs font-bold text-white mb-0.5">{t.name}</div>
                        <div className="text-[11px] text-slate-400">{t.detail}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Summary & Action Card */}
            <div className="lg:col-span-4 glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 bg-gradient-to-b from-white/5 to-transparent">
              <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-white/10 flex items-center justify-between">
                <span>Scope Overview</span>
                <Sparkles className="w-4 h-4 text-brand-cyan" />
              </h3>

              <div className="space-y-4 mb-6 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block">Service Focus</span>
                  <strong className="text-white font-semibold capitalize">
                    {serviceOptions.find((s) => s.id === selectedService)?.name}
                  </strong>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block">Sector Scale</span>
                  <strong className="text-white font-semibold">
                    {scaleOptions.find((s) => s.id === projectScale)?.name}
                  </strong>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block">Urgency</span>
                  <strong className="text-white font-semibold">
                    {timelineOptions.find((t) => t.id === timeline)?.name}
                  </strong>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-xs text-brand-cyan font-bold block mb-1">Corporate Assurance</span>
                  <p className="text-xs text-slate-300">
                    Full compliance with Qatar construction regulations, dedicated QC engineering supervision, and 20+ years Ainsnan backing.
                  </p>
                </div>
              </div>

              {/* Submit to WhatsApp */}
              <a
                href={`https://wa.me/97450909707?text=${getWhatsappMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full font-bold text-xs uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Scope to WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-slate-400 mt-3">
                Immediate response from our Doha engineering team.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
