'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { scrollToElement } from '@/hooks/useScrollToHash';

interface CTASectionProps {
  scrollToForm?: () => void;
  formId?: string;
}

const CTASection = ({ scrollToForm, formId = 'contact-form-section' }: CTASectionProps) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const handleClick = () => {
    if (scrollToForm) {
      scrollToForm();
    } else {
      scrollToElement(formId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center bg-white rounded-xl shadow-md p-8 mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {isSpanish ? "¿Listo para dar el siguiente paso?" : "Ready to take the next step?"}
      </h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        {isSpanish
          ? "Contacta con nosotros para obtener más información sobre el curso o reservar tu plaza para la próxima edición. Plazas limitadas."
          : "Contact us for more information about the course or to reserve your spot for the next edition. Limited spots available."}
      </p>
      <Button 
        size="lg" 
        className="bg-primary hover:bg-primary/90"
        onClick={handleClick}
      >
        {isSpanish ? "Contactar Ahora" : "Contact Now"}
      </Button>
    </motion.div>
  );
};

export default CTASection;
