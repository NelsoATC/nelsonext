
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative bg-cover bg-center py-32 px-4" 
      style={{ backgroundImage: "url('/images/atc-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="bg-primary border-primary/60 text-white px-4 py-1 text-sm font-medium mb-6">
            {isSpanish ? "Centro de Formación ATC" : "ATC Training Center"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {isSpanish ? "Formación de Controladores " : "Air Traffic Controller "} 
            <span className="text-primary">{isSpanish ? "Aéreos" : "Training"}</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-8">
            {isSpanish 
              ? "Formamos a los profesionales que garantizan la seguridad del espacio aéreo"
              : "We train the professionals who ensure airspace safety"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
              <Link to="/cursos">{isSpanish ? "Nuestros Cursos" : "Our Courses"}</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="text-primary border-white hover:bg-white/10 font-medium"
            >
              <Link to="/servicios">{isSpanish ? "Servicios ATC" : "ATC Services"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
