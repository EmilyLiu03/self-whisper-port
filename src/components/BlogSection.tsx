import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getLatestPosts } from "@/services/content";
import { BlogPost } from "@/types/content";
import { formatDate } from "@/lib/markdown";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await getLatestPosts(4);
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Posts
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, technology, and the journey of continuous learning.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-lg text-muted-foreground">Loading posts...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.slug}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  post.featured ? 'border-primary/20 bg-gradient-to-br from-primary/5 to-transparent' : ''
                }`}
                onClick={() => handlePostClick(post.slug)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    {post.featured && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read more
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;