
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

const QuienesSomosSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const isMobile = useIsMobile();

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-4">Nelso Formación</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isSpanish ? "Quiénes Somos" : "About Us"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isSpanish 
              ? "Nelso Formación ha evolucionado hasta convertirse en un referente en la formación aeronáutica especializada en control aéreo" 
              : "Nelso Training has evolved to become a reference in aeronautical training specialized in air traffic control"}
          </p>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="https://www.seguridadaerea.gob.es/es/ambitos/navegacion-aerea/organizaciones-de-formacion-ats" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 border-2 border-primary/40 rounded-lg px-5 py-3 bg-white text-gray-800 hover:bg-primary/5 transition-colors shadow-sm"
            >
              <Award size={isMobile ? 28 : 24} className="text-primary flex-shrink-0" />
              <span className={`${isMobile ? "text-base" : "text-sm"} font-medium`}>
                {isSpanish 
                  ? "Centro de formación inicial de controladores aéreos certificado por AESA. Código PFATC-19" 
                  : "Initial air traffic controller training center certified by AESA. Code PFATC-19"}
              </span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <GraduationCap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{isSpanish ? "Formación Inicial ATC" : "Initial ATC Training"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {isSpanish
                  ? "Escuela especializada en la formación de nuevos controladores aéreos con los más altos estándares de calidad"
                  : "Specialized school in training new air traffic controllers with the highest quality standards"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Briefcase className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{isSpanish ? "Nelso Servicios" : "Nelso Services"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {isSpanish
                  ? "Soluciones profesionales para proveedores de servicios de navegación aérea y organizaciones del sector"
                  : "Professional solutions for air navigation service providers and sector organizations"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{isSpanish ? "Nuestro Equipo" : "Our Team"}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {isSpanish
                  ? "Contamos con instructores y expertos con amplia experiencia en el control de tráfico aéreo y formación aeronáutica"
                  : "We have instructors and experts with extensive experience in air traffic control and aeronautical training"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomosSection;
