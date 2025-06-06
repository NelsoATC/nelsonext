
import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layers, Monitor, Shield, Headphones } from 'lucide-react';

const Training2Section = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const courses = [
    {
      id: "tower",
      title: isSpanish ? "Módulo 1: Torre de Control" : "Module 1: Control Tower",
      description: isSpanish 
        ? "Formación básica en técnicas de control de torre y gestión del tráfico aéreo de aeródromo." 
        : "Basic training in tower control techniques and aerodrome air traffic management.",
      link: "/bloque-1-licencia-torre",
      icon: <Monitor className="h-6 w-6" />
    },
    {
      id: "approach",
      title: isSpanish ? "Módulo 2: Aproximación" : "Module 2: Approach",
      description: isSpanish 
        ? "Control del tráfico aéreo en áreas de aproximación mediante técnicas radar avanzadas." 
        : "Air traffic control in approach areas using advanced radar techniques.",
      link: "/bloque-2-licencias-ruta-aproximacion",
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: "advanced",
      title: isSpanish ? "Formación Avanzada" : "Advanced Training",
      description: isSpanish 
        ? "Simulaciones complejas y entrenamiento especializado para situaciones de alta densidad de tráfico." 
        : "Complex simulations and specialized training for high traffic density situations.",
      link: "/formacion-avanzada",
      icon: <Headphones className="h-6 w-6" />
    },
    {
      id: "complete",
      title: isSpanish ? "Habilitación Completa" : "Complete Rating",
      description: isSpanish 
        ? "Programa integral de formación para obtener la licencia completa de controlador aéreo." 
        : "Comprehensive training program to obtain the complete air traffic controller license.",
      link: "/habilitacion-completa",
      icon: <Layers className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-24 bg-[#2A272F] relative overflow-hidden">
      {/* Tech background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 10 L40 10" stroke="#8B5CF6" strokeWidth="0.5" />
              <path d="M0 20 L40 20" stroke="#8B5CF6" strokeWidth="0.5" />
              <path d="M0 30 L40 30" stroke="#8B5CF6" strokeWidth="0.5" />
              <path d="M10 0 L10 40" stroke="#8B5CF6" strokeWidth="0.5" />
              <path d="M20 0 L20 40" stroke="#8B5CF6" strokeWidth="0.5" />
              <path d="M30 0 L30 40" stroke="#8B5CF6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#8B5CF6]/10"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: '50%',
              top: '50%',
            }}
            initial={{ opacity: 0.1, x: '-50%', y: '-50%', scale: 1 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#8B5CF6]/20 text-[#8B5CF6] px-4 py-2 rounded-lg text-sm font-medium mb-4"
          >
            {isSpanish ? "PROGRAMAS DE FORMACIÓN" : "TRAINING PROGRAMS"}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {isSpanish ? "Formación ATC de Vanguardia" : "Cutting-Edge ATC Training"}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {isSpanish 
              ? "Nuestros programas están diseñados para formar profesionales capaces de enfrentarse a los retos del control aéreo moderno." 
              : "Our programs are designed to train professionals capable of facing the challenges of modern air traffic control."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-[#312E36] rounded-2xl p-6 border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 transition-colors group"
            >
              <div className="flex items-start">
                <div className="bg-[#8B5CF6]/20 p-3 rounded-lg text-[#8B5CF6] mr-4 group-hover:bg-[#8B5CF6]/30 transition-colors">
                  {course.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  
                  <Link 
                    href={course.link}
                    className="inline-flex items-center text-[#8B5CF6] hover:text-[#A78BFA] font-medium transition-colors"
                  >
                    {isSpanish ? "Más información" : "Learn more"} 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training2Section;
