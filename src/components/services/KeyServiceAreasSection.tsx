
import { TowerControl, GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const KeyServiceAreasSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const serviceAreas = [
    {
      icon: <TowerControl size={40} className="text-[#111827]" />,
      title: isSpanish ? "Control de Tráfico Aéreo" : "Air Traffic Control",
      description: isSpanish 
        ? "Formación especializada en todas las habilitaciones de control de tráfico aéreo"
        : "Specialized training in all air traffic control ratings"
    },
    {
      icon: <GraduationCap size={40} className="text-[#111827]" />,
      title: isSpanish ? "Formación Continua" : "Continuous Training",
      description: isSpanish 
        ? "Programas de actualización y mantenimiento de competencias para profesionales en activo"
        : "Refresher and competency maintenance programs for active professionals"
    },
    {
      icon: <Globe size={40} className="text-[#111827]" />,
      title: isSpanish ? "Servicios Internacionales" : "International Services",
      description: isSpanish 
        ? "Soluciones formativas adaptadas a los estándares internacionales de aviación"
        : "Training solutions adapted to international aviation standards"
    }
  ];

  return (
    <div className="mb-24 py-16 bg-gray-50 rounded-2xl">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full shadow-sm" style={{ backgroundColor: 'rgba(17, 24, 39, 0.05)', color: '#111827' }}>
          {isSpanish ? "Áreas Clave" : "Key Areas"}
        </span>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          {isSpanish ? "Nuestras Áreas de Servicio" : "Our Service Areas"}
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {serviceAreas.map((service, index) => (
          <div key={index} className="text-center">
            <div className="bg-white p-6 rounded-full inline-flex justify-center items-center mb-6 shadow-sm">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
