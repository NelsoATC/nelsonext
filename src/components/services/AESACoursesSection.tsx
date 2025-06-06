
import { useLanguage } from '@/contexts/LanguageContext';
import { useLanguageDetection } from '@/contexts/LanguageDetectionContext';
import { SectionHeader } from '@/components/services/SectionHeader';
import { getCourseCategoriesData } from '@/data/coursesData';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, Bookmark, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import CourseCard from '@/components/courses/CourseCard'; // Import CourseCard from the correct location

export const AESACoursesSection = () => {
  const { language } = useLanguage();
  const { isFromSpain } = useLanguageDetection();
  const isSpanish = language === 'es';

  // Get course data from data file
  const courseCategories = getCourseCategoriesData(isSpanish);
  const initialTrainingCourses = courseCategories.find(cat => cat.id === "initial")?.courses || [];
  const advancedTrainingCourses = courseCategories.find(cat => cat.id === "advanced")?.courses || [];

  // Combine courses for carousel display
  const featuredCourses = [...initialTrainingCourses, ...advancedTrainingCourses];

  const titleForSpain = isSpanish ? 'Cursos Certificados por AESA' : 'AESA Certified Courses';
  const titleForInternational = isSpanish ? 'Cursos Oficiales para Estudiantes Internacionales' : 'Official Courses for International Students';

  const subtitleForSpain = isSpanish 
    ? 'Proporcionamos formación oficial certificada por AESA para controladores de tránsito aéreo.' 
    : 'We provide official AESA certified training for air traffic controllers.';
  
  const subtitleForInternational = isSpanish
    ? 'Programas formativos oficiales disponibles para ciudadanos de la UE con requisitos específicos.'
    : 'Official training programs available for EU citizens with specific requirements.';

  // Function to handle scrolling to the top when clicking a link
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to get a category label based on category id
  const getCategoryLabel = (categoryId: string) => {
    if (categoryId === "initial") {
      return isSpanish ? "Formación Inicial" : "Initial Training";
    } else if (categoryId === "advanced") {
      return isSpanish ? "Formación Avanzada" : "Advanced Training";
    } else if (categoryId === "specialized") {
      return isSpanish ? "Formación Especializada" : "Specialized Training";
    }
    return "";
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -right-32 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-32 top-40 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-2">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
              <Award className="mr-1 h-3.5 w-3.5" />
              {isSpanish ? "Cursos Certificados" : "Certified Courses"}
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            {isFromSpain ? titleForSpain : titleForInternational}
          </h2>
          <p className="mt-4 text-lg text-center text-gray-600 max-w-3xl mx-auto">
            {isFromSpain ? subtitleForSpain : subtitleForInternational}
          </p>
        </motion.div>
      </div>
      
      <div className="mt-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-screen-xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredCourses.map((course, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <CourseCard 
                  course={course} 
                  category={{ 
                    id: index < initialTrainingCourses.length ? "initial" : "advanced", 
                    title: getCategoryLabel(index < initialTrainingCourses.length ? "initial" : "advanced") 
                  }} 
                  isSpanish={isSpanish} 
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0 ml-auto border-gray-200 hover:bg-gray-100 hover:text-gray-900" />
            <CarouselNext className="static translate-y-0 border-gray-200 hover:bg-gray-100 hover:text-gray-900" />
          </div>
        </Carousel>
      </div>
      
      <div className="text-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/cursos" onClick={handleScrollToTop}>
            <Button className="bg-primary hover:bg-primary/90 shadow-sm group px-6">
              {isSpanish ? "Ver todos nuestros cursos" : "View all our courses"}
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
