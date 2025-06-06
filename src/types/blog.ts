
export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface BlogService {
  getAllPosts: () => Promise<Post[]>;
  getPostById: (id: string) => Promise<Post | undefined>;
  getPostBySlug: (slug: string) => Promise<Post | undefined>;
  getRelatedPosts: (currentPostId: string, limit?: number) => Promise<Post[]>;
}
