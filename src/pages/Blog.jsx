import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { blogPosts } from '../data/content';
import PostModal from '../components/PostModal';
import CTABanner from '../components/CTABanner';
import { Search, BookOpen, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Blog({ onNavigate }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Project Spotlight', 'Insights & Strategy', 'Industry Standards'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-20 sm:pt-24">
      {/* Header Banner */}
      <PageHeader
        badge="Naviron Journal"
        title="Insights on Modern"
        highlightedTitle="Construction"
        titleEnd="Solutions"
        subtitle="Stay informed with engineering field studies, landmark project reflections, and industry best practices from Qatar's construction sector."
      />

      {/* Filter & Search Bar */}
      <section className="pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-sage p-4 sm:p-6 rounded-3xl border border-fir/5 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            {/* Category Chips */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-fir/40 mr-2">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-lfgreen text-fir shadow-md'
                      : 'bg-white text-fir/50 hover:text-fir border border-fir/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-fir/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-fir/10 rounded-xl text-xs text-fir placeholder-fir/30 focus:outline-none focus:border-lfgreen-dark transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pt-2 pb-24 sm:pb-36 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-sage rounded-3xl">
                <p className="text-fir/40 text-base">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="space-y-16">
                {/* Featured Section Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* 1. Large Featured Article (Left) */}
                  {filteredPosts[0] && (
                    <div
                      onClick={() => setSelectedPost(filteredPosts[0])}
                      className="lg:col-span-7 group cursor-pointer"
                    >
                      <div className="bg-[#EAF3E7] p-4 sm:p-6 rounded-[32px] mb-6 overflow-hidden border border-fir/5 group-hover:shadow-lg transition-all duration-300">
                        <div className="h-[300px] sm:h-[380px] rounded-2xl overflow-hidden relative">
                          <img
                            src={filteredPosts[0].image}
                            alt={filteredPosts[0].title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-extrabold text-fir/50 mb-3 tracking-wide">
                        <BookOpen className="w-4 h-4 text-lfgreen-dark" />
                        <span>Guide &bull; {filteredPosts[0].date} &bull; 3 min read</span>
                      </div>

                      <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-fir mb-4 group-hover:text-lfgreen-dark transition-colors leading-tight">
                        {filteredPosts[0].title}
                      </h2>

                      <p className="text-sm sm:text-base text-fir/60 leading-relaxed mb-6 font-normal line-clamp-3">
                        {filteredPosts[0].excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-fir/20 text-fir/70 bg-white">
                          {filteredPosts[0].category}
                        </span>
                        <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-fir/20 text-fir/70 bg-white">
                          Qatar Construction
                        </span>
                        <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-fir/20 text-fir/70 bg-white">
                          Engineering
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 2. Secondary Stacked Articles (Right) */}
                  <div className="lg:col-span-5 space-y-10">
                    {filteredPosts.slice(1, 3).map((post, idx) => (
                      <div
                        key={post.id}
                        onClick={() => setSelectedPost(post)}
                        className="group cursor-pointer border-b border-fir/10 pb-8 last:border-b-0 last:pb-0"
                      >
                        <div className={`p-3 rounded-2xl mb-4 border border-fir/5 overflow-hidden ${
                          idx === 1 ? 'bg-[#DFEBDC]' : 'bg-sage/70'
                        }`}>
                          <div className="h-44 rounded-xl overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-bold text-fir/50 mb-2">
                          <BookOpen className="w-3.5 h-3.5 text-lfgreen-dark" />
                          <span>Article &bull; {post.date}</span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold font-display text-fir mb-2 group-hover:text-lfgreen-dark transition-colors leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-fir/60 leading-relaxed mb-4 line-clamp-2 font-normal">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-fir/20 text-fir/70 bg-white">
                            {post.category}
                          </span>
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-fir/20 text-fir/70 bg-white">
                            Insights
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Additional Posts Grid (if any) */}
                {filteredPosts.length > 3 && (
                  <div className="pt-10 border-t border-fir/10">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-fir/40 mb-8">
                      More Articles &amp; Case Studies
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredPosts.slice(3).map((post) => (
                        <article
                          key={post.id}
                          onClick={() => setSelectedPost(post)}
                          className="bg-white rounded-3xl overflow-hidden cursor-pointer group flex flex-col hover:-translate-y-1.5 transition-all duration-300 border border-fir/10 hover:shadow-xl p-5"
                        >
                          <div className="h-48 rounded-2xl overflow-hidden relative mb-4">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>

                          <div className="flex items-center gap-2 text-xs font-bold text-fir/50 mb-2">
                            <BookOpen className="w-3.5 h-3.5 text-lfgreen-dark" />
                            <span>{post.date}</span>
                          </div>

                          <h4 className="text-lg font-bold font-display text-fir mb-2 group-hover:text-lfgreen-dark transition-colors line-clamp-2">
                            {post.title}
                          </h4>

                          <p className="text-xs text-fir/60 leading-relaxed mb-4 font-normal line-clamp-2 flex-grow">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-fir/5">
                            <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border border-fir/20 text-fir/70 bg-sage">
                              {post.category}
                            </span>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Full Screen Post Modal Reader */}
      {selectedPost && <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />}

      {/* Bottom CTA Banner */}
      <CTABanner onNavigate={onNavigate} />
    </div>
  );
}
