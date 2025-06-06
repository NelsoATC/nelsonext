'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, BookOpen, Target, Clock, Monitor, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

interface CourseOverviewProps {
  scrollToForm: () => void;
}

const CourseOverview = ({ scrollToForm }: CourseOverviewProps) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {isSpanish ? "Descripción del Curso" : "Course Description"}
        </h2>
        
        <div className="space-y-6 text-gray-700">
          <p>
            {isSpanish
              ? "El curso de Preparación de Convocatoria de Controladores Aéreos está diseñado específicamente para candidatos que desean superar las pruebas de selección para controladores de tránsito aéreo en los principales proveedores de navegación aérea."
              : "The Air Traffic Controller Selection Process Preparation course is specifically designed for candidates who want to pass the selection tests for air traffic controllers at main air navigation providers."}
          </p>
          
          <p>
            {isSpanish
              ? "Este programa intensivo combina formación teórica, ejercicios prácticos y simulaciones de pruebas reales para maximizar tus posibilidades de éxito en los procesos selectivos. Contamos con instructores que han participado en procesos de selección y conocen de primera mano los requisitos y criterios de evaluación."
              : "This intensive program combines theoretical training, practical exercises, and simulations of real tests to maximize your chances of success in the selection processes. We have instructors who have participated in selection processes and know first-hand the requirements and evaluation criteria."}
          </p>
          
          <div className="flex items-center gap-2 text-primary">
            <Target size={20} />
            <span className="font-medium bg-primary/10 px-3 py-1 rounded-full">
              {isSpanish 
                ? "¡16 alumnos aprobados en la última convocatoria!" 
                : "16 students passed in the last selection process!"}
            </span>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-md p-6 h-fit"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {isSpanish ? "Detalles del Curso" : "Course Details"}
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-primary/10 rounded-full p-1.5">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{isSpanish ? "Duración" : "Duration"}</p>
              <p className="text-gray-600">{isSpanish ? "120 horas" : "120 hours"}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-primary/10 rounded-full p-1.5">
              <Monitor className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{isSpanish ? "Modalidad" : "Modality"}</p>
              <p className="text-gray-600">
                {isSpanish
                  ? "70h online, 30h presencial, 20h asesoría"
                  : "70h online, 30h in-person, 20h consultation"}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-primary/10 rounded-full p-1.5">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{isSpanish ? "Requisitos mínimos" : "Minimum Requirements"}</p>
              <p className="text-gray-600">
                {isSpanish
                  ? "Ciudadanos UE, 18 años, bachillerato, buen nivel de inglés"
                  : "EU citizens, 18 years old, high school diploma, good English proficiency"}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-primary/10 rounded-full p-1.5">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{isSpanish ? "Próxima Edición" : "Next Edition"}</p>
              <p className="text-gray-600">{isSpanish ? "Junio 2025" : "June 2025"}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Button 
            className="w-full"
            onClick={scrollToForm}
          >
            {isSpanish ? "Reservar Plaza" : "Reserve a Spot"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseOverview;
