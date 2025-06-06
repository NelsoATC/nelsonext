
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

// Define alumni data type
interface AlumniData {
  name: string;
  location: string;
  icaoCode: string;
  image: string;
  imagePosition?: string;
}

const AlumniCarousel = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  // Alumni data with names, destinations, ICAO codes and image paths
  const alumniData: AlumniData[] = [
    { name: "Ricardo", location: "Madrid", icaoCode: "LEMD", image: "/images/alumni/Ricardo_Madrid.jpg" },
    { name: "Jessica", location: "Barcelona", icaoCode: "LECB", image: "/images/alumni/Jessica_Barcelona.jpg" },
    { name: "Sergio", location: "Barcelona", icaoCode: "LEBL", image: "/images/alumni/Sergio_Barcelona.jpg" },
    { name: "Victor", location: "Lanzarote", icaoCode: "GCRR", image: "/images/alumni/Victor_Lanzarote.jpg" },
    { name: "María", location: "Canarias", icaoCode: "GCCC", image: "/images/alumni/Maria_Canarias.jpg", imagePosition: "object-left" },
    { name: "Julián", location: "Canarias", icaoCode: "GCCC", image: "/images/alumni/Julian_Canarias.jpg", imagePosition: "object-left" },
    { name: "Regina", location: "Palma", icaoCode: "LECP", image: "/images/alumni/Regina_palma.jpg" },
    { name: "Olivia", location: "Lieja", icaoCode: "EBLG", image: "/images/alumni/Olivia_Dublin.jpg" },
    { name: "Dora", location: "La Palma", icaoCode: "GCLA", image: "/images/alumni/Dora_Canarias.jpg", imagePosition: "object-left" }
  ];

  // State to store randomized alumni data
  const [randomizedAlumni, setRandomizedAlumni] = useState<AlumniData[]>([]);

  // Function to shuffle an array (Fisher-Yates algorithm)
  const shuffleArray = (array: AlumniData[]): AlumniData[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Initialize randomized alumni on component mount
  useEffect(() => {
    setRandomizedAlumni(shuffleArray(alumniData));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="text-center mb-12">
        <div className="flex justify-center mb-2">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
            <Users className="mr-1 h-3.5 w-3.5" />
            {isSpanish ? "Nuestros Alumnos" : "Our Alumni"}
          </Badge>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          {isSpanish ? "Dónde trabajan nuestros alumnos" : "Where our students work"}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {isSpanish 
            ? "Descubre dónde han desarrollado su carrera profesional los alumnos que han pasado por nuestros cursos." 
            : "Discover where students who have gone through our courses have developed their professional careers."}
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {randomizedAlumni.map((alumni, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="rounded-lg overflow-hidden shadow-md bg-white">
                <div className="aspect-[3/4] relative">
                  <img 
                    src={alumni.image} 
                    alt={`${alumni.name} - ${alumni.location}`} 
                    className={`object-cover w-full h-full ${alumni.imagePosition || 'object-center'}`}
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-lg font-semibold">{alumni.name}</h3>
                    <p className="text-white/90 text-sm">{alumni.location} - {alumni.icaoCode}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-6">
          <CarouselPrevious className="relative -left-4 border-gray-200 hover:bg-gray-100" />
          <CarouselNext className="relative -right-4 border-gray-200 hover:bg-gray-100" />
        </div>
      </Carousel>
      
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>
          {isSpanish 
            ? "Estos son solo algunos ejemplos de los destinos profesionales de nuestros alumnos." 
            : "These are just some examples of the professional destinations of our students."}
        </p>
      </div>
    </motion.div>
  );
};

export default AlumniCarousel;
