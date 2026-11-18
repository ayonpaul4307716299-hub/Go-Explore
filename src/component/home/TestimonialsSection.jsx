import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Adventure Photographer',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    content: 'The Mystic Alps Hiking Expedition exceeded every expectation! The guide was incredibly knowledgeable, safety was prioritized, and the views were out of this world.',
    trip: 'Swiss Alps Hiking',
  },
  {
    id: 2,
    name: 'Liam Chen',
    role: 'Software Engineer',
    location: 'Vancouver, Canada',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    content: 'Booking was completely seamless. The Hidden Lagoon tour along the Amalfi coast gave us access to spots we would have never found on our own. Absolutely unforgettable.',
    trip: 'Amalfi Coast Escape',
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Travel Blogger',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    content: 'Sleeping under the stars in the Sahara was a bucket-list dream come true. The camp setup was luxurious, clean, and the hospitality was warm and genuine.',
    trip: 'Sahara Desert Safari',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            Traveler Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Loved By <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Adventurers</span> Worldwide
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Read real feedback from explorers who turned their dream vacations into lifelong memories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative bg-slate-900/60 border border-white/10 p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 group shadow-xl"
            >
              {/* Quote Icon Background Accent */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-emerald-500/10 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Content */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-4 relative z-10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/40"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" title="Verified Traveler" />
                  </h4>
                  <p className="text-xs text-slate-400 truncate">{item.role}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-[10px] font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    {item.trip}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}