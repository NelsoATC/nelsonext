
import Link from "next/link";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLanguageDetection } from "@/contexts/LanguageDetectionContext";
import SEO from "@/components/shared/SEO";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Calendar } from "lucide-react";
import { useTallyForm } from "@/hooks/useTallyForm";

// Import section components
import HeroSection from "@/components/sections/HeroSection";
import QuienesSomosSection from "@/components/sections/QuienesSomosSection";
import NuestrosCampusSection from "@/components/sections/NuestrosCampusSection";
import FormacionATCSection from "@/components/sections/FormacionATCSection";
import NelsoServiciosSection from "@/components/sections/NelsoServiciosSection";
import InstalacionesSection from "@/components/sections/InstalacionesSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactoSection from "@/components/sections/ContactoSection";

const Index = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // Use the new hook to load Tally with URL tracking
  useTallyForm();

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title={isSpanish 
          ? "Nelso Formación | Escuela de Controladores Aéreos en Madrid y Canarias" 
          : "Nelso Formación | Air Traffic Controller Training School in Madrid & Canary Islands"}
        description={isSpanish 
          ? "Fórmate como controlador aéreo con licencias ATC oficiales. Instalaciones modernas, instructores expertos y atención personalizada en Madrid y Canarias." 
          : "Become a certified Air Traffic Controller. State-of-the-art facilities, expert instructors, personalized training in Madrid and Canary Islands."}
        keywords={isSpanish 
          ? "formación controladores aéreos, licencias ATC, cursos ATC Madrid, cursos ATC Canarias, Nelso Formación, controlador aereo, navegacion aerea, AESA" 
          : "Air Traffic Controller training, ATC licenses, ATC courses Madrid, ATC courses Canary Islands, Nelso Formación"}
        path="/"
        image="/images/og/home-og.jpg"
        type="website"
      />
      <HeroSection />
      {/* Upcoming Course Alert - Now placed immediately after the hero section */}
      <div className="bg-[#111827] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 text-white">
            <Calendar size={20} className="text-primary flex-shrink-0" />
            <p className="font-semibold text-center">
              <span>
                {isSpanish ? "Próximo curso: " : "Upcoming course: "}
                <span className="text-gray-300">
                  {isSpanish ? "Habilitación Completa (Torre, Aproximación y Ruta) comienza en Septiembre." : "Complete Rating (Tower, Approach and Route) starts in September."}
                </span>
              </span>
              <Link 
                href="/habilitacion-completa" 
                className="inline-block ml-1 text-primary font-bold hover:underline"
              >
                {isSpanish ? "¡Inscríbete ahora!" : "Enroll now!"}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <QuienesSomosSection />
      <NuestrosCampusSection />
      <FormacionATCSection />
      <NelsoServiciosSection />
      <InstalacionesSection />
      <BlogSection />
      <div id="contact-section">
        <ContactoSection />
      </div>
    </div>
  );
};

export default Index;
