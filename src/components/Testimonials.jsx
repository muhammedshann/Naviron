import React from 'react';
import { testimonials } from '../data/content';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

// We'll duplicate cards for the infinite marquee effect
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

// Additional testimonials to fill up the marquee
const additionalQuotes = [
  {
    id: 3,
    name: 'Mohammed Al-Kuwari',
    role: 'Infrastructure Director',
    location: 'Doha, Qatar',
    avatar: '/assets/images/testimonial-skip-01.jpg',
    quote: 'Naviron delivered our maintenance project ahead of schedule. Their attention to detail and proactive communication made the entire process seamless.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Fatima Al-Thani',
    role: 'Procurement Manager',
    location: 'Qatar',
    avatar: '/assets/images/testimonial-skip-02.jpg',
    quote: 'The specialized trading solutions from Naviron gave us access to certified materials that exceeded international quality standards. A reliable partner for any scale.',
    rating: 5,
  },
];

const allCards = [...testimonials, ...additionalQuotes, ...testimonials, ...additionalQuotes];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-brand-600 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-dark">
            Hear from our clients
          </h2>
        </div>
      </div>

      {/* Marquee Row - Auto-scrolling left */}
      <div className="relative w-full">
        {/* Gradient faders on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee marquee-track gap-6 w-max">
          {allCards.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[380px] flex-shrink-0 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Quote Text */}
              <div className="mb-6">
                <p className="text-[15px] text-gray-700 leading-relaxed font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark flex items-center gap-1">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                  </h4>
                  <p className="text-xs text-gray-400">
                    {item.role} &bull; {item.location || 'Qatar'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
