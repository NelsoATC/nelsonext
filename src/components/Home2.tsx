
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/shared/SEO';
import { useTallyForm } from '@/hooks/useTallyForm';

// Import the new component sections
import HeroHome2Section from '@/components/home2/HeroHome2Section';
import About2Section from '@/components/home2/About2Section';
import Campus2Section from '@/components/home2/Campus2Section';
import Training2Section from '@/components/home2/Training2Section';
import Services2Section from '@/components/home2/Services2Section';
import Facilities2Section from '@/components/home2/Facilities2Section';
import Admission2Section from '@/components/home2/Admission2Section';

const Home2 = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  useTallyForm();

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://nelsoformacion.com';
  const ogImage = `${siteUrl}/images/og/home-og.jpg`;

  return (
    <div className="min-h-screen bg-[#221F26]">
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
        path="/home2"
        image={ogImage}
        type="website"
      />
      <HeroHome2Section />
      <About2Section />
      <Campus2Section />
      <Training2Section />
      <Services2Section />
      <Facilities2Section />
      <Admission2Section />
    </div>
  );
};

export default Home2;
