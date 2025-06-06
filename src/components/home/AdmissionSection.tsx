
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import AdmissionRequirements from './admission/AdmissionRequirements';
import AdmissionDates from './admission/AdmissionDates';
import AdmissionFinancing from './admission/AdmissionFinancing';
import AdmissionContactForm from './admission/AdmissionContactForm';
import { useTallyForm } from '@/hooks/useTallyForm';

const AdmissionSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  // Use the new hook to load Tally with URL tracking
  useTallyForm();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{isSpanish ? 'Admisiones' : 'Admissions'}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {isSpanish 
              ? 'Información sobre el proceso de admisión y requisitos para nuestros programas formativos' 
              : 'Information about the admission process and requirements for our training programs'}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <AdmissionRequirements isSpanish={isSpanish} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <AdmissionDates isSpanish={isSpanish} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <AdmissionFinancing isSpanish={isSpanish} />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-8 shadow-md"
          id="contact-section"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">
            {isSpanish ? '¿Necesitas más información?' : 'Need more information?'}
          </h3>
          <AdmissionContactForm isSpanish={isSpanish} />
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionSection;
