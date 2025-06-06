'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from "@/components/ui/badge";
import { useState } from 'react';
import { FullScreenForm } from '@/components/ui/full-screen-form';
import { useTallyForm } from '@/hooks/useTallyForm';

export const ServicesHero = () => {
  const { t, language } = useLanguage();
  const isSpanish = language === 'es';
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Use the new hook to load Tally with URL tracking
  useTallyForm(isFormOpen);

  return (
    <>
      <section 
        className="relative bg-cover bg-center py-32" 
        style={{ backgroundImage: "url('/images/binoculares-atc-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="bg-primary border-primary/60 text-white px-4 py-1 text-sm font-medium mb-6">
              {isSpanish ? "Servicios ATC" : "ATC Services"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {isSpanish ? "Soluciones ATC para " : "ATC Solutions for "} 
              <span className="text-primary">{isSpanish ? "Organizaciones" : "Organizations"}</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-8">
              {isSpanish 
                ? "Formación especializada y servicios de consultoría para proveedores de navegación aérea y organizaciones"
                : "Specialized training and consulting services for air navigation providers and organizations"}
            </p>
            <div>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => setIsFormOpen(true)}
              >
                {isSpanish ? "Solicitar Información" : "Request Information"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FullScreenForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={isSpanish ? "Solicita información" : "Request information"}
      >
        <iframe 
          data-tally-src="https://tally.so/embed/meYkal?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          width="100%" 
          height="450" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0} 
          title="Formulario de servicios"
          id="hero-form-servicios"
          name="hero-form-servicios"
        ></iframe>
      </FullScreenForm>
    </>
  );
};
