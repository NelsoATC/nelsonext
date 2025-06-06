
import { motion } from 'framer-motion';
import { TowerControl, Briefcase, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.about.title')}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">{t('home.about.subtitle')}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <TowerControl className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('home.about.area1.title')}</h3>
            <p className="text-gray-600">{t('home.about.area1.description')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <Briefcase className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('home.about.area2.title')}</h3>
            <p className="text-gray-600">{t('home.about.area2.description')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
          >
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t('home.about.area3.title')}</h3>
            <p className="text-gray-600">{t('home.about.area3.description')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
