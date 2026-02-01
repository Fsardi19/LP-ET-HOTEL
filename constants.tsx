
import React from 'react';
import { NavLink, RoomType } from './types';
import { 
  Coffee, 
  MapPin, 
  Utensils,
  Sun,
  Wind,
  Glasses,
  Footprints,
  Waves
} from 'lucide-react';

export const ASSETS = {
  HERO_BG: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/hero-aerial.png",
  CAFETALES: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/cafetales.png",
  DEGUSTACION_CAFE: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/degustacion-cafe.png",
  PLANTA_CAFE: "https://res.cloudinary.com/dsylu9a7k/image/upload/a_-90/lpet/processing-station.png",
  TUCAN: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/tucan.png",
  COMIDA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/comida-farm-to-table.png",
  CABANA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/cabana-interior.png",
  CAMINATA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/caminata-bosque.png",
  CASCADA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/cascada.png",
  LAGUNA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/laguna-pedro-palo.png",
  HUERTA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/huerta.png",
  YOGA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/yoga.png",
  CABALGATA: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/cabalgata.png",
  EVENTOS: "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/eventos.png",
};

// LINKS PRINCIPALES DE RESERVA
// Corrección: Eliminados parámetros de sesión (ga_sess_id) para evitar errores de expiración
export const CLOUDBEDS_URL = "https://hotels.cloudbeds.com/en/reservation/yB0fEt";
export const BOOKING_URL = CLOUDBEDS_URL; 

// INFORMACIÓN DE CONTACTO
export const CONTACT_INFO = {
  email: "reservations@lapalmayeltucan.com",
  phone: "+573209306834",
  phoneDisplay: "(+57) 320 930 6834",
  address: "Zipacón, Cundinamarca, Colombia",
  googleMaps: "https://maps.app.goo.gl/v8NZcqQDGpFoUfPV7",
  whatsapp: "https://wa.me/573209306834"
};

// REDES SOCIALES
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/lapalmayeltucan_hotel/",
  facebook: "https://www.facebook.com/lapalmayeltucan/",
  website: "https://www.lapalmayeltucanhotel.com"
};

// MENÚ ACTUALIZADO SEGÚN SOLICITUD
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Alojamiento', href: CLOUDBEDS_URL },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Experiencias', href: '#tour' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#footer' },
];

export const TOUR_STEPS = [
  {
    title: "Origen y Plantación",
    description: "Recorre nuestros cafetales de agricultura regenerativa y aprende sobre las variedades más exclusivas del mundo.",
    image: ASSETS.CAFETALES
  },
  {
    title: "El Arte del Proceso",
    description: "Visita nuestra planta de procesamiento donde la innovación y la tradición se unen para crear perfiles únicos.",
    image: ASSETS.PLANTA_CAFE
  },
  {
    title: "Cata Sensorial",
    description: "Aprende a identificar las notas, aromas y acidez de un café especial galardonado internacionalmente.",
    image: ASSETS.DEGUSTACION_CAFE
  }
];

export const EXPERIENCE_HIGHLIGHTS = [
  { icon: <Footprints className="w-5 h-5" />, label: 'Caminata por el Bosque de Niebla', image: ASSETS.CAMINATA },
  { icon: <Utensils className="w-5 h-5" />, label: 'Almuerzo de Origen (Farm-to-Table)', image: ASSETS.COMIDA },
  { icon: <Sun className="w-5 h-5" />, label: 'Visita a nuestra Huerta Orgánica', image: ASSETS.HUERTA },
];

export const DIRECTIONS = [
  "Salida desde Bogotá por Calle 13 o Carrera 80 hacia Cachipay.",
  "Punto de referencia: Restaurante San Angelo Gourmet (antes de Cachipay).",
  "Desvío en el cruce de Macondo (500 mts).",
  "Paso por el cruce del Camino Real (Km 3.7 - Fundación Erika Verde).",
  "A 1km aprox. encontrarás el desvío señalizado hacia el hotel.",
];

export const ROOMS: RoomType[] = [
  {
    id: 'cabana-1',
    name: 'Cabaña Eco-Luxury',
    description: 'Nuestras cabañas insignia cuentan con materiales reciclables, tina privada, ducha al aire libre y una malla catamarán para relajarse sobre el bosque de niebla.',
    price: '$220',
    image: ASSETS.CABANA,
    amenities: ['Tina', 'Ducha Outdoor', 'Malla Catamarán']
  },
  {
    id: 'cabana-2',
    name: 'Suite del Cafetal',
    description: 'Rodeada de cafetales de agricultura regenerativa, esta suite ofrece total privacidad y una conexión profunda con el entorno natural de la finca.',
    price: '$280',
    image: ASSETS.CAFETALES,
    amenities: ['King Bed', 'Coffee Station', 'Malla Catamarán']
  },
  {
    id: 'cabana-3',
    name: 'Refugio de Niebla',
    description: 'Ubicada en la parte alta de la finca, ofrece vistas panorámicas impresionantes de las montañas de Zipacón y el místico bosque nuboso.',
    price: '$250',
    image: ASSETS.HERO_BG,
    amenities: ['Vista Panorámica', 'Tina', 'Diseño Eco']
  }
];
