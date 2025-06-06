
import { BookOpen, GraduationCap, Award } from "lucide-react";
import React from "react";

export interface CourseCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  courses: Course[];
}

export interface Course {
  title: string;
  duration: string;
  description: string;
  path?: string;
}

export const getCourseCategoriesData = (isSpanish: boolean): CourseCategory[] => {
  return [
    {
      id: "initial",
      icon: React.createElement(BookOpen, { className: "h-8 w-8 text-primary" }),
      title: isSpanish ? "Formación Inicial" : "Initial Training",
      description: isSpanish 
        ? "Programas completos para comenzar tu carrera como controlador aéreo" 
        : "Complete programs to start your career as an air traffic controller",
      courses: [
        {
          title: isSpanish ? "Básica y Torre (Bloque 1)" : "Basic and Tower (Block 1)",
          duration: isSpanish ? "6 meses (más de 350 horas)" : "6 months (more than 350 hours)",
          description: isSpanish 
            ? "Especialización en control de torre"
            : "Specialization in tower control",
          path: "/bloque-1-licencia-torre"
        },
        {
          title: isSpanish ? "Ruta y Aproximación (Bloque 2)" : "Route and Approach (Block 2)",
          duration: isSpanish ? "6 meses (más de 450 horas)" : "6 months (more than 450 hours)",
          description: isSpanish 
            ? "Especialización en control de ruta y aproximación"
            : "Specialization in route and approach control",
          path: "/bloque-2-licencias-ruta-aproximacion"
        },
        {
          title: isSpanish ? "Habilitación Completa" : "Full Rating",
          duration: isSpanish ? "11-13 meses (más de 800 horas)" : "11-13 months (more than 800 hours)",
          description: isSpanish 
            ? "Formación completa para habilitación de controlador de tránsito aéreo"
            : "Complete training for air traffic controller rating",
          path: "/habilitacion-completa"
        },
      ]
    },
    {
      id: "advanced",
      icon: React.createElement(GraduationCap, { className: "h-8 w-8 text-primary" }),
      title: isSpanish ? "Formación Avanzada" : "Advanced Training",
      description: isSpanish 
        ? "Programas para controladores que buscan especialización adicional" 
        : "Programs for controllers seeking additional specialization",
      courses: [
        {
          title: isSpanish ? "Formación de Instructor (OJTI/STDI)" : "Instructor Training (OJTI/STDI)",
          duration: isSpanish ? "Flexible" : "Flexible",
          description: isSpanish 
            ? "Formación para convertirse en instructor OJTI/STDI"
            : "Training to become an OJTI/STDI instructor",
          path: "/formacion-avanzada"
        },
        {
          title: isSpanish ? "Formación de Evaluador" : "Evaluator Training",
          duration: isSpanish ? "Flexible" : "Flexible",
          description: isSpanish 
            ? "Programa para convertirse en evaluador certificado"
            : "Program to become a certified evaluator",
          path: "/formacion-avanzada"
        },
        {
          title: isSpanish ? "Actualización ATC" : "ATC Refresher",
          duration: isSpanish ? "Flexible" : "Flexible",
          description: isSpanish 
            ? "Actualización de conocimientos para controladores en activo"
            : "Knowledge update for active controllers",
          path: "/formacion-avanzada"
        }
      ]
    },
    {
      id: "specialized",
      icon: React.createElement(Award, { className: "h-8 w-8 text-primary" }),
      title: isSpanish ? "Formación Especializada" : "Specialized Training",
      description: isSpanish 
        ? "Programas específicos para preparación de procesos selectivos" 
        : "Specific programs for preparation of selection processes",
      courses: [
        {
          title: isSpanish ? "Preparación de Convocatoria de Controladores Aéreos" : "Air Traffic Controller Selection Process Preparation",
          duration: isSpanish ? "120 horas" : "120 hours",
          description: isSpanish 
            ? "Preparación para procesos selectivos de ANSP (Abierto a ciudadanos de la UE con buen nivel de inglés)"
            : "Preparation for ANSP selection processes (Open to EU citizens with good English proficiency)",
          path: "/preparacion-convocatoria"
        },
        {
          title: isSpanish ? "Preparación para ANSP" : "ANSP Selection Preparation",
          duration: isSpanish ? "Flexible" : "Flexible",
          description: isSpanish 
            ? "Formación adaptada para superar procesos selectivos de proveedores de navegación aérea"
            : "Tailored training to succeed in air navigation service provider selection processes",
          path: "/procesos-selectivos"
        }
      ]
    }
  ];
};
