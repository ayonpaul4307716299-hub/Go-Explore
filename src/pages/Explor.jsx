import { useState } from 'react';
import { MapPin, Calendar, Users, Compass, Globe, Mountain, Sun, Waves } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Adventures', icon: Compass },
  { id: 'mountain', label: 'Mountains', icon: Mountain },
  { id: 'beach', label: 'Beaches', icon: Waves },
  { id: 'desert', label: 'Deserts', icon: Sun },
  { id: 'culture', label: 'Culture', icon: Globe },
];

export default function ExploreSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2 Guests');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ location, date, guests, category: activeCategory });
    // Add your search or routing logic here
  };

  return (
    <section className="relative bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-4 h-4 animate-spin-slow" />
            Trusted by 10,000+ Travelers Worldwide
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Unleash Your Wanderlust & <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Explore the Wild</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Embark on hand-crafted journeys, explore breathtaking hidden gems, and experience unforgettable adventures with expert guides.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12 text-center">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400">450+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">DESTINATIONS</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400">12k+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">HAPPY TOURISTS</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400">98%</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">SATISFACTION</div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-400'}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Advanced Search Bar Component */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-white/10 p-4 sm:p-6 rounded-3xl backdrop-blur-xl shadow-2xl">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            {/* Location Input */}
            <div className="space-y-1.5 px-3 py-2 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/50 transition-colors group">
              <label className="block text-[10px] font-bold tracking-wider text-emerald-400 uppercase">Location</label>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Date Input */}
            <div className="space-y-1.5 px-3 py-2 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/50 transition-colors group">
              <label className="block text-[10px] font-bold tracking-wider text-emerald-400 uppercase">Date</label>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none scheme-dark"
                />
              </div>
            </div>

            {/* Guests Selector */}
            <div className="space-y-1.5 px-3 py-2 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/50 transition-colors group">
              <label className="block text-[10px] font-bold tracking-wider text-emerald-400 uppercase">Guests</label>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-sm text-white focus:outline-none [&>option]:bg-slate-900"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="3-5 Guests">3-5 Guests</option>
                  <option value="6+ Group">6+ Group</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full h-full min-h-[56px] flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold px-6 py-4 rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <Compass className="w-5 h-5" />
                Explore Tours
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}