import Link from "next/link";
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Users, BookOpen, Target, Award, Clock, Briefcase, Plane } from "lucide-react";
import ContactoSection from "@/components/sections/ContactoSection";
import CourseFAQ, { FAQItem } from "@/components/shared/CourseFAQ";
import AlumniCarousel from "@/components/courses/AlumniCarousel";
import SEO from "@/components/shared/SEO";

const Bloque1 = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // Function to scroll to contact form
  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define FAQs for this course
  const towerFaqs: FAQItem[] = [
    {
      question: isSpanish ? "¿Qué obtengo al completar el Módulo 1?" : "What do I get when I complete Module 1?",
      answer: isSpanish 
        ? "Al completar el Módulo 1, obtendrás la licencia de alumno controlador con habilitación de Control de Aeródromo (ADC), lo que te permitirá iniciar tu formación en el puesto de trabajo en torres de control."
        : "Upon completing Module 1, you will obtain a student controller license with Aerodrome Control (ADC) rating, allowing you to begin on-the-job training in control towers."
    },
    {
      question: isSpanish ? "¿Necesito conocimientos previos de aviación?" : "Do I need previous aviation knowledge?",
      answer: isSpanish 
        ? "No es necesario tener conocimientos previos específicos sobre aviación, ya que el curso está diseñado para proporcionar toda la formación necesaria desde cero. Sin embargo, un interés por el sector aeronáutico y conocimientos básicos pueden ser beneficiosos."
        : "No specific prior knowledge of aviation is necessary, as the course is designed to provide all the necessary training from scratch. However, an interest in the aeronautical sector and basic knowledge can be beneficial."
    },
    {
      question: isSpanish ? "¿Cuál es la tasa de empleabilidad tras completar el curso?" : "What is the employability rate after completing the course?",
      answer: isSpanish 
        ? "La tasa de empleabilidad es muy alta debido a la formación especializada y la demanda constante de controladores aéreos."
        : "The employability rate is very high due to the specialized training and constant demand for air traffic controllers."
    },
    {
      question: isSpanish ? "¿Está certificado este curso por AESA?" : "Is this course certified by AESA?",
      answer: isSpanish 
        ? "Sí, el curso está certificado por la Agencia Estatal de Seguridad Aérea (AESA) y cumple con todos los requisitos establecidos en el Reglamento UE 2015/340 y el Reglamento UE 2023/893 para la formación de controladores de tránsito aéreo."
        : "Yes, the course is certified by the State Aviation Safety Agency (AESA) and complies with all the requirements established in EU Regulation 2015/340 and EU Regulation 2023/893 for the training of air traffic controllers."
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-white to-slate-50">
      <SEO 
        title={isSpanish ? "Habilitación de Torre | Nelso Formación" : "Tower Rating | Nelso Formación"}
        description={isSpanish 
          ? "Formación especializada para obtener la licencia de alumno controlador con habilitación de Control de Aeródromo (ADC)." 
          : "Specialized training to obtain a student controller license with Aerodrome Control (ADC) rating."}
        keywords={isSpanish 
          ? "bloque 1, control de torre, ADC, controlador aéreo, AESA" 
          : "block 1, tower control, ADC, air traffic controller, AESA"}
        path="/bloque-1-licencia-torre"
        image="/images/og/course-og.jpg"
        type="website"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            {isSpanish ? "Curso de Formación Inicial" : "Initial Training Course"}
          </Badge>
          
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            {isSpanish 
              ? "Bloque 1: Control de Torre" 
              : "Block 1: Tower Control"}
          </h1>
          
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {isSpanish
              ? "Formación especializada para obtener la licencia de alumno controlador con habilitación de Control de Aeródromo (ADC)."
              : "Specialized training to obtain a student controller license with Aerodrome Control (ADC) rating."}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={scrollToContactForm}
            >
              {isSpanish ? "Solicitar Información" : "Request Information"}
            </Button>
            
            <Link href="/cursos">
              <Button variant="outline">
                {isSpanish ? "Ver todos los cursos" : "View all courses"}
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Course Overview */}
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
                  ? "El Bloque 1 de Control de Torre de Nelso proporciona la formación especializada para convertirte en controlador de aeródromo, cumpliendo con todos los requisitos establecidos por AESA y la normativa europea."
                  : "Nelso's Tower Control Block 1 provides specialized training to become an aerodrome controller, meeting all requirements established by AESA and European regulations."}
              </p>
              
              <p>
                {isSpanish
                  ? "Este curso abarca tanto la formación básica como la formación de habilitación en Control de Aeródromo (ADC), permitiéndote obtener la licencia de alumno controlador con especialización en control de torre."
                  : "This course covers both basic training and rating training in Aerodrome Control (ADC), allowing you to obtain a student controller license with tower control specialization."}
              </p>
              
              <div className="flex items-center gap-2 text-primary">
                <Target size={20} />
                <span className="font-medium">
                  {isSpanish ? "Formación certificada por AESA" : "AESA certified training"}
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
                  <p className="text-gray-600">{isSpanish ? "6 meses (más de 350 horas)" : "6 months (more than 350 hours)"}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 rounded-full p-1.5">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{isSpanish ? "Fecha de inicio" : "Start date"}</p>
                  <p className="text-gray-600">{isSpanish ? "2 de septiembre 2025" : "September 2nd 2025"}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 rounded-full p-1.5">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{isSpanish ? "Plazas disponibles" : "Available spots"}</p>
                  <p className="text-gray-600">16</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 rounded-full p-1.5">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{isSpanish ? "Modalidad" : "Modality"}</p>
                  <p className="text-gray-600">{isSpanish ? "Presencial (Madrid)" : "In-person (Madrid)"}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button 
                className="w-full"
                onClick={scrollToContactForm}
              >
                {isSpanish ? "Reservar Plaza" : "Reserve a Spot"}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Program Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {isSpanish ? "Contenido del Programa" : "Program Content"}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {isSpanish ? "Fase 1: Formación Básica" : "Phase 1: Basic Training"}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {isSpanish ? "3 meses (más de 150 horas)" : "3 months (more than 150 hours)"}
                </p>
                <ul className="space-y-2 mb-4">
                  {(isSpanish ? [
                    "Introducción a la navegación aérea",
                    "Derecho aeronáutico",
                    "Meteorología",
                    "Navegación",
                    "Aeronaves",
                    "Factores humanos",
                    "Equipos y sistemas"
                  ] : [
                    "Introduction to air navigation",
                    "Aviation law",
                    "Meteorology",
                    "Navigation",
                    "Aircraft",
                    "Human factors",
                    "Equipment and systems"
                  ]).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {isSpanish ? "Fase 2: Habilitación Control de Aeródromo" : "Phase 2: Aerodrome Control Rating"}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {isSpanish ? "3 meses (más de 200 horas)" : "3 months (more than 200 hours)"}
                </p>
                <ul className="space-y-2 mb-4">
                  {(isSpanish ? [
                    "Control de aeródromo (ADC)",
                    "Control de movimientos en tierra (GMC)",
                    "Control de torre (TWR)",
                    "Control aéreo (AIR)",
                    "Vigilancia de movimientos en tierra (GMS)",
                    "Prácticas en simulador de torre"
                  ] : [
                    "Aerodrome control (ADC)",
                    "Ground movement control (GMC)",
                    "Tower control (TWR)",
                    "Air control (AIR)",
                    "Ground movement surveillance (GMS)",
                    "Tower simulator practices"
                  ]).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {isSpanish ? "Nuestra Metodología" : "Our Methodology"}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {isSpanish ? "Formación Personalizada" : "Personalized Training"}
              </h3>
              <p className="text-gray-600">
                {isSpanish
                  ? "Grupos reducidos de máximo 16 alumnos, con seguimiento individualizado y atención directa por parte de los instructores."
                  : "Small groups of maximum 16 students, with individualized monitoring and direct attention from instructors."}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {isSpanish ? "Simulación Avanzada" : "Advanced Simulation"}
              </h3>
              <p className="text-gray-600">
                {isSpanish
                  ? "El 60% de la formación se realiza en simuladores de última generación que recrean escenarios reales de control de tráfico aéreo."
                  : "60% of the training is conducted in state-of-the-art simulators that recreate real air traffic control scenarios."}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {isSpanish ? "Profesionales Experimentados" : "Experienced Professionals"}
              </h3>
              <p className="text-gray-600">
                {isSpanish
                  ? "Nuestro equipo docente está formado por profesionales con amplia experiencia en diferentes entornos operativos del control aéreo."
                  : "Our teaching team consists of professionals with extensive experience in different air traffic control operational environments."}
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isSpanish ? "¿Listo para comenzar tu carrera como controlador aéreo?" : "Ready to start your career as an air traffic controller?"}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {isSpanish
              ? "Contacta con nosotros para obtener más información sobre el curso o reservar tu plaza para la próxima convocatoria. Plazas limitadas."
              : "Contact us for more information about the course or to reserve your spot for the next intake. Limited spots available."}
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={scrollToContactForm}
          >
            {isSpanish ? "Solicitar Información" : "Request Information"}
          </Button>
        </motion.div>
        
        {/* Alumni Carousel */}
        <AlumniCarousel />
        
        {/* Contact Form Section */}
        <div id="contact-form-section" className="py-8 mb-16">
          <ContactoSection />
        </div>
        
        {/* FAQ Section */}
        <CourseFAQ 
          faqs={towerFaqs} 
          title={isSpanish ? "Preguntas Frecuentes sobre el Bloque 1" : "Frequently Asked Questions about Block 1"} 
        />
      </div>
    </div>
  );
};

export default Bloque1;
