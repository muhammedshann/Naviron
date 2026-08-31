import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/content';
import { Building2, ShieldCheck, Truck, Wrench, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featureCards = [
    {
      id: 1,
      icon: Building2,
      target: 20,
      suffix: '+ Yrs',
      title: 'Civil Construction & Structures',
      subtitle: 'Ainsnan Partner Legacy',
      description: 'High-rise commercial towers, civic infrastructure, and heavy structural foundations built to strict Qatari engineering codes.',
      tags: ['Civil Engineering', 'Structural Concrete', 'High-Rise Construction'],
    },
    {
      id: 2,
      icon: Wrench,
      target: 98,
      suffix: '%',
      title: 'Facility Upkeep & Maintenance',
      subtitle: 'Asset Integrity Guarantee',
      description: 'Round-the-clock preventative upkeep, mechanical & HVAC servicing, and proactive facility preservation for long-term durability.',
      tags: ['Preventative Upkeep', 'Asset Integrity', '24/7 Response'],
    },
    {
      id: 3,
      icon: Truck,
      target: 50,
      suffix: '+ Vendors',
      title: 'Certified Material Procurement',
      subtitle: 'Global Supply Network',
      description: 'Direct procurement of certified building supplies, MEP hardware, and ISO-tested materials sourced globally for Qatari developments.',
      tags: ['Global Sourcing', 'ISO Certified', 'Customs Clearing'],
    },
    {
      id: 4,
      icon: ShieldCheck,
      target: 150,
      suffix: '+ Milestones',
      title: 'Strategic Project Management',
      subtitle: 'Qatar Vision 2030 Focus',
      description: 'Full lifecycle supervision, quality assurance oversight, and on-time project execution backed by over two decades of experience.',
      tags: ['Vision 2030', 'QC Supervision', 'On-Time Handover'],
    },
  ];

  const sectors = [
    'Commercial High-Rises',
    'Public Infrastructure',
    'Industrial & Logistics Parks',
    'Luxury Hospitality',
    'Residential Compounds',
    'Civic Energy Works',
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-[#F3F5F2] text-fir rounded-t-[40px] sm:rounded-t-[56px] -mt-12 sm:-mt-16 relative z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.06)] overflow-hidden border-t border-fir/10"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lfgreen/15 rounded-full blur-[140px] transform-gpu backface-visibility-hidden pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-mint/20 rounded-full blur-[140px] transform-gpu backface-visibility-hidden pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-fir/10 text-xs font-semibold text-fir/70 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-lfgreen-dark" />
            <span>Engineering & Operational Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-fir mb-6 tracking-tight">
            Proven Industry Impact Across <span className="text-3d-sm">Qatar</span>
          </h2>
          <p className="text-fir/60 text-base sm:text-lg leading-relaxed font-normal">
            Rooted in over 20 years of trusted operations, driving infrastructure progress through certified materials, civil precision, and turnkey support.
          </p>
        </motion.div>

        {/* 4 Interactive Light Capability Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-fir/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Metric */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-fir/5">
                    <div className="w-12 h-12 rounded-2xl bg-lfgreen/15 border border-lfgreen/30 flex items-center justify-center text-lfgreen-dark group-hover:scale-110 group-hover:bg-lfgreen group-hover:text-fir transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-fir">
                        <Counter target={card.target} inView={inView} suffix={card.suffix} />
                      </div>
                      <span className="text-[10px] uppercase font-bold text-fir/40 tracking-wider">
                        {card.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-fir mb-2.5 group-hover:text-lfgreen-dark transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-fir/60 leading-relaxed font-normal mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Feature Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-fir/5">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold text-fir/70 bg-sage px-2.5 py-1 rounded-full border border-fir/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Sector Focus Ticker Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-fir/10 shadow-sm flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-fir/60"
        >
          <span className="text-fir/40 font-bold uppercase tracking-wider text-[11px]">
            Serving Key Qatari Sectors:
          </span>
          {sectors.map((sec, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-lfgreen-dark" />
              <span>{sec}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function Counter({ target, inView, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1800; // ms
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(update);
  }, [inView, target]);

  return (
    <span>
      {count}
      <span className="text-lfgreen-dark text-xl sm:text-2xl font-bold ml-0.5">{suffix}</span>
    </span>
  );
}
