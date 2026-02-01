
import React from 'react';
import { ROOMS, CLOUDBEDS_URL } from '../constants';
import { ArrowRight } from 'lucide-react';

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Designed for <br />Indulgence.</h2>
            {/* Fix: Corrected hotel name from Click Clack to La Palma & El Tucán */}
            <p className="text-neutral-400 font-light">
              Every room at La Palma & El Tucán is a masterpiece of eco-luxury aesthetics and modern comfort. Choose the space that fuels your inspiration.
            </p>
          </div>
          <a href={CLOUDBEDS_URL} className="text-sm uppercase tracking-[0.2em] font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 border-b border-white/20 pb-2">
            View All Accommodations <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div key={room.id} className="group relative overflow-hidden bg-neutral-900 flex flex-col h-full">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-2 text-xs font-bold tracking-widest uppercase">
                  From {room.price}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif mb-3">{room.name}</h3>
                <p className="text-neutral-400 text-sm mb-6 flex-grow leading-relaxed">
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {room.amenities.map(amenity => (
                    <span key={amenity} className="text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1 text-neutral-500">
                      {amenity}
                    </span>
                  ))}
                </div>
                <a 
                  href={CLOUDBEDS_URL}
                  target="_blank"
                  className="w-full py-4 text-center border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                >
                  Book this room
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
