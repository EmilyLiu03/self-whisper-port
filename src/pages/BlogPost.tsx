import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogPostBySlug } from "@/services/content";
import { BlogPost as BlogPostType } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/markdown";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        navigate('/');
        return;
      }

      try {
        const blogPost = await getBlogPostBySlug(slug);
        if (!blogPost) {
          navigate('/');
          return;
        }
        setPost(blogPost);
      } catch (error) {
        console.error('Error loading blog post:', error);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="text-lg text-muted-foreground">Loading...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-6 py-20">
        {/* 返回按钮 */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回首页
        </Button>

        {/* 文章头部 */}
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
            {post.featured && (
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                精选文章
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* 文章内容 */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;