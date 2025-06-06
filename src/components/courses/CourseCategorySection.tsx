
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';

interface Course {
  title: string;
  duration: string;
  description: string;
  path?: string;
}

interface CourseCategoryProps {
  category: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    courses: Course[];
  };
  isSpanish: boolean;
  isFromSpain?: boolean;
}

const CourseCategorySection = ({ category, isSpanish, isFromSpain = true }: CourseCategoryProps) => {
  // Skip rendering the "specialized" category when language is English
  if (category.id === "specialized" && !isSpanish) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4 border-b pb-4">
        {category.icon}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
          <p className="text-gray-600">{category.description}</p>
          
          {/* Special note for international students for specific categories */}
          {!isFromSpain && category.id === "initial" && (
            <span className="inline-block mt-2 text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-md">
              {isSpanish 
                ? "Disponible para ciudadanos de la UE" 
                : "Available for EU citizens"}
            </span>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.courses.map((course, idx) => (
          <CourseCard 
            key={`${category.id}-${idx}`}
            course={course}
            category={category}
            isSpanish={isSpanish}
          />
        ))}
      </div>
      
      {/* International specific content for specialized category */}
      {!isFromSpain && category.id === "specialized" && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-800">
            {isSpanish ? "Nota para estudiantes internacionales" : "Note for international students"}
          </h3>
          <p className="text-blue-700 text-sm mt-1">
            {isSpanish
              ? "Los procesos selectivos de Enaire requieren nivel nativo de español. Ofrecemos cursos intensivos de español técnico para controladores aéreos."
              : "Enaire selection processes require native Spanish level. We offer intensive technical Spanish courses for air traffic controllers."}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CourseCategorySection;
