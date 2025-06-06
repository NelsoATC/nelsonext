
import { blogPosts } from "../data/blogPosts";
import { BlogService, Post } from "../types/blog";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const blogService: BlogService = {
  // Obtener todos los posts
  getAllPosts: async (): Promise<Post[]> => {
    // Simulamos una pequeña latencia para imitar una llamada a API
    await delay(300);
    return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },

  // Obtener un post por su ID
  getPostById: async (id: string): Promise<Post | undefined> => {
    await delay(200);
    return blogPosts.find(post => post.id === id);
  },

  // Obtener un post por su slug
  getPostBySlug: async (slug: string): Promise<Post | undefined> => {
    await delay(200);
    return blogPosts.find(post => post.id === slug);
  },

  // Obtener posts relacionados (basados en tags comunes)
  getRelatedPosts: async (
    currentPostId: string,
    limit: number = 3
  ): Promise<Post[]> => {
    await delay(300);
    const currentPost = blogPosts.find((post) => post.id === currentPostId);

    if (!currentPost) {
      return [];
    }

    // Calcular la cantidad de tags en común y ordenar por ese criterio
    const relatedPosts = blogPosts
      .filter((post) => post.id !== currentPostId)
      .map((post) => ({
        post,
        commonTagsCount: post.tags.filter((tag) => currentPost.tags.includes(tag)).length,
      }))
      .sort(
        (a, b) =>
          b.commonTagsCount - a.commonTagsCount ||
          new Date(b.post.date).getTime() - new Date(a.post.date).getTime()
      )
      .slice(0, limit)
      .map((item) => item.post);

    return relatedPosts;
  },
};
