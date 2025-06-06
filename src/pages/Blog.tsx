'use client';

import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect } from 'react';
import SEO from '@/components/shared/SEO';
import { blogService } from '../services/blogService';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedPost from '@/components/blog/FeaturedPost';
import PostsScrollArea from '@/components/blog/PostsScrollArea';
import PostGrid from '@/components/blog/PostGrid';
import PressSection from '@/components/blog/PressSection';
import BlogLoadingState from '@/components/blog/BlogLoadingState';
import BlogErrorState from '@/components/blog/BlogErrorState';
import EmptyBlogState from '@/components/blog/EmptyBlogState';

const Blog = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: blogService.getAllPosts,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <BlogLoadingState />;
  }

  if (error) {
    return <BlogErrorState />;
  }

  return (
    <div className="min-h-screen py-24">
      <SEO 
        title={isSpanish ? "Blog | Actualidad sobre formación ATC y aviación | Nelso Formación" : "Blog | Latest news on ATC Training and Aviation | Nelso Formación"}
        description={isSpanish 
          ? "Descubre artículos, noticias y consejos sobre formación ATC, aviación y control aéreo escritos por expertos del sector." 
          : "Discover expert articles, news, and tips about ATC training, aviation, and air traffic control."}
        keywords={isSpanish 
          ? "blog ATC, noticias aviación, formación controlador aéreo, artículos aeronáutica, Nelso Formación" 
          : "ATC blog, aviation news, Air Traffic Controller training, aviation articles, Nelso Formación"}
        path="/blog"
        image="/images/og/home-og.jpg"
        type="website"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogHero />

        {/* Blog Posts Section */}
        {posts && posts.length > 0 ? (
          <>
            {/* Featured post (latest post) */}
            {posts[0] && <FeaturedPost post={posts[0]} />}

            {/* Rest of the posts */}
            {posts.length > 1 && (
              <div className="mb-20">
                {posts.slice(1).length > 3 ? (
                  <PostsScrollArea posts={posts.slice(1)} />
                ) : (
                  <PostGrid posts={posts.slice(1)} />
                )}
              </div>
            )}
          </>
        ) : (
          <EmptyBlogState />
        )}

        {/* Press Appearances Section */}
        <PressSection />
      </div>
    </div>
  );
};

export default Blog;
