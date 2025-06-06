
import { motion } from 'framer-motion';
import { BookOpen, Monitor, UserCheck, CalendarCheck } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Methodology = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isSpanish ? "Nuestra Metodología para Oposiciones" : "Our Methodology"}
        </h2>
        
        <p className="text-gray-600 max-w-3xl mx-auto">
          {isSpanish
            ? "Combinamos formación online, presencial y asesoría personalizada para garantizar tu éxito en las oposiciones de controladores de tránsito aéreo."
            : "We combine online training, in-person sessions, and personalized consultation to ensure your success in air traffic controller selection processes."}
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">
            <Monitor className="h-6 w-6 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {isSpanish ? "Formación Online" : "Online Training"}
          </h3>
          
          <p className="text-gray-600">
            {isSpanish
              ? "70 horas de contenido interactivo accesible 24/7. Incluye teoría, ejercicios prácticos y pruebas similares al examen real de las oposiciones."
              : "70 hours of interactive content accessible 24/7. Includes theory, practical exercises, and tests similar to the real exam."}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {isSpanish ? "Formación Presencial" : "In-Person Training"}
          </h3>
          
          <p className="text-gray-600">
            {isSpanish
              ? "30 horas de formación intensiva en nuestras instalaciones en Madrid. Prácticas con simuladores y preparación específica para las pruebas."
              : "30 hours of intensive training at our facilities in Madrid. Practices with simulators and specific preparation for the tests."}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">
            <UserCheck className="h-6 w-6 text-primary" />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {isSpanish ? "Asesoría Personalizada" : "Personalized Consultation"}
          </h3>
          
          <p className="text-gray-600">
            {isSpanish
              ? "20 horas de asesoría personal, mock-exams y sesiones de preparación para la entrevista. Atención individualizada y seguimiento constante."
              : "20 hours of personal consultation, mock exams, and interview preparation sessions. Individualized attention and constant monitoring."}
          </p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 bg-primary/5 p-6 rounded-lg"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex-shrink-0">
            <CalendarCheck className="h-8 w-8 text-primary min-w-[32px]" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              {isSpanish ? "Horario Flexible" : "Flexible Schedule"}
            </h4>
            <p className="text-gray-600">
              {isSpanish
                ? "Sesiones online de 19h a 21h entre semana, diseñadas para compatibilizar con tu trabajo o estudios. Una semana presencial intensiva en nuestro centro de Madrid."
                : "Online sessions from 7 PM to 9 PM on weekdays, designed to be compatible with your work or studies. One intensive in-person week at our Madrid center."}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Methodology;
