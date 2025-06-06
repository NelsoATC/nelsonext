
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { AESACoursesSection } from "@/components/services/AESACoursesSection";

interface CampusDetailProps {
  campus: "madrid" | "canarias";
  images: {src: string; alt: string}[];
  highlights: string[];
}

const CampusDetailSection: React.FC<CampusDetailProps> = ({ campus, images, highlights }) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary mb-4">
            {isSpanish ? "Centro" : "Center"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {campus === "madrid" 
              ? (isSpanish ? "Nelso Madrid" : "Nelso Madrid")
              : (isSpanish ? "Nelso Gran Canaria" : "Nelso Gran Canaria")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {campus === "madrid"
              ? (isSpanish 
                ? "Nuestro centro principal ubicado en Madrid con instalaciones de vanguardia" 
                : "Our main center located in Madrid with cutting-edge facilities")
              : (isSpanish 
                ? "Nuestro centro especializado en Gran Canaria con simuladores de última generación" 
                : "Our specialized center in Gran Canaria with state-of-the-art simulators")}
          </p>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-[500px] object-cover" 
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        {/* Highlights */}
        <div className="bg-gray-50 p-8 rounded-xl mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {isSpanish ? "Características Destacadas" : "Highlights"}
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Courses Section */}
        <AESACoursesSection />
      </div>
    </section>
  );
};

export default CampusDetailSection;
