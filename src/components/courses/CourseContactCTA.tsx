'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ContactoSection from "@/components/sections/ContactoSection";
import { FullScreenForm } from '@/components/ui/full-screen-form';
import { useTallyForm } from '@/hooks/useTallyForm';
import { scrollToElement } from '@/hooks/useScrollToHash';

interface CourseContactCTAProps {
  isSpanish: boolean;
}

const CourseContactCTA = ({ isSpanish }: CourseContactCTAProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Use the new hook to load Tally with URL tracking
  useTallyForm(isFormOpen);

  const handleButtonClick = () => {
    // Option 1: Open the modal form
    // setIsFormOpen(true);
    
    // Option 2: Scroll to the contact form at the bottom of the page
    scrollToElement('contact-form-section');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-xl p-12 text-center shadow-sm bg-[#f9f9f9] my-16"
      >
        <div className="p-4 rounded-full inline-block mb-6 shadow-sm bg-[#eaeaea]">
          <GraduationCap className="h-12 w-12 text-[#111827]" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          {isSpanish 
            ? "¿Necesitas más información sobre nuestros cursos?" 
            : "Need more information about our courses?"}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          {isSpanish 
            ? "Si tienes dudas sobre nuestros programas formativos o necesitas asesoramiento personalizado para elegir el curso que mejor se adapte a tus objetivos, nuestro equipo de orientación académica está a tu disposición." 
            : "If you have questions about our training programs or need personalized advice to choose the course that best suits your goals, our academic guidance team is at your disposal."}
        </p>
        <Button 
          className="bg-[#111827] text-white hover:bg-[#111827]/90 px-6 py-2 h-auto shadow-sm hover:shadow-md transition-all"
          onClick={handleButtonClick}
        >
          {isSpanish ? "Solicitar Información" : "Request Information"}
        </Button>
      </motion.div>

      <FullScreenForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={isSpanish ? "Solicita información sobre nuestros cursos" : "Request information about our courses"}
      >
        <ContactoSection />
      </FullScreenForm>
    </>
  );
};

export default CourseContactCTA;
