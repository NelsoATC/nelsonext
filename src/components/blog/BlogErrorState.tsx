
import { useLanguage } from '@/contexts/LanguageContext';

const BlogErrorState = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
      <p className="text-xl text-center text-red-600 max-w-md">
        {isSpanish 
          ? 'No se pudieron cargar los artículos del blog. Por favor, inténtelo de nuevo más tarde.' 
          : 'Could not load blog articles. Please try again later.'}
      </p>
    </div>
  );
};

export default BlogErrorState;
