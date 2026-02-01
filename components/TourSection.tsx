
import React from 'react';
import { TOUR_STEPS, BOOKING_URL, ASSETS } from '../constants';
import { Award, ChevronRight } from 'lucide-react';

const TourSection: React.FC = () => {
  return (
    <section id="tour" className="py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-4">La Experiencia</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Tu Día en la Finca</h2>
          <p className="text-neutral-600 font-light">Sumérgete en el mundo de los cafés especiales. Desde la cereza en el árbol hasta la taza perfecta.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOUR_STEPS.map((step, idx) => (
            <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-10">
                <span className="text-brand-pink font-bold text-[10px] uppercase tracking-widest mb-4 block">Paso {idx + 1}</span>
                <h3 className="text-2xl font-serif text-brand-dark mb-4">{step.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-brand-pink/5 rounded-[3rem] p-12 md:p-20">
            <div className="relative">
                {/* Ajustado a formato vertical aspect-[2/3] para que la imagen rotada se vea perfecta */}
                <div className="rounded-3xl shadow-2xl overflow-hidden aspect-[2/3] h-[650px] w-full border-4 border-white">
                  <img 
                      src={ASSETS.PLANTA_CAFE} 
                      alt="Planta de procesamiento"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-lg hidden md:block border border-brand-beige/20">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-brand-pink" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">World Class</p>
                      <p className="text-xs text-neutral-500 italic">Processing Station</p>
                    </div>
                  </div>
                </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6 leading-tight">Innovación técnica en <br/><span className="italic text-brand-pink">cada grano</span></h3>
              <p className="text-neutral-600 mb-8 leading-relaxed font-light text-lg">
                Nuestro Coffee Tour no es solo una caminata; es una inmersión técnica y sensorial profunda. Conoce nuestros procesos únicos de fermentación que nos han posicionado como líderes en la industria del café de especialidad.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Visita al Beneficio', 'Degustación de Lotes', 'Recorrido Cafetales', 'Bio-Sostenibilidad'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-dark bg-white p-4 rounded-xl border border-brand-beige/10 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-brand-pink"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 text-brand-pink font-bold uppercase text-[10px] tracking-widest border-b-2 border-brand-pink pb-2 hover:gap-4 transition-all"
              >
                Reservar Mi Lugar <ChevronRight className="w-4 h-4" />
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
