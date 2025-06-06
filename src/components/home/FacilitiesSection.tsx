
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const FacilitiesSection = () => {
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.facilities.title')}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">{t('home.facilities.subtitle')}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden h-[500px]"
          >
            <img 
              src="/images/facilities/simulators.jpg" 
              alt="Simuladores" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-bold mb-2">{t('home.facilities.simulators.title')}</h3>
              <p className="text-white/90">{t('home.facilities.simulators.description')}</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{t('home.facilities.software.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.facilities.software.description')}</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2 pt-0.5">•</span>
                  <span>{t('home.facilities.software.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 pt-0.5">•</span>
                  <span>{t('home.facilities.software.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 pt-0.5">•</span>
                  <span>{t('home.facilities.software.feature3')}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">{t('home.facilities.collaborations.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.facilities.collaborations.description')}</p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <img src="/images/partners/partner1.png" alt="ANSP Partner" className="h-12 p-2 bg-white rounded" />
                <img src="/images/partners/partner2.png" alt="ANSP Partner" className="h-12 p-2 bg-white rounded" />
                <img src="/images/partners/partner3.png" alt="ANSP Partner" className="h-12 p-2 bg-white rounded" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
