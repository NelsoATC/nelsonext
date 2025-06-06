
import { useLanguage } from '@/contexts/LanguageContext';
import { useTallyForm } from '@/hooks/useTallyForm';

interface ContactFormSectionProps {
  id?: string;
}

const ContactFormSection = ({ id = 'contact-form-section' }: ContactFormSectionProps) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  // Use the new hook to load Tally with URL tracking and conversion tracking
  useTallyForm();

  return (
    <section id={id} className="py-12 bg-white rounded-xl shadow-md mb-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSpanish ? "Solicita información sobre el curso" : "Request information about the course"}
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          {isSpanish
            ? "Completa el formulario y nuestro equipo se pondrá en contacto contigo para resolver todas tus dudas."
            : "Complete the form and our team will contact you to answer all your questions."}
        </p>
        
        <div className="w-full">
          <iframe 
            data-tally-src="https://tally.so/embed/3j9AMR?transparentBackground=1&hideTitle=1" 
            width="100%" 
            height="450" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Formulario de contacto"
            id="form-email"
            name="form-email"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
