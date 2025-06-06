
import { FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EmptyBlogState = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="text-center py-12 mb-20">
      <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
      <h3 className="text-xl font-medium text-gray-700">
        {isSpanish ? 'No hay posts disponibles' : 'No posts available'}
      </h3>
      <p className="text-gray-500 mt-2">
        {isSpanish 
          ? 'Vuelve pronto para ver nuevos contenidos' 
          : 'Check back soon for new content'}
      </p>
    </div>
  );
};

export default EmptyBlogState;
