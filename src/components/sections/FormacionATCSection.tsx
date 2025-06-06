
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import AlumniCarousel from "@/components/courses/AlumniCarousel";

// Import the refactored components
import SectionHeader from "@/components/formacion-atc/SectionHeader";
import ModuleCard from "@/components/formacion-atc/ModuleCard";
import LicensesInfoSection from "@/components/formacion-atc/LicensesInfoSection";
import MethodologySection from "@/components/formacion-atc/MethodologySection";

const FormacionATCSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // Module 1 items - corrected "básica" with an "á" and removed "3D" from tower simulator
  const module1Items = [
    isSpanish ? "Formación básica en control de aeródromo" : "Basic training in aerodrome control",
    isSpanish ? "Procedimientos de torre y comunicaciones" : "Tower procedures and communications",
    isSpanish ? "Prácticas en simulador de torre" : "Practice in tower simulator"
  ];

  // Module 2 items - changed "área" to "ruta"
  const module2Items = [
    isSpanish ? "Control de aproximación radar y procedimientos" : "Radar approach control and procedures",
    isSpanish ? "Control de ruta y gestión del tráfico aéreo" : "Route control and air traffic management",
    isSpanish ? "Prácticas intensivas en simuladores de radar" : "Intensive practice in radar simulators"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader isSpanish={isSpanish} />

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <Link to="/bloque-1-licencia-torre" className="block">
            <ModuleCard 
              moduleNumber="1"
              title={isSpanish ? "Básica y Torre" : "Basic and Tower"}
              description={isSpanish ? "6 meses (más de 350 horas)" : "6 months (more than 350 hours)"}
              items={module1Items}
              isPrimaryModule={true}
              isSpanish={isSpanish}
              isBloque={true}
            />
          </Link>
          
          <Link to="/bloque-2-licencias-ruta-aproximacion" className="block">
            <ModuleCard 
              moduleNumber="2"
              title={isSpanish ? "Ruta y Aproximación" : "Route and Approach"}
              description={isSpanish ? "6 meses (más de 450 horas)" : "6 months (more than 450 hours)"}
              items={module2Items}
              isPrimaryModule={false}
              isSpanish={isSpanish}
              isBloque={true}
            />
          </Link>
        </div>

        <Link to="/habilitacion-completa">
          <LicensesInfoSection isSpanish={isSpanish} />
        </Link>
        
        <MethodologySection isSpanish={isSpanish} />
        
        {/* Alumni Carousel - Added before CTA button */}
        <AlumniCarousel />

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="#contact-section">
              {isSpanish ? "Solicita información" : "Request information"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FormacionATCSection;
