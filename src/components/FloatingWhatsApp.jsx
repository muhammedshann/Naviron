import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const quickPrompts = [
    'I need a quote for Civil Construction in Qatar',
    'Inquiring about Infrastructure Maintenance',
    'Specialized Trading and Materials inquiry',
    'Requesting engineering project support',
  ];

  const handleSend = (text) => {
    const messageToSend = text || msg || 'Hello Naviron, I would like to inquire about your services.';
    window.open(`https://wa.me/97450909707?text=${encodeURIComponent(messageToSend)}`, '_blank');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-white border border-gray-200 p-5 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Naviron WhatsApp</h4>
                <span className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Engineering Desk Online
                </span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mb-3">Select a topic or type your message:</p>
          <div className="space-y-1.5 mb-4">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="w-full text-left p-2.5 rounded-xl text-xs text-gray-700 hover:text-brand-dark bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 transition-colors flex items-center justify-between group"
              >
                <span className="truncate">{prompt}</span>
                <Send className="w-3 h-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type custom inquiry..."
              className="flex-grow text-xs p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={() => handleSend()} className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-ping" />
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
