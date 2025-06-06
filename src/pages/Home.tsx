
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/shared/SEO';
import { useTallyForm } from '@/hooks/useTallyForm';

// Import the new component sections
import HeroHomeSection from '@/components/home/HeroHomeSection';
import AboutSection from '@/components/home/AboutSection';
import CampusSection from '@/components/home/CampusSection';
import TrainingSection from '@/components/home/TrainingSection';
import ServicesSection from '@/components/home/ServicesSection';
import FacilitiesSection from '@/components/home/FacilitiesSection';
import AdmissionSection from '@/components/home/AdmissionSection';

const Home = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // Use the new hook to load Tally with URL tracking
  useTallyForm();

  // Create absolute URL for OG image
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://nelsoformacion.com';
  const ogImage = `${siteUrl}/images/og/home-og.jpg`;

  return (
    <div className="min-h-screen">
      <SEO 
        title={isSpanish 
          ? "Nelso Formación | Escuela de Controladores Aéreos en Madrid y Canarias" 
          : "Nelso Formación | Air Traffic Controller Training School in Madrid & Canary Islands"}
        description={isSpanish 
          ? "Fórmate como controlador aéreo con licencias ATC oficiales. Instalaciones modernas, instructores expertos y atención personalizada en Madrid y Canarias." 
          : "Become a certified Air Traffic Controller. State-of-the-art facilities, expert instructors, personalized training in Madrid and Canary Islands."}
        keywords={isSpanish 
          ? "formación controladores aéreos, licencias ATC, cursos ATC Madrid, cursos ATC Canarias, Nelso Formación" 
          : "Air Traffic Controller training, ATC licenses, ATC courses Madrid, ATC courses Canary Islands, Nelso Formación"}
        path="/"
        image={ogImage}
        type="website"
      />
      <HeroHomeSection />
      <AboutSection />
      <CampusSection />
      <TrainingSection />
      <ServicesSection />
      <FacilitiesSection />
      <AdmissionSection />
    </div>
  );
};

export default Home;
