
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogHero = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6 text-center mb-12"
    >
      <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
        Blog
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        {isSpanish ? 'Nuestro Blog' : 'Our Blog'}
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-600">
        {isSpanish 
          ? 'Mantente al día con las últimas noticias sobre navegación aérea' 
          : 'Stay up to date with the latest news on air navigation'}
      </p>
    </motion.div>
  );
};

export default BlogHero;
