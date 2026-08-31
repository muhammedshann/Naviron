import React from 'react';
import { motion } from 'framer-motion';

export default function PageHeader({ badge, title, highlightedTitle, titleEnd = '', subtitle }) {
  return (
    <section className="pt-8 pb-4 sm:pt-12 sm:pb-6 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-lfgreen/10 rounded-full blur-[140px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {badge && (
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage border border-fir/10 text-xs font-semibold text-fir/60 mb-4">
            {badge}
          </span>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-fir mb-6">
          {title}{' '}
          {highlightedTitle && <span className="text-3d-sm">{highlightedTitle}</span>}
          {titleEnd && ` ${titleEnd}`}
        </h1>

        {subtitle && (
          <p className="text-lg text-fir/50 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
