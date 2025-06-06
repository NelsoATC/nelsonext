
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Building, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services2Section = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const services = [
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: isSpanish ? "Formación Especializada" : "Specialized Training",
      description: isSpanish 
        ? "Programas de formación personalizados para cubrir las necesidades específicas de cada profesional o empresa." 
        : "Customized training programs to cover the specific needs of each professional or company."
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: isSpanish ? "Consultoría Aeronáutica" : "Aeronautical Consulting",
      description: isSpanish 
        ? "Asesoramiento experto en implementación de sistemas ATC, optimización de procedimientos y auditorías técnicas." 
        : "Expert advice on ATC system implementation, procedure optimization, and technical audits."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: isSpanish ? "Desarrollo de Personal" : "Staff Development",
      description: isSpanish 
        ? "Programas de desarrollo profesional continuo para controladores aéreos y personal técnico aeronáutico." 
        : "Continuous professional development programs for air traffic controllers and aeronautical technical staff."
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: isSpanish ? "Análisis de Rendimiento" : "Performance Analysis",
      description: isSpanish 
        ? "Evaluación y mejora de la eficiencia en operaciones de control aéreo mediante análisis de datos avanzados." 
        : "Evaluation and improvement of efficiency in air traffic control operations through advanced data analysis."
    }
  ];

  return (
    <section className="py-24 bg-[#221F26] relative overflow-hidden">
      {/* Tech circuit board pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 H100 M50 0 V100 M25 0 V25 H75 V75 H25" stroke="#8B5CF6" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="3" fill="#8B5CF6" />
              <circle cx="0" cy="50" r="3" fill="#8B5CF6" />
              <circle cx="100" cy="50" r="3" fill="#8B5CF6" />
              <circle cx="50" cy="0" r="3" fill="#8B5CF6" />
              <circle cx="50" cy="100" r="3" fill="#8B5CF6" />
              <circle cx="25" cy="25" r="3" fill="#8B5CF6" />
              <circle cx="75" cy="75" r="3" fill="#8B5CF6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
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
            {isSpanish ? "SERVICIOS PROFESIONALES" : "PROFESSIONAL SERVICES"}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {isSpanish ? "Soluciones Integrales ATC" : "Comprehensive ATC Solutions"}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {isSpanish 
              ? "Ofrecemos una amplia gama de servicios profesionales para el sector aeronáutico y de control aéreo." 
              : "We offer a wide range of professional services for the aeronautical and air traffic control sector."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-[#312E36] rounded-2xl p-6 text-center hover:bg-[#3A3740] transition-colors border border-[#8B5CF6]/10 hover:border-[#8B5CF6]/30 h-full flex flex-col"
            >
              <div className="bg-[#8B5CF6]/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 text-[#8B5CF6]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to={isSpanish ? "/servicios" : "/services"}
            className="inline-flex items-center justify-center rounded-lg bg-[#8B5CF6] px-6 py-3 text-white hover:bg-[#7C4FD8] transition-all text-base font-medium"
          >
            {isSpanish ? "Ver todos los servicios" : "View all services"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services2Section;
