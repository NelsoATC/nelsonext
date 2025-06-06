
import { SectionHeader } from '@/components/services/SectionHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export const WhyChooseUsSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const reasonItems = [
    {
      title: isSpanish ? "Experiencia en el Sector" : "Industry Experience",
      description: isSpanish 
        ? "Nuestro equipo cuenta con décadas de experiencia práctica en control aéreo y formación"
        : "Our team has decades of practical experience in air control and training"
    },
    {
      title: isSpanish ? "Certificaciones Oficiales" : "Official Certifications",
      description: isSpanish 
        ? "Todos nuestros programas cumplen con los estándares y requisitos regulatorios"
        : "All our programs comply with regulatory standards and requirements"
    },
    {
      title: isSpanish ? "Tecnología Avanzada" : "Advanced Technology",
      description: isSpanish 
        ? "Utilizamos simuladores y equipamiento de última generación para una formación realista"
        : "We use state-of-the-art simulators and equipment for realistic training"
    },
    {
      title: isSpanish ? "Enfoque Personalizado" : "Personalized Approach",
      description: isSpanish 
        ? "Adaptamos nuestros servicios a las necesidades específicas de cada organización"
        : "We adapt our services to the specific needs of each organization"
    }
  ];

  return (
    <div className="mb-24">
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2">
          <SectionHeader
            badge={isSpanish ? "¿Por qué elegirnos?" : "Why Choose Us?"}
            title={isSpanish ? "La Elección de los Profesionales" : "The Professional's Choice"}
            subtitle={isSpanish 
              ? "Nuestro enfoque combina experiencia práctica, metodologías probadas y tecnología avanzada para garantizar resultados de excelencia."
              : "Our approach combines practical experience, proven methodologies and advanced technology to ensure excellent results."}
            centerText={false}
            badgeColor="#111827"
            badgeBackgroundColor="rgba(17, 24, 39, 0.05)"
          />
        </div>
        <div className="md:col-span-3 bg-gray-50 rounded-xl p-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {reasonItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="border-l-2 border-[#111827] pl-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
