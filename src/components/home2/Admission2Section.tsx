
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Calendar, CreditCard, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTallyForm } from '@/hooks/useTallyForm';

const Admission2Section = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  useTallyForm();

  const requirements = [
    isSpanish ? "Tener al menos 18 años de edad" : "Be at least 18 years old",
    isSpanish ? "Título de Bachillerato o equivalente" : "High School Diploma or equivalent",
    isSpanish ? "Nivel de inglés B2 o superior" : "English level B2 or higher",
    isSpanish ? "Superar prueba psicotécnica" : "Pass psychotechnical test"
  ];

  const financingOptions = [
    {
      title: isSpanish ? "Pago Fraccionado" : "Installment Payment",
      description: isSpanish 
        ? "Divide el importe total del curso en cómodas mensualidades sin intereses." 
        : "Divide the total course amount into comfortable monthly installments without interest."
    },
    {
      title: isSpanish ? "Becas y Ayudas" : "Scholarships and Grants",
      description: isSpanish 
        ? "Programas de ayuda económica disponibles para estudiantes con alto rendimiento académico." 
        : "Financial aid programs available for students with high academic performance."
    },
    {
      title: isSpanish ? "Financiación Bancaria" : "Bank Financing",
      description: isSpanish 
        ? "Acuerdos con entidades financieras para facilitar el acceso a la formación." 
        : "Agreements with financial institutions to facilitate access to training."
    }
  ];

  return (
    <section className="py-24 bg-[#221F26] relative overflow-hidden">
      {/* Tech background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-[#221F26]">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#8B5CF6] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Requirements and Financing Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#312E36] rounded-2xl p-8 border border-[#8B5CF6]/20 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-[#8B5CF6]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-[#8B5CF6]">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{isSpanish ? "Requisitos" : "Requirements"}</h3>
              </div>
              
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-[#8B5CF6] mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#312E36] rounded-2xl p-8 border border-[#8B5CF6]/20">
              <div className="flex items-center mb-6">
                <div className="bg-[#8B5CF6]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-[#8B5CF6]">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{isSpanish ? "Financiación" : "Financing"}</h3>
              </div>
              
              <div className="space-y-5">
                {financingOptions.map((option, index) => (
                  <div key={index} className="border-b border-gray-700 pb-5 last:border-0 last:pb-0">
                    <h4 className="text-lg font-medium text-white mb-2">{option.title}</h4>
                    <p className="text-gray-300 text-sm">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Admission Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#312E36] to-[#3A3740] rounded-2xl p-8 border border-[#8B5CF6]/20"
          >
            <div className="flex items-center mb-8">
              <div className="bg-[#8B5CF6]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-[#8B5CF6]">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">{isSpanish ? "Solicitar Información" : "Request Information"}</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                {isSpanish 
                  ? "Completa el formulario a continuación y nuestro equipo de admisiones se pondrá en contacto contigo para proporcionarte toda la información que necesites."
                  : "Complete the form below and our admissions team will contact you to provide all the information you need."}
              </p>
            </div>

            {/* Tally Embedded Form */}
            <div className="bg-[#221F26] p-4 rounded-lg">
              <iframe 
                data-tally-src={isSpanish
                  ? "https://tally.so/embed/3yPOr9?alignLeft=1&hideTitle=1&transparentBackground=1"
                  : "https://tally.so/embed/3yPOr9?alignLeft=1&hideTitle=1&transparentBackground=1"} 
                loading="lazy" 
                width="100%" 
                height="350"
                title="Contact Form"
                className="border-0"
              ></iframe>
            </div>
            
            <div className="mt-6 flex items-center text-sm text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              {isSpanish 
                ? "Próxima convocatoria: Septiembre 2025"
                : "Next admission period: September 2025"}
            </div>
          </motion.div>
        </div>
        
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 bg-[#8B5CF6] rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Tech pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="diagonalLines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="10" y2="10" stroke="white" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">
                {isSpanish ? "¿Listo para el despegue?" : "Ready for takeoff?"}
              </h3>
              <p className="text-white/80">
                {isSpanish 
                  ? "Da el primer paso hacia tu carrera como controlador aéreo hoy mismo."
                  : "Take the first step towards your career as an air traffic controller today."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="secondary" 
                className="bg-white text-[#8B5CF6] hover:bg-white/90 font-medium"
              >
                {isSpanish ? "Descargar Folleto" : "Download Brochure"}
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 font-medium"
              >
                {isSpanish ? "Solicitar Visita" : "Request a Visit"}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admission2Section;
