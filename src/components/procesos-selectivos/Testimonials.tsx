
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        {isSpanish ? "Opiniones de Nuestros Alumnos" : "Student Testimonials"}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="mb-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                {isSpanish
                  ? "\"Gracias a la preparación con Nelso, superé el proceso selectivo de ENAIRE a la primera. Las simulaciones de pruebas y el entrenamiento personalizado marcaron la diferencia.\""
                  : "\"Thanks to the preparation with Nelso, I passed the ENAIRE selection process on the first try. The test simulations and personalized training made the difference.\""}
              </p>
              <div className="mt-4">
                <p className="font-medium">{isSpanish ? "Carlos Martínez" : "Carlos Martinez"}</p>
                <p className="text-sm text-gray-500">{isSpanish ? "Alumno promoción 2023" : "Student class of 2023"}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="mb-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic">
                {isSpanish
                  ? "\"El curso de preparación fue fundamental para superar las pruebas psicotécnicas y la simulación. Los profesores conocen perfectamente el proceso y te preparan para cada detalle.\""
                  : "\"The preparation course was essential to pass the psychometric tests and the simulation. The teachers know the process perfectly and prepare you for every detail.\""}
              </p>
              <div className="mt-4">
                <p className="font-medium">{isSpanish ? "Laura Gómez" : "Laura Gomez"}</p>
                <p className="text-sm text-gray-500">{isSpanish ? "Alumna promoción 2022" : "Student class of 2022"}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default Testimonials;
