
import { useLanguage } from '../contexts/LanguageContext';
import ContactFormSection from '@/components/procesos-selectivos/ContactFormSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Users, Briefcase, Clock, Calendar, Sparkles, BookOpen } from "lucide-react";

const PreparacionProcesosSelectivos = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // Function to scroll to form
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-0 pb-12 bg-gradient-to-b from-white to-slate-50 overflow-x-hidden">
      {/* Notice the change from py-12 to pt-0 pb-12 */}
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-16 -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Hero background image with gradient overlay */}
          <div 
            className="absolute inset-0 w-full bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('/lovable-uploads/d7fc962b-9fb8-41b5-8c85-92a93bd9f13d.png')",
              height: "300px",
              opacity: "0.3"
            }}
          >
            <div 
              className="absolute inset-0 w-full h-full" 
              style={{ 
                background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,1) 100%)" 
              }}
            ></div>
          </div>
          
          {/* Content positioned over the background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center pt-16 pb-12"
          >
            <Badge className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              {isSpanish ? "Curso Especializado" : "Specialized Course"}
            </Badge>
            
            <h1 className="mt-4 text-4xl font-bold text-gray-900">
              {isSpanish 
                ? "Preparación para Procesos Selectivos ANSP" 
                : "ANSP Selection Process Preparation"}
            </h1>
            
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {isSpanish
                ? "Formación adaptada para superar con éxito los procesos de selección de proveedores de servicios de navegación aérea en Europa."
                : "Tailored training to successfully pass the selection processes of air navigation service providers in Europe."}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={scrollToForm}
              >
                {isSpanish ? "Solicitar Información" : "Request Information"}
              </Button>
              
              <Link to="/cursos">
                <Button variant="outline">
                  {isSpanish ? "Ver todos los cursos" : "View all courses"}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {isSpanish ? "Formación Adaptada a Procesos Selectivos" : "Training Adapted to Selection Processes"}
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  {isSpanish
                    ? "Nuestro programa de formación está específicamente adaptado para ayudarte a superar con éxito los procesos de selección de los proveedores de servicios de navegación aérea (ANSP) europeos. Basado en nuestra experiencia y conocimiento detallado de los procesos selectivos, hemos diseñado un entrenamiento completo que cubre todas las fases y aspectos evaluados."
                    : "Our training program is specifically adapted to help you successfully pass the selection processes of European air navigation service providers (ANSPs). Based on our experience and detailed knowledge of the selection processes, we have designed comprehensive training covering all phases and aspects evaluated."}
                </p>
                
                <p>
                  {isSpanish
                    ? "Cada ANSP tiene sus propios requisitos y métodos de evaluación, por eso ofrecemos un programa flexible que puede personalizarse según el proceso específico al que te presentes. Nuestro objetivo es maximizar tus posibilidades de éxito proporcionándote las herramientas, conocimientos y técnicas necesarios."
                    : "Each ANSP has its own requirements and evaluation methods, which is why we offer a flexible program that can be customized according to the specific process you are applying for. Our goal is to maximize your chances of success by providing you with the necessary tools, knowledge, and techniques."}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Key Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                {isSpanish ? "Equipo de Formación Especializado" : "Specialized Training Team"}
              </h3>
              
              <p className="text-gray-700 mb-4">
                {isSpanish
                  ? "Contamos con instructores y formadores que han participado en procesos de selección y conocen de primera mano los requisitos y criterios de evaluación de los principales ANSP europeos."
                  : "We have instructors and trainers who have participated in selection processes and know first-hand the requirements and evaluation criteria of the main European ANSPs."}
              </p>
              
              <ul className="space-y-2">
                {[
                  isSpanish ? "Controladores en activo" : "Active controllers",
                  isSpanish ? "Psicólogos especialistas en selección" : "Psychologists specialized in selection",
                  isSpanish ? "Formadores con experiencia en ANSP" : "Trainers with ANSP experience"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                {isSpanish ? "Programa Personalizado" : "Personalized Program"}
              </h3>
              
              <p className="text-gray-700 mb-4">
                {isSpanish
                  ? "Adaptamos el programa a tus necesidades específicas y al proceso de selección concreto al que te presentas, con foco en las áreas que necesitas mejorar."
                  : "We adapt the program to your specific needs and the particular selection process you are applying for, focusing on the areas you need to improve."}
              </p>
              
              <ul className="space-y-2">
                {[
                  isSpanish ? "Evaluación inicial de competencias" : "Initial skills assessment",
                  isSpanish ? "Plan de estudio personalizado" : "Personalized study plan",
                  isSpanish ? "Seguimiento individualizado" : "Individualized monitoring"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Training Areas Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {isSpanish ? "Áreas de Formación" : "Training Areas"}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Sparkles className="h-6 w-6 text-primary" />,
                  title: isSpanish ? "Pruebas Psicotécnicas" : "Psychometric Tests",
                  description: isSpanish 
                    ? "Desarrollo de habilidades específicas evaluadas en los procesos de selección: razonamiento, atención, memoria, toma de decisiones."
                    : "Development of specific skills evaluated in selection processes: reasoning, attention, memory, decision making."
                },
                {
                  icon: <BookOpen className="h-6 w-6 text-primary" />,
                  title: isSpanish ? "Conocimientos Técnicos" : "Technical Knowledge",
                  description: isSpanish 
                    ? "Preparación en materias específicas: aeronáutica, meteorología, navegación, inglés aeronáutico y fraseología."
                    : "Preparation in specific subjects: aeronautics, meteorology, navigation, aeronautical English and phraseology."
                },
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: isSpanish ? "Entrevistas y Dinámicas" : "Interviews and Dynamics",
                  description: isSpanish 
                    ? "Técnicas para superar con éxito las fases de entrevista personal y dinámicas de grupo evaluadas en los procesos."
                    : "Techniques to successfully pass the personal interview phases and group dynamics evaluated in the processes."
                }
              ].map((area, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                  <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">
                    {area.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Schedule Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-6 mb-16"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {isSpanish ? "Horarios Adaptados" : "Adapted Schedules"}
            </h2>
            
            <p className="text-gray-700 mb-6">
              {isSpanish
                ? "Comprendemos que muchos de nuestros alumnos compaginan la preparación con otras responsabilidades, por lo que ofrecemos un sistema flexible que se adapta a tus necesidades."
                : "We understand that many of our students combine preparation with other responsibilities, which is why we offer a flexible system that adapts to your needs."}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {isSpanish ? "Modalidad Online" : "Online Mode"}
                  </h3>
                  <p className="text-gray-600">
                    {isSpanish
                      ? "Acceso 24/7 a nuestra plataforma de formación con contenidos interactivos, ejercicios y simulaciones de pruebas."
                      : "24/7 access to our training platform with interactive content, exercises and test simulations."}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {isSpanish ? "Sesiones Presenciales" : "In-Person Sessions"}
                  </h3>
                  <p className="text-gray-600">
                    {isSpanish
                      ? "Organizamos sesiones presenciales en fines de semana y concentraciones intensivas adaptadas al calendario de convocatorias."
                      : "We organize in-person sessions on weekends and intensive concentrations adapted to the call schedule."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-xl p-8 text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {isSpanish ? "¿Listo para dar el siguiente paso?" : "Ready to take the next step?"}
            </h2>
            
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              {isSpanish
                ? "Solicita información detallada sobre nuestros programas de preparación y comienza tu camino hacia una carrera como controlador aéreo."
                : "Request detailed information about our preparation programs and begin your journey toward a career as an air traffic controller."}
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={scrollToForm}
            >
              {isSpanish ? "Contactar Ahora" : "Contact Now"}
            </Button>
          </motion.div>
          
          {/* Contact Form Section */}
          <ContactFormSection id="contact-form-section" />
        </div>
      </div>
    </div>
  );
};

export default PreparacionProcesosSelectivos;
