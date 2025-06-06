import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import CampusDetailSection from "@/components/sections/CampusDetailSection";
import AccommodationSection from "@/components/sections/AccommodationSection";
import { madridAccommodations } from "@/data/accommodationData";
import SEO from "@/components/shared/SEO";
import ContactoSection from "@/components/sections/ContactoSection";

const MadridCampus = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  const images = [
    {
      src: "/images/carousel-madrid/01. TWR 2 - Nelso Madrid.jpg",
      alt: "Simuladores de torre en Nelso Madrid"
    },
    {
      src: "/images/carousel-madrid/02. TWR - Nelso Madrid.jpg",
      alt: "Aula de simuladores en Nelso Madrid"
    },
    {
      src: "/images/carousel-madrid/03. Radar - Nelso Madrid.jpg",
      alt: "Simuladores de radar en Nelso Madrid"
    },
    {
      src: "/images/carousel-madrid/04. Pedro - Nelso Madrid.jpg",
      alt: "Instructor explicando en Nelso Madrid"
    },
    {
      src: "/images/carousel-madrid/05. TWR panoramica - Nelso Madrid.jpg",
      alt: "Vista panorámica de simuladores en Nelso Madrid"
    }
  ];
  
  const highlights = isSpanish 
    ? [
        "Ubicación estratégica cerca del aeropuerto Adolfo Suárez Madrid-Barajas",
        "Simuladores de torre de última generación con visión 360°",
        "Simuladores de aproximación con pantallas táctiles de alta resolución",
        "Aulas equipadas con tecnología audiovisual avanzada",
        "Sala de briefing para preparación y análisis de ejercicios",
        "Excelentes conexiones de transporte público",
        "Instalaciones modernas y confortables",
        "Experiencia inmersiva de control de tráfico aéreo"
      ]
    : [
        "Strategic location near Adolfo Suárez Madrid-Barajas Airport",
        "State-of-the-art tower simulators with 360° vision",
        "Approach simulators with high-resolution touch screens",
        "Classrooms equipped with advanced audiovisual technology",
        "Briefing room for exercise preparation and analysis",
        "Excellent public transportation connections",
        "Modern and comfortable facilities",
        "Immersive air traffic control experience"
      ];
      
  return (
    <>
      <SEO 
        title={isSpanish 
          ? "Centro de Formación Madrid | Nelso Formación" 
          : "Madrid Training Center | Nelso Formación"}
        description={isSpanish 
          ? "Descubre nuestro centro de formación para controladores aéreos en Madrid con simuladores de última generación y ubicación estratégica cerca del aeropuerto." 
          : "Discover our air traffic controller training center in Madrid with state-of-the-art simulators and strategic location near the airport."}
        keywords={isSpanish 
          ? "centro formación ATC Madrid, simuladores control aéreo, formación controladores Madrid" 
          : "ATC training center Madrid, air traffic control simulators, controller training Madrid"}
        path="/madrid"
        image="/images/og/madrid-og.jpg"
      />
      <CampusDetailSection 
        campus="madrid" 
        images={images} 
        highlights={highlights} 
      />
      <AccommodationSection accommodations={madridAccommodations} />
      <ContactoSection location="madrid" />
    </>
  );
};

export default MadridCampus;
