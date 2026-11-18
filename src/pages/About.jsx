// import React from 'react';
import { Compass, Globe, ShieldCheck, HeartHandshake } from 'lucide-react';

const About =()=> {
  return (
     <div className="bg-[#0b1329] text-white min-h-screen font-sans">
      
      {/* Hero Section */}
       <section className="relative py-20 px-6 lg:px-24 text-center bg-gradient-to-b from-[#0f1c3f] to-[#0b1329]">
         <span className="text-emerald-400 font-semibold tracking-widest text-sm uppercase bg-emerald-950/50 px-4 py-1.5 rounded-full border border-emerald-800/40">
           Who We Are
         </span>
         <h1 className="text-4xl lg:text-6xl font-extrabold mt-6 mb-4 max-w-3xl mx-auto leading-tight">
           Pioneering Unforgettable Adventures Across the Globe
         </h1>
         <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
           At Go Explore, we believe travel isn't just about visiting a place—it's about transforming how you see the world. We craft immersive journeys that connect you with nature, culture, and yourself.
         </p>
       </section>

       {/* Stats Section */}
       {/* <section className="py-12 px-6 lg:px-24 border-y border-gray-800/60 bg-[#0d1733]">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div className="p-6">
             <h3 className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">450+</h3>
             <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">Destinations Worldwide</p>
           </div>
           <div className="p-6 border-y md:border-y-0 md:border-x border-gray-800/60">
             <h3 className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">12k+</h3>
             <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">Happy Tourists</p>
           </div>
           <div className="p-6">
             <h3 className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">98%</h3>
             <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">Satisfaction Rate</p>
           </div>
         </div>
       </section> */}

       {/* Our Mission & Vision */}
       <section className="py-20 px-6 lg:px-24 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div>
           <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission is to Inspire Your Next Great Story</h2>
           <p className="text-gray-300 mb-4 leading-relaxed">
             Founded by passionate globetrotters, Go Explore was born out of a desire to ditch cookie-cutter tourism in favor of authentic, soulful travel experiences. 
           </p>
           <p className="text-gray-300 mb-6 leading-relaxed">
             Whether you are scaling rugged mountain trails or seeking quiet hidden gems off the beaten path, our expert guides ensure every step of your journey is safe, enriching, and deeply memorable.
           </p>
           <div className="flex items-center gap-4 text-emerald-400 font-semibold">
             <Compass className="w-6 h-6" />
             <span>Hand-Crafted Itineraries Tailored For You</span>
           </div>
         </div>
         <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/25 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
           <h3 className="text-2xl font-bold mb-4">Why Travel With Us?</h3>
           <ul className="space-y-4 text-gray-300">
             <li className="flex items-start gap-3">
               <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
               <span><strong>Certified Expert Guides:</strong> Local insights and top-tier safety standards on every trip.</span>
             </li>
             <li className="flex items-start gap-3">
               <Globe className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
               <span><strong>Sustainable Tourism:</strong> We protect local ecosystems and empower indigenous communities.</span>
             </li>
             <li className="flex items-start gap-3">
               <HeartHandshake className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
               <span><strong>24/7 Traveler Support:</strong> We are with you from the moment you book until you return home.</span>
             </li>
           </ul>
         </div>
       </section>

       {/* Call to Action Banner */}
       <section className="py-16 px-6 lg:px-24 text-center bg-gradient-to-t from-[#0f1c3f] to-[#0b1329] border-t border-gray-800/60">
         <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Adventure?</h2>
         <p className="text-gray-300 mb-8 max-w-xl mx-auto">
           Explore our hand-crafted destinations and find the journey that calls your name.
         </p>
         <a 
           href="/explor" 
           className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30"
         >
           Explore Tours
         </a>
       </section>

     </div>
   );

        
}
export default About 
