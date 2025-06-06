
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { MonitorPlay, Signal, Laptop, Database } from 'lucide-react';

const Facilities2Section = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const facilities = [
    {
      icon: <MonitorPlay className="h-8 w-8" />,
      title: isSpanish ? "Simuladores TWR 360°" : "360° TWR Simulators",
      description: isSpanish 
        ? "Simuladores de torre con visión panorámica de 360° que recrean con precisión el entorno aeroportuario." 
        : "Tower simulators with 360° panoramic vision that accurately recreate the airport environment."
    },
    {
      icon: <Signal className="h-8 w-8" />,
      title: isSpanish ? "Estaciones Radar HD" : "HD Radar Stations",
      description: isSpanish 
        ? "Estaciones de trabajo con tecnología radar de alta definición para entrenamiento en aproximación y área." 
        : "Workstations with high-definition radar technology for approach and area training."
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: isSpanish ? "Salas de Pseudopilotos" : "Pseudopilot Rooms",
      description: isSpanish 
        ? "Estaciones para simulación de comunicaciones aire-tierra con software especializado." 
        : "Stations for air-ground communication simulation with specialized software."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: isSpanish ? "Aulas Tecnológicas" : "Tech Classrooms",
      description: isSpanish 
        ? "Espacios de formación equipados con la última tecnología audiovisual y de conectividad." 
        : "Training spaces equipped with the latest audiovisual and connectivity technology."
    }
  ];

  return (
    <section className="py-24 bg-[#2A272F] relative overflow-hidden">
      {/* Tech-inspired pattern background with radar sweep effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="radar-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50%" cy="50%" r="50%" fill="url(#radar-gradient)" />
          </svg>
        </div>
        
        {/* Radar sweep animation */}
        <motion.div 
          className="absolute left-1/2 top-1/2 w-[1px] h-[50%] bg-[#8B5CF6] origin-bottom"
          style={{ translateX: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Concentric circles */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute left-1/2 top-1/2 border border-[#8B5CF6]/30 rounded-full"
            style={{ 
              width: `${(i + 1) * 20}%`, 
              height: `${(i + 1) * 20}%`,
              transform: 'translate(-50%, -50%)' 
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
            {isSpanish ? "TECNOLOGÍA AVANZADA" : "ADVANCED TECHNOLOGY"}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {isSpanish ? "Instalaciones de Última Generación" : "State-of-the-Art Facilities"}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {isSpanish 
              ? "Equipamiento y tecnología de vanguardia para recrear con total fidelidad los entornos de trabajo del control aéreo." 
              : "Cutting-edge equipment and technology to faithfully recreate air traffic control work environments."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-[#312E36] border-b-4 border-[#8B5CF6] rounded-2xl p-6 hover:transform hover:-translate-y-1 transition-all h-full flex flex-col"
            >
              <div className="mb-4 text-[#8B5CF6]">
                {facility.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
              <p className="text-gray-300">{facility.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {isSpanish ? "¿Quieres visitar nuestras instalaciones?" : "Want to visit our facilities?"}
              </h3>
              <p className="text-gray-300">
                {isSpanish 
                  ? "Concerta una visita a cualquiera de nuestros campus y descubre cómo formamos a los controladores aéreos del futuro."
                  : "Schedule a visit to any of our campuses and discover how we train the air traffic controllers of the future."}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-[#8B5CF6] hover:bg-[#7C4FD8] text-white px-8 py-3 rounded-lg font-medium shrink-0"
            >
              {isSpanish ? "Solicitar Visita" : "Request a Visit"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities2Section;
