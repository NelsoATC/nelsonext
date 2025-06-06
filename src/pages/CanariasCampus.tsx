import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import CampusDetailSection from "@/components/sections/CampusDetailSection";
import SEO from "@/components/shared/SEO";
import ContactoSection from "@/components/sections/ContactoSection";

const CanariasCampus = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  const images = [
    {
      src: "/images/carousel-canarias/01. Radar Sim 2 - Render Nelso Canarias.jpg",
      alt: "Simuladores de radar en Nelso Canarias"
    },
    {
      src: "/images/carousel-canarias/02. Aula Blanca - Render Nelso Canarias.jpg",
      alt: "Aula en Nelso Canarias"
    },
    {
      src: "/images/carousel-canarias/03. Sala Pseudopilotos - Render Nelso Canarias.jpg",
      alt: "Sala de pseudopilotos en Nelso Canarias"
    },
    {
      src: "/images/carousel-canarias/04. Despacho - Render Nelso Canarias.jpg",
      alt: "Despacho en Nelso Canarias"
    },
    {
      src: "/images/carousel-canarias/05. Recepción - Render Nelso Canarias.jpg",
      alt: "Recepción de Nelso Canarias"
    }
  ];
  
  const highlights = isSpanish 
    ? [
        "Primera escuela de controladores aéreos de Canarias",
        "Simuladores de torre y aproximación de última generación",
        "Ubicación estratégica en un hub internacional de tráfico aéreo",
        "Instalaciones modernas diseñadas específicamente para la formación ATC",
        "Salas de pseudopilotos equipadas con tecnología avanzada",
        "Entorno de aprendizaje inmersivo para escenarios complejos",
        "Tecnología adaptada a las especificidades del espacio aéreo canario",
        "Proximidad a aeropuertos con alta densidad de tráfico turístico"
      ]
    : [
        "First air traffic controller school in the Canary Islands",
        "State-of-the-art tower and approach simulators",
        "Strategic location in an international air traffic hub",
        "Modern facilities specifically designed for ATC training",
        "Pseudo-pilot rooms equipped with advanced technology",
        "Immersive learning environment for complex scenarios",
        "Technology adapted to the specificities of Canary Islands airspace",
        "Proximity to airports with high tourist traffic density"
      ];
      
  return (
    <>
      <SEO 
        title={isSpanish 
          ? "Centro de Formación Gran Canaria | Nelso Formación" 
          : "Gran Canaria Training Center | Nelso Formación"}
        description={isSpanish 
          ? "Descubre nuestro centro de formación para controladores aéreos en Gran Canaria con simuladores de última generación y ubicación estratégica." 
          : "Discover our air traffic controller training center in Gran Canaria with state-of-the-art simulators and strategic location."}
        keywords={isSpanish 
          ? "centro formación ATC Canarias, simuladores control aéreo, formación controladores Gran Canaria" 
          : "ATC training center Canary Islands, air traffic control simulators, controller training Gran Canaria"}
        path="/canarias"
        image="/images/og/canarias-og.jpg"
      />
      <CampusDetailSection 
        campus="canarias" 
        images={images} 
        highlights={highlights} 
      />
      <ContactoSection location="canarias" />
    </>
  );
};

export default CanariasCampus;
