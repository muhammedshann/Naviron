import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

const allCards = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-[#F3F5F2] text-fir rounded-t-[40px] sm:rounded-t-[56px] -mt-12 sm:-mt-16 relative z-70 shadow-[0_-15px_40px_rgba(0,0,0,0.06)] overflow-hidden border-t border-fir/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-fir/10 text-xs font-semibold text-fir/70 mb-4 shadow-sm">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-fir tracking-tight">
            Hear from our clients
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row — Auto-scrolling left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative w-full"
      >
        {/* Gradient edge faders */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-36 bg-gradient-to-r from-[#F3F5F2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-36 bg-gradient-to-l from-[#F3F5F2] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee marquee-track gap-4 sm:gap-6 w-max py-2">
          {allCards.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[280px] sm:w-[380px] flex-shrink-0 bg-white rounded-3xl p-5 sm:p-7 border border-fir/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote Text */}
              <div className="mb-6">
                <p className="text-[15px] text-fir leading-relaxed font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-4 border-t border-fir/10">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sage flex-shrink-0 shadow-sm">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-fir flex items-center gap-1">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-lfgreen-dark" />
                  </h4>
                  <p className="text-xs text-fir/50">
                    {item.role} &bull; {item.location || 'Qatar'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
