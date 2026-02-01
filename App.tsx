
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TourSection from './components/TourSection';
import LocationSection from './components/LocationSection';
import ConciergeChat from './components/ConciergeChat';
import Logo from './components/Logo';
import { BOOKING_URL, ASSETS, SOCIAL_LINKS, CONTACT_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-light selection:bg-brand-pink selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <TourSection />

        <Experience />

        {/* Sección de Educación y Eventos (Nuevos IDs de navegación) */}
        <section id="eventos" className="py-24 bg-brand-beige/10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-4">Servicios</h4>
                <h2 className="text-4xl font-serif text-brand-dark mb-12">Eventos Empresariales & Educación</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-12 rounded-[2rem] shadow-sm">
                        <h3 className="text-2xl font-serif mb-4">Eventos Corporativos</h3>
                        <p className="text-neutral-500 text-sm mb-6">Espacios únicos para equipos que buscan inspiración en la naturaleza.</p>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-pink font-bold text-[10px] uppercase tracking-widest border-b border-brand-pink pb-1">Solicitar Info</a>
                    </div>
                    <div id="educacion" className="bg-white p-12 rounded-[2rem] shadow-sm">
                        <h3 className="text-2xl font-serif mb-4">Educación Cafetera</h3>
                        <p className="text-neutral-500 text-sm mb-6">Cursos especializados en barismo, cata y procesos de café especial.</p>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-pink font-bold text-[10px] uppercase tracking-widest border-b border-brand-pink pb-1">Ver Cursos</a>
                    </div>
                </div>
            </div>
        </section>

        <LocationSection />
        
        {/* Call to Action Final */}
        <section className="relative py-40 overflow-hidden bg-brand-dark">
          <div className="absolute inset-0 z-0">
             <img src={ASSETS.CAFETALES} className="w-full h-full object-cover opacity-30" alt="Footer Background" />
             <div className="absolute inset-0 bg-brand-pink/20 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-5xl md:text-7xl font-serif mb-10 text-white italic leading-tight">Vive la Magia del <br/> Café Especial</h3>
            <p className="text-white/80 mb-16 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Donde la naturaleza y la innovación se unen para crear una experiencia transformadora en el corazón del bosque de niebla.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a 
                href={BOOKING_URL}
                className="bg-brand-pink text-white px-16 py-6 font-bold uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-brand-pink transition-all inline-block shadow-2xl"
              >
                Comprar Mi Ticket Ahora
              </a>
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Cupos Limitados</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-brand-dark py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <Logo variant="pink" className="w-16 h-16" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-white">LA PALMA & EL TUCÁN</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-brand-pink font-bold">Coffee Experience</span>
              </div>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed mb-10 text-sm font-light">
              Estamos ubicados en Zipacón, Cundinamarca, en medio de cafetales de agricultura regenerativa en la finca La Palma & El Tucán.
            </p>
            <div className="flex gap-10 text-white/40 font-bold text-[10px] uppercase tracking-widest">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">Instagram</a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">Facebook</a>
              <a href={SOCIAL_LINKS.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">Website</a>
            </div>
          </div>
          
          <div>
            <h5 className="text-brand-pink font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Explora</h5>
            <ul className="space-y-5 text-xs text-white/50 font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#tour" className="hover:text-white transition-colors">El Coffee Tour</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Gastronomía</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-brand-pink font-bold uppercase tracking-[0.3em] text-[10px] mb-10">Contacto</h5>
            <div className="text-white/50 text-xs leading-loose font-medium flex flex-col gap-2">
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phoneDisplay}</a>
              <p>{CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold">
                &copy; {new Date().getFullYear()} La Palma & El Tucán. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6">
                <span className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold italic">Green Travel Award Winner</span>
                <div className="w-px h-4 bg-white/10"></div>
                <span className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold">Sustainability First</span>
            </div>
        </div>
      </footer>

      <ConciergeChat />
    </div>
  );
};

export default App;
