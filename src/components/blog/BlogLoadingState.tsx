
import { Loader2 } from 'lucide-react';

const BlogLoadingState = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="w-8 h-8 animate-spin" />
    </div>
  );
};

export default BlogLoadingState;
