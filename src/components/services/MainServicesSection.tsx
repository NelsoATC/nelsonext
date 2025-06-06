
import { TowerControl, BookOpen, BookText, Rocket } from 'lucide-react';
import { SectionHeader } from '@/components/services/SectionHeader';
import { ServiceCard } from '@/components/services/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

export const MainServicesSection = () => {
  const { t, language } = useLanguage();
  
  // Translation keys for features
  const serviceFeatures = {
    continuous: [
      { key: 'services.continuous.feature1', text: t('services.continuous.feature1') },
      { key: 'services.continuous.feature2', text: t('services.continuous.feature2') },
      { key: 'services.continuous.feature3', text: t('services.continuous.feature3') },
      { key: 'services.continuous.feature4', text: t('services.continuous.feature4') },
    ],
    consulting: [
      { key: 'services.consulting.feature1', text: t('services.consulting.feature1') },
      { key: 'services.consulting.feature2', text: t('services.consulting.feature2') },
      { key: 'services.consulting.feature3', text: t('services.consulting.feature3') },
      { key: 'services.consulting.feature4', text: t('services.consulting.feature4') },
    ],
    content: [
      { key: 'services.content.feature1', text: t('services.content.feature1') },
      { key: 'services.content.feature2', text: t('services.content.feature2') },
      { key: 'services.content.feature3', text: t('services.content.feature3') },
      { key: 'services.content.feature4', text: t('services.content.feature4') },
    ],
    evaluation: [
      { key: 'services.evaluation.feature1', text: t('services.evaluation.feature1') },
      { key: 'services.evaluation.feature2', text: t('services.evaluation.feature2') },
      { key: 'services.evaluation.feature3', text: t('services.evaluation.feature3') },
      { key: 'services.evaluation.feature4', text: t('services.evaluation.feature4') },
    ],
  };

  const services = [
    {
      title: t('services.continuous.title'),
      description: t('services.continuous.description'),
      icon: <TowerControl className="h-8 w-8 text-primary" />,
      featuresKey: 'continuous',
    },
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      featuresKey: 'consulting',
    },
    {
      title: t('services.content.title'),
      description: t('services.content.description'),
      icon: <BookText className="h-8 w-8 text-primary" />,
      featuresKey: 'content',
    },
    {
      title: t('services.evaluation.title'),
      description: t('services.evaluation.description'),
      icon: <Rocket className="h-8 w-8 text-primary" />,
      featuresKey: 'evaluation',
    },
  ];

  return (
    <div className="mb-24">
      <SectionHeader
        badge={t('services.badge')}
        title={language === 'es' ? "Servicios ATC para organizaciones" : "ATC Services for organizations"}
        subtitle={t('services.subtitle')}
        badgeColor="#111827"
        badgeBackgroundColor="rgba(17, 24, 39, 0.05)"
      />
      <div className="grid lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            features={serviceFeatures[service.featuresKey as keyof typeof serviceFeatures]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
