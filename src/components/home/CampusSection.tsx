
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CampusSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.campus.title')}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">{t('home.campus.subtitle')}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="h-64 bg-gray-200">
              <img 
                src="/images/campus/madrid/madrid-exterior.jpg" 
                alt="Campus Madrid" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('home.campus.madrid.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.campus.madrid.description')}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{t('home.campus.madrid.location')}</span>
              </div>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {t('home.campus.madrid.feature1')}
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {t('home.campus.madrid.feature2')}
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {t('home.campus.madrid.feature3')}
                </li>
              </ul>
              <Link to="/madrid">
                <Button variant="outline" className="w-full">
                  {t('home.campus.viewMore')}
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-md relative"
          >
            {/* Coming Soon Ribbon */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-10 pointer-events-none">
              <div className="absolute top-[30px] right-[-50px] bg-primary text-white py-1 px-12 font-semibold transform rotate-45 shadow-md text-sm">
                {t('home.campus.comingSoon')}
              </div>
            </div>
            <div className="h-64 bg-gray-200">
              <img 
                src="/images/campus/canarias/canarias-exterior.jpg" 
                alt="Campus Canarias" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('home.campus.canarias.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.campus.canarias.description')}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{t('home.campus.canarias.location')}</span>
              </div>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {t('home.campus.canarias.feature1')}
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {t('home.campus.canarias.feature2')}
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {t('home.campus.canarias.feature3')}
                </li>
              </ul>
              <Link to="/canarias">
                <Button variant="outline" className="w-full">
                  {t('home.campus.viewMore')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
