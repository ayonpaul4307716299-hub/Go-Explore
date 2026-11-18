// import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaSearch, FaStar } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/10">
              <span className="flex text-amber-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </span>
              <span className="text-gray-200">Trusted by 10,000+ Travelers Worldwide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Unleash Your Wanderlust & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Explore the Wild</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal">
              Embark on hand-crafted journeys, explore breathtaking hidden gems, and experience unforgettable adventures with expert guides.
            </p>

            {/* Quick stats */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-white">450+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Destinations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12k+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Happy Tourists</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">98%</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Search Widget Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/25 p-6 sm:p-8 rounded-3xl shadow-2xl text-gray-900">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping"></span>
                Find Your Next Adventure
              </h3>

              <div className="space-y-4">
                {/* Destination Field */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3 shadow-inner">
                  <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Location</label>
                    <input 
                      type="text" 
                      placeholder="Where do you want to go?" 
                      className="w-full bg-transparent text-sm font-semibold text-gray-900 focus:outline-none placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Date Field */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3 shadow-inner">
                  <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl">
                    <FaCalendarAlt />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Date</label>
                    <input 
                      type="date" 
                      className="w-full bg-transparent text-sm font-semibold text-gray-900 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Travelers Field */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3 shadow-inner">
                  <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl">
                    <FaUserFriends />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Guests</label>
                    <select className="w-full bg-transparent text-sm font-semibold text-gray-900 focus:outline-none">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3-5 Guests</option>
                      <option>6+ Group</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-2xl transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transform hover:-translate-y-0.5">
                  <FaSearch /> Explore Tours
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}