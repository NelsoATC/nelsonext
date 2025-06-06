'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Users, BookOpen, Target, Award, FileText, Clock, Briefcase, GraduationCap } from "lucide-react";
import ContactoSection from "@/components/sections/ContactoSection";
import CourseFAQ, { FAQItem } from "@/components/shared/CourseFAQ";

const FormacionAvanzada = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const courses = [
    {
      title: isSpanish ? "Formación de Instructor (OJTI/STDI)" : "Instructor Training (OJTI/STDI)",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      description: isSpanish 
        ? "Curso de formación para controladores que desean convertirse en instructores de formación en el puesto de trabajo (OJTI) o instructores de dispositivos sintéticos (STDI)"
        : "Training course for controllers who want to become on-the-job training instructors (OJTI) or synthetic training device instructors (STDI)",
      items: isSpanish 
        ? ["Técnicas de instrucción", "Evaluación del rendimiento", "Gestión de la formación", "Feedback constructivo"]
        : ["Training techniques", "Performance assessment", "Training management", "Constructive feedback"]
    },
    {
      title: isSpanish ? "Formación de Evaluador" : "Evaluator Training",
      icon: <Award className="h-10 w-10 text-primary" />,
      description: isSpanish 
        ? "Curso para controladores que desean obtener la anotación de evaluador para realizar evaluaciones de competencia y unidad"
        : "Course for controllers who want to obtain the evaluator endorsement to conduct competence and unit assessments",
      items: isSpanish 
        ? ["Métodos de evaluación", "Criterios de evaluación", "Documentación reglamentaria", "Gestión de situaciones difíciles"]
        : ["Assessment methods", "Evaluation criteria", "Regulatory documentation", "Management of difficult situations"]
    },
    {
      title: isSpanish ? "Actualización ATC" : "ATC Refresher",
      icon: <Clock className="h-10 w-10 text-primary" />,
      description: isSpanish 
        ? "Cursos de actualización de conocimientos para controladores en activo, diseñados para mantener y mejorar competencias"
        : "Knowledge refresher courses for active controllers, designed to maintain and improve competencies",
      items: isSpanish 
        ? ["Cambios normativos", "Nuevos procedimientos", "Gestión del tráfico", "Factores humanos avanzados"]
        : ["Regulatory changes", "New procedures", "Traffic management", "Advanced human factors"]
    }
  ];

  // Function to scroll to contact form
  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define FAQs for this course
  const faqs: FAQItem[] = [
    {
      question: isSpanish ? "¿Qué experiencia previa necesito para estos cursos avanzados?" : "What previous experience do I need for these advanced courses?",
      answer: isSpanish 
        ? "Para nuestros cursos avanzados, normalmente se requiere una licencia válida de controlador aéreo y experiencia operativa. Los requisitos específicos varían según el curso, como se detalla en la sección de requisitos."
        : "For our advanced courses, you typically need a valid air traffic controller license and operational experience. Specific requirements vary by course, as detailed in the requirements section."
    },
    {
      question: isSpanish ? "¿Estos cursos son reconocidos oficialmente?" : "Are these courses officially recognized?",
      answer: isSpanish 
        ? "Sí, todos nuestros cursos avanzados están certificados por AESA y cumplen con el Reglamento UE 2015/340, lo que garantiza su reconocimiento en toda la Unión Europea."
        : "Yes, all our advanced courses are certified by AESA and comply with EU Regulation 2015/340, ensuring their recognition throughout the European Union."
    },
    {
      question: isSpanish ? "¿Cuál es la metodología de enseñanza?" : "What is the teaching methodology?",
      answer: isSpanish 
        ? "Nuestra metodología combina teoría y práctica con un enfoque en casos reales. Utilizamos simuladores avanzados y contamos con instructores que son profesionales en activo del sector."
        : "Our methodology combines theory and practice with a focus on real cases. We use advanced simulators and our instructors are active professionals in the sector."
    },
    {
      question: isSpanish ? "¿Ofrecen formación a medida para organizaciones?" : "Do you offer customized training for organizations?",
      answer: isSpanish 
        ? "Sí, podemos adaptar nuestros programas avanzados a las necesidades específicas de ANSPs, aeropuertos o centros de formación. Contacta con nosotros para discutir tus requisitos."
        : "Yes, we can adapt our advanced programs to the specific needs of ANSPs, airports, or training centers. Contact us to discuss your requirements."
    }
  ];

  return (
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
            {isSpanish ? "Desarrollo Profesional" : "Professional Development"}
          </Badge>
          
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            {isSpanish 
              ? "Formación Avanzada para Controladores" 
              : "Advanced Training for Controllers"}
          </h1>
          
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {isSpanish
              ? "Programas especializados para controladores aéreos en activo que buscan ampliar sus competencias profesionales y avanzar en su carrera."
              : "Specialized programs for active air traffic controllers seeking to expand their professional skills and advance in their career."}
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

        {/* Courses Overview */}
        <div className="grid gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {isSpanish ? "Nuestros Programas Avanzados" : "Our Advanced Programs"}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="border-none shadow-lg overflow-hidden">
                  <div className="h-2 bg-primary w-full"></div>
                  <CardContent className="p-6">
                    <div className="rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mb-4">
                      {course.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                    <p className="text-gray-600 mb-6">
                      {course.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {course.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" onClick={scrollToContactForm}>
                      {isSpanish ? "Más información" : "More information"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {isSpanish ? "Requisitos de Acceso" : "Entry Requirements"}
          </h2>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {isSpanish ? "Para formación de instructor (OJTI/STDI)" : "For instructor training (OJTI/STDI)"}
                </h3>
                <ul className="space-y-3">
                  {(isSpanish ? [
                    "Licencia de controlador de tránsito aéreo válida",
                    "Anotación de unidad válida durante al menos un año",
                    "Experiencia operativa reciente",
                    "Certificado médico de Clase 3 vigente"
                  ] : [
                    "Valid air traffic controller license",
                    "Valid unit endorsement for at least one year",
                    "Recent operational experience",
                    "Valid Class 3 medical certificate"
                  ]).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {isSpanish ? "Para formación de evaluador" : "For evaluator training"}
                </h3>
                <ul className="space-y-3">
                  {(isSpanish ? [
                    "Licencia de controlador de tránsito aéreo válida",
                    "Al menos 2 años de experiencia con anotación de unidad",
                    "Conocimiento profundo de procesos de evaluación",
                    "Recomendación del proveedor de navegación aérea"
                  ] : [
                    "Valid air traffic controller license",
                    "At least 2 years of experience with unit endorsement",
                    "In-depth knowledge of evaluation processes",
                    "Recommendation from the air navigation service provider"
                  ]).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {isSpanish ? "¿Por qué elegir Nelso?" : "Why Choose Nelso?"}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {isSpanish ? "Reconocimiento Oficial" : "Official Recognition"}
              </h3>
              <p className="text-gray-600">
                {isSpanish
                  ? "Cursos certificados y reconocidos por AESA y compatibles con los requisitos del Reglamento UE 2015/340."
                  : "Courses certified and recognized by AESA and compliant with EU Regulation 2015/340 requirements."}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {isSpanish ? "Instructores Expertos" : "Expert Instructors"}
              </h3>
              <p className="text-gray-600">
                {isSpanish
                  ? "Nuestro equipo está formado por profesionales con amplia experiencia en formación ATC y entornos operativos reales."
                  : "Our team consists of professionals with extensive experience in ATC training and real operational environments."}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {isSpanish ? "Formación Práctica" : "Practical Training"}
              </h3>
              <p className="text-gray-600">
                {isSpanish
                  ? "Enfoque práctico centrado en situaciones reales y casos de estudio basados en la experiencia operativa."
                  : "Practical approach focused on real situations and case studies based on operational experience."}
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
            {isSpanish ? "¿Listo para avanzar en tu carrera profesional?" : "Ready to advance in your professional career?"}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {isSpanish
              ? "Contacta con nosotros para obtener más información sobre nuestros programas de formación avanzada. Cursos disponibles en fechas flexibles."
              : "Contact us for more information about our advanced training programs. Courses available on flexible dates."}
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={scrollToContactForm}
          >
            {isSpanish ? "Solicitar Información" : "Request Information"}
          </Button>
        </motion.div>
        
        {/* Add FAQ section */}
        <CourseFAQ 
          faqs={faqs} 
          title={isSpanish ? "Preguntas Frecuentes sobre Formación Avanzada" : "Frequently Asked Questions about Advanced Training"} 
        />

        {/* Contact Form Section - embedded directly in the page */}
        <div id="contact-form-section" className="py-8 mt-16 border-t border-gray-200">
          <ContactoSection />
        </div>
      </div>
    </div>
  );
};

export default FormacionAvanzada;
