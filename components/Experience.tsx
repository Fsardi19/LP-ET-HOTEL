
import React from 'react';
import { EXPERIENCE_HIGHLIGHTS, ASSETS } from '../constants';
import { Utensils, Leaf, Footprints } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={ASSETS.HUERTA} className="rounded-2xl h-80 w-full object-cover" alt="Huerta Orgánica" />
              <img src={ASSETS.COMIDA} className="rounded-2xl h-80 w-full object-cover translate-y-12" alt="Comida Farm-to-Table" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-beige rounded-full flex items-center justify-center p-8 hidden lg:flex text-center">
               <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">100% Organico & Local</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-6">El Almuerzo</h4>
            <h2 className="text-5xl font-serif mb-8 leading-tight">De la Huerta <br/> a tu Mesa.</h2>
            <p className="text-neutral-600 text-lg mb-10 leading-relaxed font-light">
              Nuestra experiencia culinaria es una extensión de nuestra filosofía. Disfruta de un almuerzo artesanal preparado con ingredientes frescos cultivados en nuestra propia **huerta orgánica**.
            </p>
            
            <div className="space-y-6">
              {EXPERIENCE_HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-beige/20 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-xs mb-1">{item.label}</h5>
                    <p className="text-neutral-500 text-xs">Conexión genuina con la tierra y el entorno.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
