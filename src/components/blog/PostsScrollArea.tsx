
import PostCard from './PostCard';
import { Post } from '@/types/blog';

interface PostsScrollAreaProps {
  posts: Post[];
}

const PostsScrollArea = ({ posts }: PostsScrollAreaProps) => {
  return (
    <div className="relative w-full overflow-x-auto pb-6">
      <div className="flex space-x-6 pb-4" style={{ minWidth: "max-content" }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsScrollArea;
