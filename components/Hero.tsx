
import React from 'react';
import { BOOKING_URL, ASSETS } from '../constants';
import { ArrowRight, MapPin, Coffee as CoffeeIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={ASSETS.HERO_BG} 
          className="w-full h-full object-cover"
          alt="Vista aérea La Palma & El Tucán"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-pink text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-8 animate-fade-in">
            <CoffeeIcon className="w-3.5 h-3.5" /> Coffee Tour & Estancia Luxury
          </div>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[1.05] text-white">
            Un Viaje al <br /> <span className="italic text-brand-beige">Origen del Café.</span>
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-xl font-light leading-relaxed">
            Descubre los secretos de una finca de talla mundial. Recorre nuestros cafetales y vive una experiencia sensorial inolvidable a solo 90 minutos de Bogotá.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={BOOKING_URL}
              className="bg-brand-pink text-white px-10 py-5 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:scale-105 hover:bg-white hover:text-brand-pink transition-all shadow-2xl"
            >
              Comprar Mi Ticket
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-4 text-white/80 px-6 py-4 glass-morphism rounded-xl">
              <MapPin className="w-5 h-5 text-brand-pink" />
              <span className="text-xs uppercase tracking-widest font-medium">Zipacón, Cundinamarca</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="w-px h-10 bg-white/20"></div>
      </div>
    </section>
  );
};

export default Hero;
