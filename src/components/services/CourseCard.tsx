
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  image: string;
  index: number;
  buttonText: string;
}

export const CourseCard = ({ title, description, duration, image, index, buttonText }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full border-0 shadow-sm">
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20 z-10" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-3 right-3 bg-white/80 text-gray-800 text-sm px-3 py-1 rounded-full z-20 shadow-sm">
            {duration}
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>
            {duration}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          <Link to="/cursos">
            <Button variant="outline" className="w-full hover:bg-gray-50 transition-colors">
              {buttonText}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};
