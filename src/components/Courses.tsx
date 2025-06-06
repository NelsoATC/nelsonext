import { useState } from "react";
import { useLanguage } from '../contexts/LanguageContext';
import { useLanguageDetection } from '../contexts/LanguageDetectionContext';
import { getCourseCategoriesData, CourseCategory } from "@/data/coursesData";
import CoursesHero from "@/components/courses/CoursesHero";
import CourseFilters from "@/components/courses/CourseFilters";
import CourseCategorySection from "@/components/courses/CourseCategorySection";
import CourseContactCTA from "@/components/courses/CourseContactCTA";
import SEO from "@/components/shared/SEO";

const Courses = () => {
  const { language } = useLanguage();
  const { isFromSpain } = useLanguageDetection();
  const isSpanish = language === 'es';
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get course categories data
  const courseCategories = getCourseCategoriesData(isSpanish);

  // Prepare categories for filter buttons
  const categoryFilters = courseCategories.map(category => ({
    id: category.id,
    title: category.title
  }));

  // Filter courses by category if one is selected
  const filteredCategories = selectedCategory 
    ? courseCategories.filter(category => category.id === selectedCategory)
    : courseCategories;

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={isSpanish 
          ? "Cursos de Controlador Aéreo | Licencias ATC | Nelso Formación" 
          : "Air Traffic Controller Courses | ATC Licenses | Nelso Formación"}
        description={isSpanish 
          ? "Descubre nuestros cursos modulares para obtener tu licencia oficial de Controlador Aéreo: Torre y Ruta. Instructores expertos y formación personalizada." 
          : "Explore modular training courses to obtain your official Air Traffic Controller license: Tower and En-route. Expert instructors, personalized learning."}
        keywords={isSpanish 
          ? "cursos ATC, licencia de torre, licencia de ruta, formación ATC modular, controlador aéreo" 
          : "ATC courses, Tower license, En-route license, modular ATC training, Air Traffic Controller"}
        path="/cursos"
        image="/images/og/courses-og.jpg"
        type="website"
      />
      
      {/* Hero section */}
      <CoursesHero isSpanish={isSpanish} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category filters */}
        <CourseFilters 
          categories={categoryFilters}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isSpanish={isSpanish}
        />

        <div className="space-y-16">
          {filteredCategories.map((category: CourseCategory) => (
            <CourseCategorySection 
              key={category.id} 
              category={category} 
              isSpanish={isSpanish} 
              isFromSpain={isFromSpain}
            />
          ))}
        </div>

        {/* Removed SenasaCoursesSection */}

        <CourseContactCTA isSpanish={isSpanish} />
      </div>
    </div>
  );
};

export default Courses;
