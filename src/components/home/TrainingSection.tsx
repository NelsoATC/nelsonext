
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const TrainingSection = () => {
  const { t, language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.training.title')}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            {t('home.training.subtitle')}
            <span className="block text-sm mt-2 text-gray-500">
              {isSpanish ? "Duración aproximada de los módulos" : "Approximate duration of modules"}
            </span>
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">
                {isSpanish ? "Bloque 1" : "Block 1"}
              </h3>
              <p className="text-gray-600 mb-3">{t('home.training.module1.description')}</p>
              <div className="flex items-center text-sm text-gray-500">
                <BookOpen className="h-4 w-4 mr-1 text-primary" />
                <span>
                  {isSpanish ? "6 meses (aproximadamente)" : "6 months (approximately)"}
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">
                {isSpanish ? "Bloque 2" : "Block 2"}
              </h3>
              <p className="text-gray-600 mb-3">{t('home.training.module2.description')}</p>
              <div className="flex items-center text-sm text-gray-500">
                <BookOpen className="h-4 w-4 mr-1 text-primary" />
                <span>
                  {isSpanish ? "6 meses (aproximadamente)" : "6 months (approximately)"}
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">{t('home.training.methodology.title')}</h3>
              <p className="text-gray-600">{t('home.training.methodology.description')}</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">{t('home.training.testimonials.title')}</h3>
            
            <div className="space-y-6">
              <blockquote className="bg-white p-5 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">"{t('home.training.testimonials.quote1')}"</p>
                <footer className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">{t('home.training.testimonials.author1')}</p>
                    <p className="text-sm text-gray-500">{t('home.training.testimonials.position1')}</p>
                  </div>
                </footer>
              </blockquote>
              
              <blockquote className="bg-white p-5 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">"{t('home.training.testimonials.quote2')}"</p>
                <footer className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">{t('home.training.testimonials.author2')}</p>
                    <p className="text-sm text-gray-500">{t('home.training.testimonials.position2')}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center">
          <Button size="lg">
            {t('home.training.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
