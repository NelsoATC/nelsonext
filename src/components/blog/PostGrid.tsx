
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Tag, FileText } from 'lucide-react';
import { Post } from '@/types/blog';
import { formatDate } from '@/utils/dateUtils';
import { useLanguage } from '@/contexts/LanguageContext';

interface PostGridProps {
  posts: Post[];
}

const PostGrid = ({ posts }: PostGridProps) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/images/placeholder.svg";
    e.currentTarget.onerror = null;
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => {
        const formattedDate = formatDate(post.date, isSpanish ? 'es' : 'en');
        return (
          <motion.article
            key={post.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {post.coverImage ? (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={handleImageError}
                />
              </div>
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <FileText className="h-12 w-12 text-gray-400" />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                to={`/blog/${post.id}`}
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                {isSpanish ? 'Leer más' : 'Read more'} 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};

export default PostGrid;
