'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.services': 'International ATC Services',
    'nav.blog': 'Blog',
    
    // Home Page
    'home.badge': 'ATC Training Center',
    'home.title': 'Experts in Training for',
    'home.titleHighlight': 'Air Traffic Controllers',
    'home.subtitle': 'At Nelso Formation, we specialize in providing high-quality training for air traffic controllers and aviation sector students.',
    'home.feature1.title': 'Professional Experience',
    'home.feature1.description': 'Our team has years of experience in the aviation sector and specialized training.',
    'home.feature2.title': 'Personalized Training',
    'home.feature2.description': 'We adapt our programs to the specific needs of each student and organization.',
    'home.feature3.title': 'Academic Excellence',
    'home.feature3.description': 'We guarantee the highest quality standards in all our training programs.',
    'home.cta.courses': 'Discover Our Courses',
    'home.cta.services': 'Our Services',
    
    // Courses Page
    'courses.badge': 'Training Programs',
    'courses.title': 'Courses for Students',
    'courses.subtitle': 'Discover our wide range of courses specifically designed for aviation sector students.',
    'courses.category.preparation': 'Preparation',
    'courses.category.specialization': 'Specialization',
    'courses.category.refresher': 'Refresher',
    'courses.atco.title': 'ATCO Initial Course',
    'courses.atco.description': 'Comprehensive preparation for the air traffic controller selection process.',
    'courses.english.title': 'English for Aviation',
    'courses.english.description': 'Improve your aviation English level with our specialized program.',
    'courses.refresher.title': 'Refresher Course',
    'courses.refresher.description': 'Update your knowledge and stay current with the latest regulations.',
    'courses.duration': '{duration} months',
    'courses.moreInfo': 'More information',
    
    // Services Page
    'services.badge': 'Professional Services',
    'services.title': 'Services for ATC',
    'services.subtitle': 'We offer complete training solutions for air navigation service providers and sector organizations.',
    'services.continuous.title': 'Continuous Training',
    'services.continuous.description': 'Training programs designed to maintain and improve the skills of active air traffic controllers.',
    'services.continuous.feature1': 'Refresher and update courses',
    'services.continuous.feature2': 'Training in new technologies',
    'services.continuous.feature3': 'Professional development programs',
    'services.continuous.feature4': 'Specialized workshops',
    'services.consulting.title': 'Consulting and Advisory',
    'services.consulting.description': 'Expert consulting services for aviation sector organizations.',
    'services.consulting.feature1': 'Analysis of training needs',
    'services.consulting.feature2': 'Development of customized programs',
    'services.consulting.feature3': 'Skills assessment',
    'services.consulting.feature4': 'Regulatory advice',
    'services.content.title': 'Content Development',
    'services.content.description': 'Creation of training materials adapted to specific needs.',
    'services.content.feature1': 'Specialized teaching materials',
    'services.content.feature2': 'Interactive multimedia content',
    'services.content.feature3': 'Technical documentation',
    'services.content.feature4': 'Online learning resources',
    'services.evaluation.title': 'Evaluation Services',
    'services.evaluation.description': 'Comprehensive evaluation of professional skills and abilities.',
    'services.evaluation.feature1': 'Language proficiency assessments',
    'services.evaluation.feature2': 'Technical knowledge tests',
    'services.evaluation.feature3': 'Practical skills evaluation',
    'services.evaluation.feature4': 'Detailed progress reports',
    'services.aesa.title': 'AESA Certified Courses',
    'services.aesa.subtitle': 'We provide official training certified by AESA for air traffic controllers.',
    
    // Blog
    'blog.title': 'Latest Posts',
    'blog.subtitle': 'Stay updated with our latest news and insights about air traffic control and aviation.',
    'blog.readMore': 'Read more',
    
    // ATCO Initial Course Page
    'atco.badge': 'Professional Certification',
    'atco.title': 'Air Traffic Controller Initial Training',
    'atco.subtitle': 'Start your career as an Air Traffic Controller with our comprehensive initial training program.',
    'atco.overview.title': 'Course Overview',
    'atco.overview.description': 'The Initial Training course for Air Traffic Controllers is the first step towards obtaining the Student Air Traffic Controller license. This program combines theoretical knowledge with practical training using state-of-the-art simulators.',
    'atco.duration.title': 'Duration',
    'atco.duration.time': '2 years',
    'atco.duration.description': 'Full-time training program',
    'atco.requirements.title': 'Requirements',
    'atco.requirements.list': [
      'Be at least 18 years old',
      'Hold a high school diploma or equivalent',
      'English level B2 or higher',
      'Pass the medical examination class 3',
      'Pass the selection process'
    ],
    'atco.phases.title': 'Training Phases',
    'atco.phases.basic.title': 'Basic Training',
    'atco.phases.basic.duration': '7 months',
    'atco.phases.basic.description': 'Foundation knowledge and skills common to all ATC specialties',
    'atco.phases.rating.title': 'Rating Training',
    'atco.phases.rating.duration': '17 months',
    'atco.phases.rating.description': 'Specialized training in specific ATC disciplines',
    'atco.button.apply': 'Apply Now',
    'atco.button.program': 'Download Program',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.courses': 'Cursos',
    'nav.services': 'Servicios Internacionales ATC',
    'nav.blog': 'Blog',
    
    // Home Page
    'home.badge': 'Centro de Formación ATC',
    'home.title': 'Expertos en Formación para',
    'home.titleHighlight': 'Controladores Aéreos',
    'home.subtitle': 'En Nelso Formación, nos especializamos en proporcionar formación de alta calidad para controladores aéreos y estudiantes del sector aeronáutico.',
    'home.feature1.title': 'Experiencia Profesional',
    'home.feature1.description': 'Nuestro equipo cuenta con años de experiencia en el sector aeronáutico y formación especializada.',
    'home.feature2.title': 'Formación Personalizada',
    'home.feature2.description': 'Adaptamos nuestros programas a las necesidades específicas de cada alumno y organización.',
    'home.feature3.title': 'Excelencia Académica',
    'home.feature3.description': 'Garantizamos los más altos estándares de calidad en todos nuestros programas formativos.',
    'home.cta.courses': 'Descubre Nuestros Cursos',
    'home.cta.services': 'Nuestros Servicios',
    
    // Courses Page
    'courses.badge': 'Programas Formativos',
    'courses.title': 'Cursos para Alumnos',
    'courses.subtitle': 'Descubre nuestra amplia gama de cursos diseñados específicamente para estudiantes del sector aeronáutico.',
    'courses.category.preparation': 'Preparación',
    'courses.category.specialization': 'Especialización',
    'courses.category.refresher': 'Actualización',
    'courses.atco.title': 'Curso ATCO Initial',
    'courses.atco.description': 'Preparación integral para el proceso de selección de controladores aéreos.',
    'courses.english.title': 'English for Aviation',
    'courses.english.description': 'Mejora tu nivel de inglés aeronáutico con nuestro programa especializado.',
    'courses.refresher.title': 'Curso de Actualización',
    'courses.refresher.description': 'Actualiza tus conocimientos y mantente al día con las últimas normativas.',
    'courses.duration': '{duration} meses',
    'courses.moreInfo': 'Más información',
    
    // Services Page
    'services.badge': 'Servicios Profesionales',
    'services.title': 'Servicios para ATC',
    'services.subtitle': 'Ofrecemos soluciones formativas completas para proveedores de servicios de navegación aérea y organizaciones del sector.',
    'services.continuous.title': 'Formación Continua',
    'services.continuous.description': 'Programas de formación diseñados para mantener y mejorar las competencias de los controladores aéreos en activo.',
    'services.continuous.feature1': 'Cursos de refresco y actualización',
    'services.continuous.feature2': 'Formación en nuevas tecnologías',
    'services.continuous.feature3': 'Programas de desarrollo profesional',
    'services.continuous.feature4': 'Talleres especializados',
    'services.consulting.title': 'Consultoría y Asesoramiento',
    'services.consulting.description': 'Servicios de consultoría experta para organizaciones del sector aeronáutico.',
    'services.consulting.feature1': 'Análisis de necesidades formativas',
    'services.consulting.feature2': 'Desarrollo de programas personalizados',
    'services.consulting.feature3': 'Evaluación de competencias',
    'services.consulting.feature4': 'Asesoramiento normativo',
    'services.content.title': 'Desarrollo de Contenidos',
    'services.content.description': 'Creación de materiales formativos adaptados a las necesidades específicas.',
    'services.content.feature1': 'Materiales didácticos especializados',
    'services.content.feature2': 'Contenidos multimedia interactivos',
    'services.content.feature3': 'Documentación técnica',
    'services.content.feature4': 'Recursos de aprendizaje online',
    'services.evaluation.title': 'Servicios de Evaluación',
    'services.evaluation.description': 'Evaluación integral de competencias y habilidades profesionales.',
    'services.evaluation.feature1': 'Evaluaciones de competencia lingüística',
    'services.evaluation.feature2': 'Pruebas de conocimientos técnicos',
    'services.evaluation.feature3': 'Evaluación de habilidades prácticas',
    'services.evaluation.feature4': 'Informes detallados de progreso',
    'services.aesa.title': 'Cursos Certificados por AESA',
    'services.aesa.subtitle': 'Proporcionamos formación oficial certificada por AESA para controladores de tránsito aéreo.',
    
    // Página del Curso Inicial de Controladores
    'atco.badge': 'Certificación Profesional',
    'atco.title': 'Formación Inicial de Controladores Aéreos',
    'atco.subtitle': 'Inicia tu carrera como Controlador de Tránsito Aéreo con nuestro programa de formación inicial.',
    'atco.overview.title': 'Descripción del Curso',
    'atco.overview.description': 'El curso de Formación Inicial de Controladores Aéreos es el primer paso para obtener la licencia de Alumno Controlador. Este programa combina conocimientos teóricos con formación práctica utilizando simuladores de última generación.',
    'atco.duration.title': 'Duración',
    'atco.duration.time': '2 años',
    'atco.duration.description': 'Programa de formación a tiempo completo',
    'atco.requirements.title': 'Requisitos',
    'atco.requirements.list': [
      'Tener al menos 18 años',
      'Título de Bachillerato o equivalente',
      'Nivel de inglés B2 o superior',
      'Superar el reconocimiento médico clase 3',
      'Superar el proceso de selección'
    ],
    'atco.phases.title': 'Fases de Formación',
    'atco.phases.basic.title': 'Formación Básica',
    'atco.phases.basic.duration': '7 meses',
    'atco.phases.basic.description': 'Conocimientos y habilidades fundamentales comunes a todas las especialidades ATC',
    'atco.phases.rating.title': 'Formación de Habilitación',
    'atco.phases.rating.duration': '17 meses',
    'atco.phases.rating.description': 'Formación especializada en disciplinas específicas de control',
    'atco.button.apply': 'Solicitar Plaza',
    'atco.button.program': 'Descargar Programa',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  // Effect to persist language preference
  useEffect(() => {
    // Store the language preference when it changes
    localStorage.setItem('nelso-language-preference', language);
  }, [language]);

  const t = (key: string): string => {
    // Get the translation from the language object
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    
    // Check if it's an array (for lists) and return a string representation if needed
    if (Array.isArray(translation)) {
      return translation.join(''); // Convert array to string if needed
    }
    
    // Return the translation or the key if not found
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
