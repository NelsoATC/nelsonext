import { motion } from 'framer-motion';
import { CourseCard } from './CourseCard';
interface Course {
  title: string;
  description: string;
  duration: string;
  image: string;
}
interface CoursesSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  badgeText: string;
  courses: Course[];
  buttonText: string;
}
export const CoursesSection = ({
  sectionTitle,
  sectionSubtitle,
  badgeText,
  courses,
  buttonText
}: CoursesSectionProps) => {
  return <motion.div initial={{
    opacity: 0
  }} whileInView={{
    opacity: 1
  }} transition={{
    duration: 0.8
  }} viewport={{
    once: true
  }} className="mb-24">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full shadow-sm" style={{
        backgroundColor: 'rgba(17, 24, 39, 0.05)',
        color: '#111827'
      }}>
          {badgeText}
        </span>
        <h2 className="mt-4 font-bold text-gray-900 text-4xl">
          {sectionTitle}
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {sectionSubtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => <CourseCard key={index} title={course.title} description={course.description} duration={course.duration} image={course.image} index={index} buttonText={buttonText} />)}
      </div>
    </motion.div>;
};