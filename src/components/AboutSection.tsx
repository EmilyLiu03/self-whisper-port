import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, BookOpen, Camera } from "lucide-react";

const AboutSection = () => {
  const interests = [
    {
      icon: Code,
      title: "Web Development",
      description: "Passionate about creating beautiful and functional web applications using modern technologies."
    },
    {
      icon: Coffee,
      title: "Coffee Enthusiast",
      description: "I believe the best code is written with the perfect cup of coffee by your side."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new technologies, frameworks, and methodologies to improve my craft."
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and finding beauty in the everyday through the lens of my camera."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-accent/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a full-stack developer with 5+ years of experience building scalable web applications. 
            When I'm not coding, you can find me writing about tech, exploring new coffee shops, 
            or capturing the world through photography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <interest.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {interest.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 shadow-sm border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started as a curious student who loved solving problems with code. Over the years, 
                I've worked with startups and established companies, building everything from 
                e-commerce platforms to data visualization tools.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences 
                that make a difference. This blog is where I share my learnings, insights, 
                and thoughts on the ever-evolving world of technology.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm bg-accent rounded-full text-accent-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;