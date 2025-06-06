
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/services/blogService";
import { formatDate } from "@/utils/dateUtils";

const BlogSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  const { data: posts, isLoading } = useQuery({
    queryKey: ['home-blog-posts'],
    queryFn: async () => {
      const allPosts = await blogService.getAllPosts();
      return allPosts.slice(0, 3); // Only take the first 3 posts
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
  });

  // Helper function to handle image errors
  const handleImageError = (e) => {
    e.currentTarget.src = "/images/placeholder.svg";
    // Stop the error from propagating to avoid infinite loops
    e.currentTarget.onerror = null;
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-4">
            {isSpanish ? "Artículos y noticias" : "Articles and news"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isSpanish ? "Nuestro Blog" : "Our Blog"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isSpanish
              ? "Mantente al día con las últimas noticias y artículos sobre el mundo de la navegación aérea"
              : "Stay up to date with the latest news and articles about the world of air navigation"}
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          posts && posts.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post) => {
                const formattedDate = formatDate(post.date, isSpanish ? 'es' : 'en');
                
                return (
                  <Card key={post.id} className="overflow-hidden group">
                    <div className="relative overflow-hidden h-48">
                      {post.coverImage ? (
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={handleImageError}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <FileText className="h-12 w-12 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formattedDate}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                      <Link 
                        href={`/blog/${post.id}`} 
                        className="text-primary font-medium hover:text-primary/80 flex items-center group-hover:underline"
                      >
                        {isSpanish ? "Leer más" : "Read more"}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )
        )}

        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group"
          >
            {isSpanish ? "Ver todos los artículos" : "View all articles"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
