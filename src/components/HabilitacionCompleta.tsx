
import Link from "next/link";
import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from "@/components/shared/SEO";
import ContactoSection from "@/components/sections/ContactoSection";
import AlumniCarousel from "@/components/courses/AlumniCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Users, BookOpen, Target, Briefcase } from "lucide-react";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import CourseFAQ, { FAQItem } from "@/components/shared/CourseFAQ";

const HabilitacionCompleta = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to scroll to contact form
  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define FAQs for this course - mix of questions from Block 1 and Block 2
  const fullRatingFaqs: FAQItem[] = [
    {
      question: isSpanish ? "¿Qué obtengo al completar la Habilitación Completa?" : "What do I get when I complete the Full Rating?",
      answer: isSpanish 
        ? "Al completar la Habilitación Completa, obtendrás la licencia de alumno controlador con todas las habilitaciones: Control de Aeródromo (ADC), Aproximación por Vigilancia (APS), Control de Ruta por Vigilancia (ACS), Aproximación (APP) y Control de Ruta por Procedimientos (ACP), lo que te permitirá iniciar tu formación en el puesto de trabajo en torres de control y centros de control de aproximación y ruta."
        : "Upon completing the Full Rating, you will obtain a student controller license with all ratings: Aerodrome Control (ADC), Surveillance Approach (APS), Surveillance Route Control (ACS), Approach (APP) and Procedural Route Control (ACP), allowing you to begin on-the-job training in control towers and approach and route control centers."
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
    },
    {
      question: isSpanish ? "¿Qué diferencias hay entre el control de aproximación y el control de ruta?" : "What are the differences between approach control and route control?",
      answer: isSpanish 
        ? "El control de aproximación gestiona las llegadas y salidas de aeronaves en las proximidades de los aeropuertos, mientras que el control de ruta se encarga de las aeronaves en ruta entre aeropuertos a altitudes superiores. Ambas funciones se cubren en este curso completo."
        : "Approach control manages aircraft arrivals and departures in the vicinity of airports, while route control handles aircraft en route between airports at higher altitudes. Both functions are covered in this comprehensive course."
    },
    {
      question: isSpanish ? "¿Qué tecnología se utiliza en los simuladores de este curso?" : "What technology is used in the simulators for this course?",
      answer: isSpanish 
        ? "Utilizamos simuladores de última generación que replican con precisión sistemas radar y herramientas de gestión del tráfico aéreo similares a las utilizadas en los centros de control reales de navegación aérea."
        : "We use state-of-the-art simulators that accurately replicate radar systems and air traffic management tools similar to those used in real air navigation control centers."
    }
  ];

  return (
    <>
      <SEO 
        title={isSpanish ? "Habilitación Completa | Nelso Formación" : "Complete Qualification | Nelso Formación"}
        description={isSpanish 
          ? "Programa completo para obtener habilitaciones de controlador aéreo - Torre, Aproximación y Ruta." 
          : "Complete program to obtain air traffic controller qualifications - Tower, Approach and Route."}
        keywords={isSpanish 
          ? "habilitación completa, controlador aéreo, torre, aproximación, ruta, AESA" 
          : "complete qualification, air traffic controller, tower, approach, route, AESA"}
        path="/habilitacion-completa"
        image="/images/og/course-og.jpg"
        type="website"
      />
      <div className="min-h-screen py-12 bg-gradient-to-b from-white to-slate-50">
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
                ? "Habilitación Completa de Controlador Aéreo" 
                : "Complete Air Traffic Controller Qualification"}
            </h1>
            
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {isSpanish
                ? "Obtén todas las habilitaciones necesarias para convertirte en un controlador aéreo completamente cualificado: Control de Aeródromo (ADC), Aproximación (APP), Aproximación por Vigilancia (APS), Control de Área por Procedimientos (ACP) y Control de Área por Vigilancia (ACS)."
                : "Get all the necessary qualifications to become a fully qualified air traffic controller: Aerodrome Control (ADC), Approach (APP), Surveillance Approach (APS), Procedural Area Control (ACP) and Surveillance Area Control (ACS)."}
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
                    ? "El programa de Habilitación Completa de Nelso proporciona la formación integral para convertirte en un controlador aéreo con todas las habilitaciones, cumpliendo con todos los requisitos establecidos por AESA y la normativa europea."
                    : "Nelso's Complete Qualification program provides comprehensive training to become an air traffic controller with all ratings, meeting all requirements established by AESA and European regulations."}
                </p>
                
                <p>
                  {isSpanish
                    ? "Este curso abarca tanto la formación básica como la formación de habilitación en Control de Aeródromo (ADC), Aproximación (APP), Aproximación por Vigilancia (APS), Control de Área por Procedimientos (ACP) y Control de Área por Vigilancia (ACS), permitiéndote obtener la licencia de alumno controlador con todas las especializaciones."
                    : "This course covers both basic training and rating training in Aerodrome Control (ADC), Approach (APP), Surveillance Approach (APS), Procedural Area Control (ACP) and Surveillance Area Control (ACS), allowing you to obtain a student controller license with all specializations."}
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
                    <p className="text-gray-600">{isSpanish ? "11-13 meses (más de 800 horas)" : "11-13 months (more than 800 hours)"}</p>
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
                  <h3 className="text-xl font-semibold mb-4">
                    {isSpanish ? "Bloque 1: Control de Torre" : "Block 1: Tower Control"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {isSpanish
                      ? "Formación básica en control de aeródromo y habilitación ADC, con prácticas intensivas en simulador de torre 3D."
                      : "Basic training in aerodrome control and ADC rating, with intensive practice in 3D tower simulator."}
                  </p>
                  <Link href="/modulo-1-torre" className="text-primary font-medium hover:underline">
                    {isSpanish ? "Ver detalles del Bloque 1" : "View Block 1 details"}
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">
                    {isSpanish ? "Bloque 2: Ruta y Aproximación" : "Block 2: Route and Approach"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {isSpanish
                      ? "Formación avanzada en control de aproximación y área, incluyendo habilitaciones APP, APS, ACP, y ACS con prácticas en simuladores radar."
                      : "Advanced training in approach and area control, including APP, APS, ACP, and ACS ratings with practices in radar simulators."}
                  </p>
                  <Link href="/modulo-2-aproximacion" className="text-primary font-medium hover:underline">
                    {isSpanish ? "Ver detalles del Bloque 2" : "View Block 2 details"}
                  </Link>
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
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AlumniCarousel />
          </div>
          
          <div id="contact-form-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
            <ContactoSection />
          </div>
          
          {/* Add FAQ Section after contact form */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <CourseFAQ 
              faqs={fullRatingFaqs} 
              title={isSpanish ? "Preguntas Frecuentes sobre la Habilitación Completa" : "Frequently Asked Questions about Full Rating"} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HabilitacionCompleta;
