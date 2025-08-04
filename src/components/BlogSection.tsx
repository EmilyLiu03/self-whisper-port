import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices and patterns for creating maintainable React applications that can grow with your team and user base.",
      date: "2024-08-01",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Architecture"],
      featured: true
    },
    {
      id: 2,
      title: "The Art of Clean Code",
      excerpt: "Discover principles and techniques that will make your code more readable, maintainable, and enjoyable to work with.",
      date: "2024-07-28",
      readTime: "6 min read",
      tags: ["Clean Code", "Best Practices", "Development"]
    },
    {
      id: 3,
      title: "TypeScript: Beyond the Basics",
      excerpt: "Explore advanced TypeScript features that will supercharge your development workflow and catch bugs before they happen.",
      date: "2024-07-25",
      readTime: "10 min read",
      tags: ["TypeScript", "JavaScript", "Tools"]
    },
    {
      id: 4,
      title: "My Journey into Full-Stack Development",
      excerpt: "A personal reflection on the challenges and triumphs of learning full-stack development and building my first major project.",
      date: "2024-07-20",
      readTime: "5 min read",
      tags: ["Personal", "Career", "Learning"]
    }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                post.featured ? 'border-primary/20 bg-gradient-to-br from-primary/5 to-transparent' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
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