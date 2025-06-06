
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, GraduationCap, Cpu } from 'lucide-react';

const About2Section = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <section className="py-24 bg-[#2A272F] relative overflow-hidden">
      {/* Tech background element */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent"
            style={{
              top: `${i * 10}%`,
              left: '0',
              right: '0',
              transform: 'translateY(-50%)'
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#8B5CF6] to-transparent"
            style={{
              left: `${i * 10}%`,
              top: '0',
              bottom: '0',
              transform: 'translateX(-50%)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {isSpanish ? "Innovación en el Control Aéreo" : "Innovation in Air Traffic Control"}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {isSpanish 
              ? "Formamos a los controladores aéreos del futuro utilizando las técnicas más avanzadas y la última tecnología disponible en el sector." 
              : "We train the air traffic controllers of tomorrow using the most advanced techniques and the latest technology available in the industry."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sparkles className="h-10 w-10" />,
              title: isSpanish ? "Innovación Constante" : "Constant Innovation",
              description: isSpanish 
                ? "Nuestros métodos evolucionan constantemente para adaptarse a las nuevas tecnologías y necesidades del sector aeronáutico." 
                : "Our methods constantly evolve to adapt to new technologies and needs of the aeronautical sector."
            },
            {
              icon: <GraduationCap className="h-10 w-10" />,
              title: isSpanish ? "Formación Certificada" : "Certified Training",
              description: isSpanish 
                ? "Todos nuestros cursos están certificados por SENASA y cumplen con la normativa europea vigente." 
                : "All our courses are certified by SENASA and comply with current European regulations."
            },
            {
              icon: <Cpu className="h-10 w-10" />,
              title: isSpanish ? "Tecnología Avanzada" : "Advanced Technology",
              description: isSpanish 
                ? "Utilizamos simuladores de última generación para recrear situaciones reales de control aéreo." 
                : "We use state-of-the-art simulators to recreate real air traffic control situations."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-[#312E36] p-8 rounded-2xl hover:bg-[#3A3740] transition-colors border border-[#8B5CF6]/20"
            >
              <div className="bg-[#8B5CF6]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-[#8B5CF6]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About2Section;
