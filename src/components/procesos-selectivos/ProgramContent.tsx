
import { motion } from 'framer-motion';
import { Check, Brain, CircleDashed, FileStack, Users } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const ProgramContent = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const contentModules = [
    {
      icon: <Brain className="h-5 w-5 text-primary" />,
      title: isSpanish ? "Pruebas psicométricas" : "Psychometric tests",
      items: isSpanish 
        ? ["Razonamiento verbal", "Razonamiento numérico", "Razonamiento abstracto", "Técnicas de mejora", "Ejercicios prácticos"] 
        : ["Verbal reasoning", "Numerical reasoning", "Abstract reasoning", "Improvement techniques", "Practical exercises"]
    },
    {
      icon: <CircleDashed className="h-5 w-5 text-primary" />,
      title: isSpanish ? "Pruebas específicas ATC" : "Specific ATC tests",
      items: isSpanish 
        ? ["Comprensión técnica", "Percepción espacial", "Multitarea", "Memoria", "Simulaciones de ejercicios reales"] 
        : ["Technical comprehension", "Spatial perception", "Multitasking", "Memory", "Real exercise simulations"]
    },
    {
      icon: <FileStack className="h-5 w-5 text-primary" />,
      title: isSpanish ? "Conocimientos teóricos" : "Theoretical knowledge",
      items: isSpanish 
        ? ["Normativa aeronáutica", "Conceptos de navegación", "Meteorología básica", "Fraseología aeronáutica", "Estudio de casos prácticos"] 
        : ["Aeronautical regulations", "Navigation concepts", "Basic meteorology", "Aeronautical phraseology", "Practical case studies"]
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: isSpanish ? "Preparación para entrevista" : "Interview preparation",
      items: isSpanish 
        ? ["Mock interviews", "Técnicas de comunicación", "Preguntas frecuentes", "Casos de éxito", "Preparación personalizada"] 
        : ["Mock interviews", "Communication techniques", "Frequently asked questions", "Success cases", "Personalized preparation"]
    }
  ];

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
          {isSpanish ? "Contenido del Programa de Oposiciones" : "Program Content"}
        </h2>
        
        <p className="text-gray-600 max-w-3xl mx-auto">
          {isSpanish
            ? "Te preparamos para superar todas las fases de las oposiciones, desde las pruebas iniciales hasta la entrevista final."
            : "We prepare you to pass all phases of the selection process, from the initial tests to the final interview."}
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {contentModules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                {module.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
            </div>
            
            <ul className="space-y-2">
              {module.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProgramContent;
