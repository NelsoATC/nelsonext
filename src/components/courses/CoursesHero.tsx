
import { Button } from "@/components/ui/button";
import ContactoSection from "@/components/sections/ContactoSection";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { FullScreenForm } from "@/components/ui/full-screen-form";
import { useTallyForm } from "@/hooks/useTallyForm";

interface CoursesHeroProps {
  isSpanish: boolean;
}

const CoursesHero = ({ isSpanish }: CoursesHeroProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Use the new hook to load Tally with URL tracking
  useTallyForm(isFormOpen);

  return (
    <>
      <section 
        className="relative bg-cover bg-center py-32" 
        style={{ backgroundImage: "url('/images/courses-atc-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="bg-primary border-primary/60 text-white px-4 py-1 text-sm font-medium mb-6">
              {isSpanish ? "Programas Formativos" : "Training Programs"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {isSpanish ? "Cursos para Controladores " : "Air Traffic Controller "} 
              <span className="text-primary">{isSpanish ? "Aéreos" : "Courses"}</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-8">
              {isSpanish
                ? "Descubre nuestra amplia gama de cursos diseñados específicamente para profesionales y aspirantes a controladores de tránsito aéreo"
                : "Discover our wide range of courses specifically designed for professionals and aspiring air traffic controllers"}
            </p>
            <div>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => setIsFormOpen(true)}
              >
                {isSpanish ? "Solicitar Información" : "Request Information"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FullScreenForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={isSpanish ? "Solicita información" : "Request information"}
      >
        <ContactoSection />
      </FullScreenForm>
    </>
  );
};

export default CoursesHero;
