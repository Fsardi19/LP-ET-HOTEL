
import React from 'react';
import { DIRECTIONS, ASSETS } from '../constants';
import { MapPin, Navigation, Waves, Trees } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="relative rounded-[3rem] overflow-hidden group h-[500px]">
            <img src={ASSETS.LAGUNA} alt="Laguna de Pedro Palo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-white text-3xl font-serif mb-2 italic">Laguna de Pedro Palo</h3>
              <p className="text-white/70 text-sm uppercase tracking-widest">Entorno Ancestral</p>
            </div>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden group h-[500px]">
            <img src={ASSETS.CASCADA} alt="Cascada Natural" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-white text-3xl font-serif mb-2 italic">Salto de las Monjas</h3>
              <p className="text-white/70 text-sm uppercase tracking-widest">Pureza Natural</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-dark rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 blur-[100px] rounded-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif mb-10 italic">¿Cómo Llegar?</h2>
                    <div className="space-y-8">
                        {DIRECTIONS.map((dir, idx) => (
                            <div key={idx} className="flex gap-6 group items-start">
                                <span className="text-brand-pink font-serif text-3xl italic opacity-40 group-hover:opacity-100 transition-opacity">{idx + 1}.</span>
                                <p className="text-white/70 text-sm leading-relaxed pt-2 group-hover:text-white transition-colors">{dir}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 flex flex-col items-center justify-center text-center">
                    <Navigation className="w-16 h-16 text-brand-pink mb-10" />
                    <h3 className="text-3xl font-serif mb-6">Ubicación Estratégica</h3>
                    <p className="text-white/60 mb-12 text-sm leading-relaxed">
                        Estamos ubicados en el municipio de Zipacón, Cundinamarca. Un refugio de paz a solo 90 minutos de la capital.
                    </p>
                    <a 
                        href="https://maps.app.goo.gl/v8NZcqQDGpFoUfPV7" 
                        target="_blank" 
                        className="bg-brand-pink text-white px-12 py-5 font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-brand-pink transition-all shadow-xl"
                    >
                        Ver en Google Maps
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
