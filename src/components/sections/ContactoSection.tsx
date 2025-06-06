
import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import ContactMap from "@/components/contact/ContactMap";
import { useTallyForm } from "@/hooks/useTallyForm";

interface ContactoSectionProps {
  location?: 'madrid' | 'canarias';
  showContactInfo?: boolean;
}

const ContactoSection = ({ location, showContactInfo = false }: ContactoSectionProps) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isSpanish = language === 'es';

  // Use the new hook to load Tally with URL tracking
  useTallyForm();

  return (
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

        {/* Conditionally render the layout based on whether we're on a campus page */}
        {location ? (
          // Two-column layout for campus pages
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Contact form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <iframe 
                data-tally-src="https://tally.so/r/3j9AMR?transparentBackground=1&hideTitle=1" 
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
            
            {/* Right column - Map only */}
            <div>
              <ContactMap location={location} isSpanish={isSpanish} />
            </div>
          </div>
        ) : (
          // Full-width layout for other pages
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <iframe 
                data-tally-src="https://tally.so/r/3j9AMR?transparentBackground=1&hideTitle=1" 
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
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactoSection;
