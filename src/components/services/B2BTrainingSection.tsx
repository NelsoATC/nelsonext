
import { SectionHeader } from '@/components/services/SectionHeader';
import { CoursesSection } from '@/components/services/CoursesSection';
import { useLanguage } from '@/contexts/LanguageContext';

export const B2BTrainingSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // B2B courses for organizations
  const b2bCourses = [
    {
      title: isSpanish ? "Formación a Medida" : "Customized Training",
      description: isSpanish 
        ? "Programas de formación personalizados para las necesidades específicas de su organización o proveedor de servicios de navegación aérea."
        : "Customized training programs tailored to the specific needs of your organization or air navigation service provider.",
      duration: isSpanish ? "Según necesidades" : "Based on needs",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: isSpanish ? "Actualizaciones Normativas" : "Regulatory Updates",
      description: isSpanish 
        ? "Mantenga a su personal al día con los últimos cambios normativos en el sector de la navegación aérea y control de tránsito aéreo."
        : "Keep your staff up-to-date with the latest regulatory changes in the air navigation and air traffic control sector.",
      duration: isSpanish ? "Periódico" : "Periodic",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1174&auto=format&fit=crop",
    },
    {
      title: isSpanish ? "Simulación Avanzada" : "Advanced Simulation",
      description: isSpanish 
        ? "Entrenamiento práctico con simuladores de última generación para recrear escenarios operativos reales y situaciones de emergencia."
        : "Practical training with state-of-the-art simulators to recreate real operational scenarios and emergency situations.",
      duration: isSpanish ? "2-4 semanas" : "2-4 weeks",
      image: "/lovable-uploads/0066fc98-d123-4e34-a712-2e40a65e5a5e.png",
    },
  ];

  return (
    <div className="mb-24">
      <CoursesSection
        badgeText={isSpanish ? "Formación B2B" : "B2B Training"}
        sectionTitle={isSpanish ? "Programas para Organizaciones" : "Programs for Organizations"}
        sectionSubtitle={isSpanish 
          ? "Desarrollamos programas de formación a medida para satisfacer las necesidades específicas de su organización"
          : "We develop tailored training programs to meet the specific needs of your organization"}
        courses={b2bCourses}
        buttonText={isSpanish ? "Solicitar propuesta" : "Request proposal"}
      />
    </div>
  );
};
