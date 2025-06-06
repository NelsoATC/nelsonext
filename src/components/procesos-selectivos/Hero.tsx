'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  scrollToForm: () => void;
}

const Hero = ({ scrollToForm }: HeroProps) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="relative mb-16 -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Hero background image with gradient overlay */}
      <div 
        className="absolute inset-0 w-full bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/d7fc962b-9fb8-41b5-8c85-92a93bd9f13d.png')",
          height: "300px", // Lower height as requested
          opacity: "0.3" // Lighter transparency
        }}
      >
        {/* Gradient overlay that fades to white at the bottom */}
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ 
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,1) 100%)" 
          }}
        ></div>
      </div>
      {/* Content positioned over the background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center pt-16 pb-12"
      >
        <Badge className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
          {isSpanish ? "Curso Especializado" : "Specialized Course"}
        </Badge>
        
        <h1 className="mt-4 text-4xl font-bold text-gray-900">
          {isSpanish 
            ? "Preparación de Convocatoria de Controladores Aéreos" 
            : "Air Traffic Controller Selection Process Preparation"}
        </h1>
        
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {isSpanish
            ? "Preparación integral para superar los procesos selectivos de controladores de tránsito aéreo en proveedores de servicios de navegación aérea."
            : "Comprehensive preparation to pass the selection processes for air traffic controllers in air navigation service providers."}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={scrollToForm}
          >
            {isSpanish ? "Solicitar Información" : "Request Information"}
          </Button>
          
          <Link href="/cursos">
            <Button variant="outline">
              {isSpanish ? "Ver todos los cursos" : "View all courses"}
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
