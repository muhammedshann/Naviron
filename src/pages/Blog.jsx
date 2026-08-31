import React, { useState } from 'react';
import { blogPosts } from '../data/content';
import PostModal from '../components/PostModal';
import CTABanner from '../components/CTABanner';
import { Search, Calendar, User, ArrowRight, BookOpen, Filter } from 'lucide-react';

export default function Blog({ onNavigate }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Project Spotlight', 'Insights & Strategy', 'Industry Standards', 'General'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-16">
      
      {/* Header */}
      <section className="py-16 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-teal/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 inline-block mb-4">
            Naviron Journal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Insights on Modern Construction Solutions
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Stay informed with engineering field studies, landmark project reflections, and industry best practices from Qatar's construction sector.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Chips */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 mr-2">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/20'
                      : 'glass-panel text-slate-300 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-cyan transition-colors"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 glass-panel rounded-3xl">
              <p className="text-slate-400 text-base">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="glass-panel rounded-3xl overflow-hidden cursor-pointer group flex flex-col hover:-translate-y-2 transition-all duration-300 glow-card border border-white/10"
                >
                  {/* Thumbnail */}
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-dark/80 backdrop-blur-md text-brand-cyan border border-white/10">
                      {post.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                        {post.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-brand-cyan" />
                        {post.author}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-3 group-hover:text-brand-cyan transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-brand-cyan group-hover:text-white transition-colors">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" />
                        <span>Read Full Article</span>
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full Screen Post Modal Reader */}
      {selectedPost && <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}

      {/* Bottom CTA Banner */}
      <CTABanner onNavigate={onNavigate} />

    </div>
  );
}
