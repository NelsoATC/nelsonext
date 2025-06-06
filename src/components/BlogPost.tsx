
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from '@tanstack/react-query';
import { Loader2, ChevronLeft, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/shared/SEO';
import { blogService } from '@/services/blogService';
import { formatDate } from '@/utils/dateUtils';

const BlogPost = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const router = useRouter();
  const isSpanish = language === 'es';
  
  // Helper function to handle image errors
  const handleImageError = (e) => {
    e.currentTarget.src = "/images/placeholder.svg";
    // Stop the error from propagating to avoid infinite loops
    e.currentTarget.onerror = null;
  };
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: () => blogService.getPostById(id!),
    enabled: !!id,
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });

  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['related-posts', id],
    queryFn: () => blogService.getRelatedPosts(id!, 3),
    enabled: !!id && !!post,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    // Scroll to top when post ID changes
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-xl text-center text-red-600 max-w-md">
          {isSpanish 
            ? 'No se pudo cargar el artículo solicitado. Por favor, inténtelo de nuevo más tarde.' 
            : 'Could not load the requested article. Please try again later.'}
        </p>
        <div className="mt-6">
          <Button 
            variant="outline"
            onClick={() => router.push('/blog')}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            {isSpanish ? 'Volver al blog' : 'Back to blog'}
          </Button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <p className="text-xl text-gray-600">{isSpanish ? 'Post no encontrado' : 'Post not found'}</p>
        <Link href="/blog">
          <Button variant="outline">
            <ChevronLeft className="w-4 h-4 mr-2" />
            {isSpanish ? 'Volver al blog' : 'Back to blog'}
          </Button>
        </Link>
      </div>
    );
  }

  const formattedDate = formatDate(post.date, isSpanish ? 'es' : 'en');
  
  // Generate proper SEO data for the specific blog post
  const pageTitle = `${post.title} | Blog | Nelso Formación`;
  const metaDescription = post.metaDescription || post.description || post.content.replace(/<[^>]*>/g, '').substring(0, 160);
  const metaKeywords = post.tags.join(', ') + (isSpanish ? ', Nelso blog, formación aeronáutica, ATC' : ', Nelso blog, aviation training, ATC');
  const imageUrl = post.coverImage || "/images/og/home-og.jpg";

  return (
    <div className="min-h-screen py-24">
      <SEO 
        title={pageTitle}
        description={metaDescription}
        keywords={metaKeywords}
        path={`/blog/${id}`}
        image={imageUrl}
        type="article"
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/blog" className="text-primary hover:text-primary/80 flex items-center">
            <ChevronLeft className="w-4 h-4 mr-1" />
            {isSpanish ? 'Volver al blog' : 'Back to blog'}
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose lg:prose-xl prose-blue max-w-none"
        >
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-lg"
              onError={handleImageError}
            />
          )}
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formattedDate}</span>
            </div>
            
            {post.author && (
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
            )}
          </div>
          
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, idx) => (
              <span key={idx} className="inline-flex items-center text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <div 
            className="post-content" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
        
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">
              {isSpanish ? 'Artículos relacionados' : 'Related articles'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={relatedPost.coverImage || "/images/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
