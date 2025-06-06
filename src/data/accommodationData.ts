interface Accommodation {
  name: string;
  description: {
    es: string;
    en: string;
  };
  logoSrc: string;
  imageSrc: string;
  website?: string;
  phone?: string;
  contact?: {
    es: string;
    en: string;
  };
}

export const madridAccommodations: Accommodation[] = [
  {
    name: "Residencia Tagaste",
    description: {
      es: "Ambiente tranquilo y familiar cerca de nuestras instalaciones. Dispone de habitaciones individuales completamente equipadas y zonas comunes renovadas.",
      en: "Quiet and family atmosphere near our facilities. Features fully equipped single rooms and renovated common areas."
    },
    logoSrc: "/images/accomodation/madrid/logo-tagaste.png",
    imageSrc: "/images/accomodation/madrid/tagaste.jpg",
    website: "https://tagaste.com/residencia-universitaria-madrid",
    phone: "+34 647 904 401",
    contact: {
      es: "Tarifas especiales para estudiantes de Nelso",
      en: "Special rates for Nelso students"
    }
  },
  {
    name: "Apartahotel Tijcal",
    description: {
      es: "Residencia moderna con excelente ubicación. Ofrece habitaciones confortables, áreas de estudio y servicios completos de restauración.",
      en: "Modern residence with excellent location. Offers comfortable rooms, study areas and complete catering services."
    },
    logoSrc: "/images/accomodation/madrid/logo-tijcal.png",
    imageSrc: "/images/accomodation/madrid/tijcal.png",
    website: "https://www.apartahotelavenidadeamerica.com/",
    phone: "+34 912 67 04 85",
    contact: {
      es: "Descuentos disponibles para estancias largas",
      en: "Discounts available for long stays"
    }
  },
  {
    name: "Inmobiliaria Jorsa",
    description: {
      es: "Ofrece estudios universitarios preparados para estudiantes en Madrid. Jorsa Inmobiliaria te ofrece alojamientos con unos beneficios gracias al acuerdo con Nelso para tu estancia mientras realizas los cursos de licencias.",
      en: "Offers university studios prepared for students in Madrid. Jorsa Inmobiliaria provides accommodations with benefits thanks to the agreement with Nelso for your stay while taking license courses."
    },
    logoSrc: "/images/accomodation/madrid/logo-jorsa.jpg",
    imageSrc: "/images/accomodation/madrid/jorsa.jpg",
    phone: "+34 917 26 15 03",
    contact: {
      es: "Mencionar 'Estudiante de Nelso' al contactar",
      en: "Mention 'Nelso Student' when contacting"
    }
  }
];
