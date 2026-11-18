import { useState } from 'react';
import { Star, MapPin, ArrowRight, Heart, Clock } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Mystic Alps Hiking Expedition',
    location: 'Swiss Alps, Switzerland',
    rating: 4.9,
    reviews: 128,
    duration: '4 Days / 3 Nights',
    price: '$749',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    tag: 'Bestseller',
  },
  {
    id: 2,
    title: 'Hidden Lagoon & Coastal Escape',
    location: 'Amalfi Coast, Italy',
    rating: 4.8,
    reviews: 94,
    duration: '3 Days / 2 Nights',
    price: '$590',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    tag: 'Trending',
  },
  {
    id: 3,
    title: 'Sahara Starry Night Safari',
    location: 'Merzouga Desert, Morocco',
    rating: 5.0,
    reviews: 210,
    duration: '2 Days / 1 Night',
    price: '$420',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800',
    tag: 'Popular',
  },
];

export default function FeaturedDestinations() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.preventDefault();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              Curated Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Handpicked <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Adventures</span> For You
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Discover top-rated journeys chosen by our travel experts for unmatched scenery, comfort, and thrill.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all duration-300 group">
            View All Packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((item) => {
            const isFav = favorites[item.id];
            return (
              <div 
                key={item.id} 
                className="group relative bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-xl"
              >
                {/* Image & Top Badges Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Tag Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-bold tracking-wide">
                    {item.tag}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => toggleFavorite(item.id, e)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-white hover:scale-110 transition-transform"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                  </button>

                  {/* Duration Badge at Bottom of Image */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-950/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    {item.duration}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-cyan-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Footer Row: Ratings & Price */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-white">{item.rating}</span>
                      <span className="text-xs text-slate-400">({item.reviews})</span>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Starting from</div>
                      <div className="text-lg font-extrabold text-emerald-400">{item.price}</div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}