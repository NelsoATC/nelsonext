
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import ContactoSection from "@/components/sections/ContactoSection";
import ContactMap from "@/components/contact/ContactMap";
import ContactInfo from "@/components/contact/ContactInfo";
import SEO from "@/components/shared/SEO";
import { useTallyForm } from "@/hooks/useTallyForm";

const Contact = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // Use the new hook to load Tally with URL tracking and conversion tracking
  useTallyForm();

  return (
    <>
      <SEO
        title={isSpanish ? "Contacto | Nelso Formación" : "Contact | Nelso Formación"}
        description={isSpanish
          ? "Ponte en contacto con Nelso Formación para obtener más información sobre nuestros cursos de controlador aéreo y opciones de formación personalizada."
          : "Contact Nelso Formación for more information about our air traffic controller courses and personalized training options."}
        keywords={isSpanish
          ? "contacto Nelso, información cursos ATC, formación controlador aéreo, contactar escuela ATC"
          : "contact Nelso, ATC course information, air traffic controller training, contact ATC school"}
        path={isSpanish ? "/contacto" : "/contact"}
        image="/images/og/home-og.jpg"
        type="website"
      />

      <div className="min-h-screen">
        {/* Hero Section with Mesh Background */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
            <div className="mesh-grid"></div>
          </div>
          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="text-center mb-8">
              <Badge className="bg-primary/10 text-primary mb-4">
                {isSpanish ? "Contacto" : "Contact"}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {isSpanish 
                  ? "Contacta con Nelso" 
                  : "Contact Nelso"}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isSpanish
                  ? "Estamos aquí para responder a tus preguntas y ayudarte en tu camino para convertirte en controlador aéreo"
                  : "We are here to answer your questions and help you on your journey to become an air traffic controller"}
              </p>
            </div>
          </div>
        </section>

        {/* Custom Contact Section with Info */}
        <section id="contact-section" className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-8">
              <Badge className="bg-primary/10 text-primary mb-4">
                {isSpanish ? "Contacto" : "Contact"}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {isSpanish ? "Solicita información" : "Request information"}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                {isSpanish
                  ? "Completa el formulario y uno de nuestros asesores se pondrá en contacto contigo"
                  : "Complete the form and one of our advisors will contact you"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column - Contact form */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <iframe 
                  src="https://tally.so/embed/3j9AMR?transparentBackground=1&hideTitle=1" 
                  width="100%" 
                  height="500" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Formulario de contacto"
                  id="contact-form"
                  name="contact-form"
                ></iframe>
              </div>
              
              {/* Right column - Contact info */}
              <div>
                <ContactInfo isSpanish={isSpanish} />
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              {isSpanish ? "Nuestros Centros" : "Our Centers"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <ContactMap location="madrid" isSpanish={isSpanish} />
              <ContactMap location="canarias" isSpanish={isSpanish} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
