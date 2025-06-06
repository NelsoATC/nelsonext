
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ContactCTA } from '@/components/services/ContactCTA';
import { FullScreenForm } from '@/components/ui/full-screen-form';
import SEO from '@/components/shared/SEO';
import { useTallyForm } from '@/hooks/useTallyForm';

// Import refactored components
import { ServicesHero } from '@/components/services/ServicesHero';
import { B2BIntroSection } from '@/components/services/B2BIntroSection';
import { MainServicesSection } from '@/components/services/MainServicesSection';
import { KeyServiceAreasSection } from '@/components/services/KeyServiceAreasSection';
import { AESACoursesSection } from '@/components/services/AESACoursesSection';
import { WhyChooseUsSection } from '@/components/services/WhyChooseUsSection';
import { B2BTrainingSection } from '@/components/services/B2BTrainingSection';

const Services = () => {
  const { language } = useLanguage();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isSpanish = language === 'es';

  // Use the new hook to load Tally with URL tracking
  useTallyForm(isFormOpen);

  return (
    <>
      <SEO 
        title={isSpanish 
          ? "Servicios para organizaciones aeronáuticas | Nelso Formación" 
          : "Services for aeronautical organizations | Nelso Formación"}
        description={isSpanish 
          ? "Servicios de formación y consultoría especializados para organizaciones aeronáuticas. Cursos AESA, simulaciones personalizadas y formación a medida." 
          : "Specialized training and consulting services for aeronautical organizations. AESA courses, custom simulations and tailored training."}
        keywords={isSpanish 
          ? "servicios aeronáuticos, formación ATC empresas, consultoría ATC, cursos AESA, Nelso Formación" 
          : "aeronautical services, ATC corporate training, ATC consulting, AESA courses, Nelso Formación"}
        path="/servicios"
        image="/images/og/services-og.jpg"
        type="website"
      />

      <div className="min-h-screen bg-white">
        {/* Hero section */}
        <ServicesHero />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* B2B Services Intro */}
          <B2BIntroSection />

          {/* Our main services */}
          <MainServicesSection />

          {/* B2B Training Section */}
          <B2BTrainingSection />

          {/* Key service areas with icons */}
          <KeyServiceAreasSection />

          {/* AESA Courses Section */}
          <AESACoursesSection />

          {/* Why Choose Us Section */}
          <WhyChooseUsSection />

          {/* CTA Section with business variant */}
          <ContactCTA
            title={isSpanish ? "¿Necesita una solución a medida para su organización?" : "Need a tailored solution for your organization?"}
            description={isSpanish 
              ? "Nuestro equipo de expertos está disponible para analizar sus necesidades específicas y desarrollar un programa formativo adaptado a su organización."
              : "Our team of experts is available to analyze your specific needs and develop a training program tailored to your organization."}
            buttonText={isSpanish ? "Solicitar Consulta" : "Request Consultation"}
            onButtonClick={() => setIsFormOpen(true)}
            variant="business"
          />
        </div>

        {/* Adding margin at the bottom of the page before the footer */}
        <div className="mb-16"></div>
      </div>

      {/* Full Screen Contact Form */}
      <FullScreenForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={language === 'es' ? 'Solicita información' : 'Request information'}
      >
        <iframe 
          data-tally-src="https://tally.so/embed/meYkal?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          width="100%" 
          height="450" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0} 
          title="Formulario de servicios"
          id="form-servicios"
          name="form-servicios"
        ></iframe>
      </FullScreenForm>
    </>
  );
};

export default Services;
