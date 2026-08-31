import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../data/content';
import { TrendingUp, Users, ThumbsUp, Shield } from 'lucide-react';

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [ThumbsUp, Users, TrendingUp, Shield];

  return (
    <section ref={sectionRef} className="py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.id}
                className="glass-panel p-6 rounded-3xl glow-card hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-cyan/80 bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/20">
                    Verified
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-2">
                  <Counter target={item.value} inView={inView} suffix={item.suffix} />
                </div>

                <h3 className="text-base font-bold text-white mb-1">{item.label}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, inView, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
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
      <span className="text-brand-cyan text-3xl sm:text-4xl font-normal ml-0.5">{suffix}</span>
    </span>
  );
}
