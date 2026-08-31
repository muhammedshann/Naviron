import React, { useState } from 'react';
import { X, Calendar, User, Tag, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

export default function PostModal({ post, onClose }) {
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentMsg, setCommentMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!post) return null;

  const handleSubmitComment = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setCommentName('');
      setCommentEmail('');
      setCommentMsg('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div
        className="relative w-full max-w-4xl bg-[#0c121e] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c121e]/90 backdrop-blur-md border-b border-white/10">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
          
          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="px-3 py-1 bg-brand-teal/20 text-brand-cyan rounded-full border border-brand-teal/30 font-semibold">
              {post.category}
            </span>
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

          <h1 className="text-2xl sm:text-4xl font-display font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-8 border border-white/10 max-h-[420px]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            {post.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Interactive Comment Form Section */}
          <div className="mt-14 pt-10 border-t border-white/10">
            <h3 className="text-xl font-bold font-display text-white mb-2">Leave a Comment</h3>
            <p className="text-xs text-slate-400 mb-6">
              Your email address will not be published. Required fields are marked *
            </p>

            {submitted ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold">
                  Thank you! Your comment has been received and is awaiting moderation.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmitComment} className="space-y-4">
                <div>
                  <textarea
                    rows={4}
                    value={commentMsg}
                    onChange={(e) => setCommentMsg(e.target.value)}
                    required
                    placeholder="Share your thoughts or inquiries..."
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    required
                    placeholder="Your Name *"
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors text-sm"
                  />
                  <input
                    type="email"
                    value={commentEmail}
                    onChange={(e) => setCommentEmail(e.target.value)}
                    required
                    placeholder="Your Email *"
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-teal to-brand-cyan text-brand-dark hover:from-white hover:to-brand-cyan shadow-lg shadow-brand-teal/20 transition-all hover:scale-105"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Comment</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
