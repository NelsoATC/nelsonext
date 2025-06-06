
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronRight, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface Course {
  title: string;
  duration: string;
  description: string;
  path?: string;
}

interface CourseCardProps {
  course: Course;
  category: {
    id: string;
    title: string;
  };
  isSpanish: boolean;
}

const CourseCard = ({ course, category, isSpanish }: CourseCardProps) => {
  // Function to handle scrolling to the top when clicking a link
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Determine the category label based on category id
  const getCategoryLabel = (categoryId: string) => {
    if (categoryId === "initial") {
      return isSpanish ? "Formación Inicial" : "Initial Training";
    } else if (categoryId === "advanced") {
      return isSpanish ? "Formación Avanzada" : "Advanced Training";
    } else if (categoryId === "specialized") {
      return isSpanish ? "Formación Especializada" : "Specialized Training";
    }
    return category.title;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col hover:shadow-md transition-all duration-300 overflow-hidden border-none shadow">
        <div className="h-2 w-full bg-primary"></div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-full bg-primary/10">
              <Bookmark className="h-4 w-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
              {getCategoryLabel(category.id)}
            </span>
          </div>
          <CardTitle className="text-xl">{course.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600">{course.description}</p>
        </CardContent>
        <CardFooter>
          {course.path ? (
            <Link to={course.path} className="w-full" onClick={handleScrollToTop}>
              <Button variant="default" className="w-full group border-none bg-gray-50 hover:bg-gray-100 text-gray-800">
                {isSpanish ? "Más información" : "More information"}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          ) : (
            <Button variant="outline" className="w-full" disabled>
              {isSpanish ? "Próximamente" : "Coming soon"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
