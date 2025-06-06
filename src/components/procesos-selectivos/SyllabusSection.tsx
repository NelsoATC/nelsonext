
import { motion } from 'framer-motion';
import { FileText, BookOpen } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SyllabusSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const syllabusItems = [
    {
      id: "tema-1",
      title: "Tema 1: Instituciones y Legislación Aeronáutica",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-2",
      title: "Tema 2: Códigos OACI IATA y Características de Aeronaves",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-3",
      title: "Tema 3: Meteorología",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-4",
      title: "Tema 4: Cartografía",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-5",
      title: "Tema 5: Navegación Equipos y Sistemas",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-6",
      title: "Tema 6: Plan de Vuelo y Gestión de la Capacidad y Afluencia de Tráfico",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-7",
      title: "Tema 7: Entorno Profesional",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-8",
      title: "Tema 8: FFHH en ATM",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-9",
      title: "Tema 9: Aerodinámica y Mecánica de Vuelo",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
  ];

  // English translations if needed
  const syllabusItemsEn = [
    {
      id: "tema-1",
      title: "Topic 1: Aeronautical Institutions and Legislation",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-2",
      title: "Topic 2: ICAO IATA Codes and Aircraft Characteristics",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-3",
      title: "Topic 3: Meteorology",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-4",
      title: "Topic 4: Cartography",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-5",
      title: "Topic 5: Navigation Equipment and Systems",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-6",
      title: "Topic 6: Flight Plan and Traffic Flow and Capacity Management",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-7",
      title: "Topic 7: Professional Environment",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-8",
      title: "Topic 8: Human Factors in ATM",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      id: "tema-9",
      title: "Topic 9: Aerodynamics and Flight Mechanics",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
  ];

  const items = isSpanish ? syllabusItems : syllabusItemsEn;

  return (
    <div id="temario" className="py-16 mb-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isSpanish ? "Temario Actualizado 2024" : "Updated Syllabus 2024"}
        </h2>
        
        <p className="text-gray-600 max-w-3xl mx-auto">
          {isSpanish
            ? "Contenido actualizado para la convocatoria de Enaire 2024"
            : "Updated content for the Enaire 2024 selection process"}
        </p>
      </motion.div>
      
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-gray-800">
            {isSpanish ? "Programa completo" : "Complete program"}
          </h3>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={item.id} className="border-b border-gray-200">
                <AccordionTrigger className="py-4 text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="font-medium">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 py-3 px-3">
                  <p>
                    {isSpanish
                      ? "Contenido detallado disponible durante el curso."
                      : "Detailed content available during the course."}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SyllabusSection;
