
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ExternalLink, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Define the accommodation interface to match what's in accommodationData.ts
interface Accommodation {
  name: string;
  description: {
    es: string;
    en: string;
  };
  logoSrc: string;
  imageSrc: string;
  website?: string;
  phone?: string;
  contact?: {
    es: string;
    en: string;
  };
}

interface AccommodationSectionProps {
  accommodations: Accommodation[];
}

const AccommodationSection: React.FC<AccommodationSectionProps> = ({ accommodations }) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-4">
            {isSpanish ? "Alojamiento" : "Accommodation"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isSpanish ? "Opciones de Alojamiento" : "Accommodation Options"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isSpanish
              ? "Alojamientos recomendados cerca de nuestras instalaciones para tu estancia durante el curso"
              : "Recommended accommodation options near our facilities for your stay during the course"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={accommodation.imageSrc} 
                  alt={accommodation.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <img 
                    src={accommodation.logoSrc} 
                    alt={`${accommodation.name} logo`} 
                    className="h-8 object-contain"
                  />
                  <CardTitle className="text-lg">{accommodation.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-gray-600 mb-4">
                  {isSpanish ? accommodation.description.es : accommodation.description.en}
                </p>
                
                <div className="mt-auto space-y-3">
                  {accommodation.website && (
                    <a 
                      href={accommodation.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {isSpanish ? "Visitar sitio web" : "Visit website"}
                    </a>
                  )}
                  
                  {accommodation.phone && (
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{accommodation.phone}</span>
                    </div>
                  )}
                  
                  {accommodation.contact && (
                    <div className="mt-3">
                      <p className="text-sm text-gray-500 italic">
                        {isSpanish ? accommodation.contact.es : accommodation.contact.en}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
