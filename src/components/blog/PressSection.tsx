
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink } from 'lucide-react';
import { formatDate } from '@/utils/dateUtils';
import { useLanguage } from '@/contexts/LanguageContext';

const PressSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const pressAppearances = [
    {
      id: 'aviacion-digital-2025',
      title: 'Nelso Revoluciona la Formación de Controladores Aéreos',
      source: 'Aviación Digital',
      date: '2025-05-12',
      url: 'https://aviaciondigital.com/nelso-com-formacion-controladores-aereos-neat/',
      logo: '/images/placeholder.svg',
    },
    {
      id: 'global-airspace-radar',
      title: 'Transforming ATC Training',
      source: 'Global Airspace Radar',
      date: '2025-05-01',
      type: 'pdf',
      filePath: '/docs/38-39 ANSART GAR Issue1 2025.pdf',
      logo: '/images/placeholder.svg',
    },
    {
      id: 'canarias7',
      title: 'Nace una empresa canaria especializada en la formación de controladores aéreos',
      source: 'Canarias7',
      date: '2024-06-12',
      url: 'https://www.canarias7.es/economia/nace-empresa-canaria-especializada-formacion-controladores-aereos-20240612121035-nt.html',
      logo: '/images/placeholder.svg',
    },
    {
      id: 'las-provincias',
      title: 'Una nueva escuela de controladores prepara su desembarco en las Islas',
      source: 'Las Provincias',
      date: '2024-06-15',
      type: 'pdf',
      filePath: '/docs/Una nueva escuela de controladores.pdf',
      logo: '/images/placeholder.svg',
    },
    {
      id: 'aviacion-digital',
      title: 'Nelso Formación de controladores aéreos en Madrid (ENAIRE)',
      source: 'Aviación Digital',
      date: '2024-03-15',
      url: 'https://aviaciondigital.com/nelso-formacion-de-controladores-aereos-en-madrid-enaire/',
      logo: '/images/placeholder.svg',
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F1F0FB] rounded-xl p-6 sm:p-8 border border-[#E5DEFF]"
    >
      <div className="border-b border-[#D3E4FD] pb-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center">
          <Newspaper className="h-6 w-6 mr-2 text-[#111827]" />
          {isSpanish ? 'Apariciones en Prensa' : 'Press Coverage'}
        </h2>
        <p className="text-gray-600 mt-2">
          {isSpanish 
            ? 'Nelso Formación en los medios de comunicación' 
            : 'Nelso Formación in the media'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {pressAppearances.map((item) => (
          <a 
            key={item.id}
            href={item.url || item.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#D3E4FD] overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#111827] font-medium">{item.source}</span>
                <ExternalLink className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#111827] transition-colors">
                {item.title}
              </h3>
              <div className="text-sm text-gray-500">
                {formatDate(item.date, isSpanish ? 'es' : 'en')}
              </div>
              {item.type === 'pdf' && (
                <div className="mt-2 text-sm text-primary">
                  {isSpanish ? 'Ver PDF' : 'View PDF'}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default PressSection;
