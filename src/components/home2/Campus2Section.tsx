
import Link from "next/link";
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Building2, Stars } from 'lucide-react';

const Campus2Section = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const campuses = [
    {
      name: isSpanish ? "Campus Madrid" : "Madrid Campus",
      image: "/images/carousel-madrid/01. TWR 2 - Nelso Madrid.jpg",
      link: isSpanish ? "/madrid" : "/madrid-campus",
      features: [
        isSpanish ? "Simulador de torre completo" : "Complete tower simulator",
        isSpanish ? "Equipamiento de última generación" : "State-of-the-art equipment",
        isSpanish ? "Ubicación estratégica" : "Strategic location"
      ]
    },
    {
      name: isSpanish ? "Campus Canarias" : "Canary Islands Campus",
      image: "/images/carousel-canarias/01. Radar Sim 2 - Render Nelso Canarias.jpg",
      link: isSpanish ? "/canarias" : "/canary-islands",
      features: [
        isSpanish ? "Modernas instalaciones" : "Modern facilities",
        isSpanish ? "Simulador radar de alto rendimiento" : "High-performance radar simulator",
        isSpanish ? "Entorno privilegiado" : "Privileged environment"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#221F26] relative overflow-hidden">
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-10">
        {[...Array(400)].map((_, i) => {
          const x = i % 20;
          const y = Math.floor(i / 20);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0.1 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                delay: (x + y) * 0.05,
              }}
              className="border-r border-b border-[#8B5CF6]/30"
            />
          );
        })}
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
            {isSpanish ? "NUESTROS CAMPUS" : "OUR CAMPUSES"}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {isSpanish ? "Espacios Diseñados Para el Futuro" : "Spaces Designed For the Future"}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {isSpanish 
              ? "Instalaciones modernas equipadas con la última tecnología para simular entornos de control aéreo reales." 
              : "Modern facilities equipped with the latest technology to simulate real air traffic control environments."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {campuses.map((campus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#8B5CF6]/20">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={campus.image} 
                    alt={campus.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A171D]/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-[#8B5CF6] mr-2" />
                    <h3 className="text-xl font-bold text-white">{campus.name}</h3>
                  </div>
                  
                  <ul className="mb-5 space-y-2">
                    {campus.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <Stars className="h-4 w-4 text-[#8B5CF6] mr-2 mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={campus.link}
                    className="inline-flex items-center justify-center rounded-lg bg-[#8B5CF6] px-5 py-2.5 text-white hover:bg-[#7C4FD8] transition-all text-sm font-medium"
                  >
                    {isSpanish ? "Ver Campus" : "View Campus"}
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

export default Campus2Section;
