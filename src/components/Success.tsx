
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Success = () => {
  const router = useRouter();
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // Ensure conversion events fire when the success page loads
  useEffect(() => {
    console.log('Success page loaded, firing conversion events');
    
    // Google Tag Manager event
    if (window.dataLayer) {
      window.dataLayer.push({
        'event': 'formSubmissionSuccess',
        'formName': 'tallyForm',
        'formLocation': document.referrer || 'unknown'
      });
      console.log('GTM event pushed: formSubmissionSuccess');
    }
    
    // Google Analytics event
    if (window.gtag) {
      window.gtag('event', 'form_submission_success', {
        'event_category': 'form',
        'event_label': 'form_complete',
        'value': 1
      });
      console.log('GA4 event sent: form_submission_success');
    }
    
    // Google Ads conversion tracking con el nuevo identificador
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-971027451/4HPBCP2UnnUQ--eCzwM',
        'value': 15.0,
        'currency': 'EUR'
      });
      console.log('Google Ads conversion event sent on success page');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-slate-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        </motion.div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {isSpanish ? "¡Mensaje enviado con éxito!" : "Message sent successfully!"}
        </h1>
        
        <p className="text-gray-600 mb-6">
          {isSpanish 
            ? "Gracias por contactar con Nelso Formación. Nos pondremos en contacto contigo lo antes posible."
            : "Thank you for contacting Nelso Formación. We will get back to you as soon as possible."}
        </p>
        
        <div className="space-y-3">
          <Button 
            onClick={() => router.push('/')}
            className="w-full"
          >
            {isSpanish ? "Volver al inicio" : "Back to home"}
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => router.push('/cursos')}
            className="w-full"
          >
            {isSpanish ? "Ver cursos" : "View courses"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;

