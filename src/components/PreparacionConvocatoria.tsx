
import { useLanguage } from '../contexts/LanguageContext';
import ContactFAQ from "@/components/contact/ContactFAQ";
import TestimonialsSection from "@/components/formacion-atc/TestimonialsSection";
import AlumniCarousel from "@/components/courses/AlumniCarousel";
import SEO from "@/components/shared/SEO";

// Import our components
import Hero from '@/components/procesos-selectivos/Hero';
import CourseOverview from '@/components/procesos-selectivos/CourseOverview';
import ProgramContent from '@/components/procesos-selectivos/ProgramContent';
import Methodology from '@/components/procesos-selectivos/Methodology';
import CTASection from '@/components/procesos-selectivos/CTASection';
import ContactFormSection from '@/components/procesos-selectivos/ContactFormSection';
import SyllabusSection from '@/components/procesos-selectivos/SyllabusSection';
import SelectionProcessStructure from '@/components/procesos-selectivos/SelectionProcessStructure';

const PreparacionConvocatoria = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // Function to scroll to form
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-0 pb-12 bg-gradient-to-b from-white to-slate-50 overflow-x-hidden">
      <SEO 
        title={isSpanish 
          ? "Preparación de Oposiciones de Controladores Aéreos | Curso Oficial ATC | Nelso Formación" 
          : "Air Traffic Controller Selection Process Preparation | Official ATC Course | Nelso Formación"}
        description={isSpanish 
          ? "Prepárate para ser controlador aéreo con nuestro curso especializado para oposiciones. Formación completa con simuladores reales y profesores en activo. Matrículas abiertas." 
          : "Prepare to become an air traffic controller with our specialized course. Complete training with real simulators and active instructors. Enrollment open."}
        keywords={isSpanish 
          ? "curso controlador aéreo, preparación ATC, oposiciones controlador, simuladores ATC, Nelso Formación" 
          : "air traffic controller course, ATC preparation, controller examinations, ATC simulators, Nelso Formación"}
        path="/preparacion-convocatoria"
        image="/images/og/course-og.jpg"
        type="article"
      />
      
      {/* Hero Section */}
      <Hero scrollToForm={scrollToForm} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Overview */}
        <CourseOverview scrollToForm={scrollToForm} />
        
        {/* Methodology - Moved before Program Content */}
        <Methodology />
        
        {/* Program Content */}
        <ProgramContent />
        
        {/* Selection Process Structure - New section added here */}
        <SelectionProcessStructure />
        
        {/* Syllabus Section */}
        <SyllabusSection />
        
        {/* Testimonials Section with horizontal slider */}
        <div className="mb-16">
          <TestimonialsSection 
            isSpanish={isSpanish} 
            title={isSpanish ? "Lo que dicen nuestros alumnos" : "What our students say"}
          />
        </div>
        
        {/* CTA Section */}
        <CTASection scrollToForm={scrollToForm} />
        
        {/* Alumni Carousel - Added here between CTA and Contact Form */}
        <AlumniCarousel />
        
        {/* Contact Form Section */}
        <ContactFormSection id="contact-form-section" />
        
        {/* FAQ Section */}
        <div id="faqs" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {isSpanish ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h2>
          
          <ContactFAQ isSpanish={isSpanish} />
        </div>
      </div>
    </div>
  );
};

export default PreparacionConvocatoria;
