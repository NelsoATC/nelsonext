
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

const ATCOInitial = () => {
  const { t } = useLanguage();

  // La traducción puede devolver string o array; normalizamos a array
  const requirementsList = t('atco.requirements.list');
  let requirements: string[] = [];
  
  if (typeof requirementsList === 'string') {
    // Si la traducción es un string, la convertimos en un array de un solo elemento
    requirements = [requirementsList];
  } else if (Array.isArray(requirementsList)) {
    // Si ya es un array, lo usamos directamente
    requirements = requirementsList;
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/20 text-primary rounded-full">
              {t('atco.badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {t('atco.title')}
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              {t('atco.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('atco.overview.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('atco.overview.description')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('atco.duration.title')}
                </h3>
                <p className="text-3xl font-bold text-primary mb-1">
                  {t('atco.duration.time')}
                </p>
                <p className="text-gray-600">
                  {t('atco.duration.description')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('atco.requirements.title')}
                </h3>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-primary">•</span>
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Phases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('atco.phases.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t('atco.phases.basic.title')}
                </h3>
                <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  {t('atco.phases.basic.duration')}
                </span>
              </div>
              <p className="text-gray-600">
                {t('atco.phases.basic.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t('atco.phases.rating.title')}
                </h3>
                <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  {t('atco.phases.rating.duration')}
                </span>
              </div>
              <p className="text-gray-600">
                {t('atco.phases.rating.description')}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="gap-2">
              {t('atco.button.apply')}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              {t('atco.button.program')}
              <Download className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ATCOInitial;
