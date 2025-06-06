
import Link from "next/link";
import { motion } from 'framer-motion';
import { BookOpen, Monitor, Briefcase, ClipboardList } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.services.title')}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">{t('home.services.subtitle')}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('home.services.service1.title')}</h3>
                <p className="text-gray-600">{t('home.services.service1.description')}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('home.services.service2.title')}</h3>
                <p className="text-gray-600">{t('home.services.service2.description')}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('home.services.service3.title')}</h3>
                <p className="text-gray-600">{t('home.services.service3.description')}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('home.services.service4.title')}</h3>
                <p className="text-gray-600">{t('home.services.service4.description')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6">{t('home.services.clients.title')}</h3>
            <p className="text-gray-600 mb-6">{t('home.services.clients.description')}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="h-16 bg-gray-100 rounded flex items-center justify-center p-2">
                <div className="text-gray-400 font-medium">Cliente 1</div>
              </div>
              <div className="h-16 bg-gray-100 rounded flex items-center justify-center p-2">
                <div className="text-gray-400 font-medium">Cliente 2</div>
              </div>
              <div className="h-16 bg-gray-100 rounded flex items-center justify-center p-2">
                <div className="text-gray-400 font-medium">Cliente 3</div>
              </div>
              <div className="h-16 bg-gray-100 rounded flex items-center justify-center p-2">
                <div className="text-gray-400 font-medium">Cliente 4</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600 italic mb-4">"{t('home.services.success.quote')}"</p>
              <p className="font-medium">{t('home.services.success.client')}</p>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center">
          <Link href="/servicios">
            <Button size="lg">
              {t('home.services.cta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
