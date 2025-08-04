import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, BookOpen, Camera } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation(0.3);
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
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-transparent to-accent/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 slide-left ${sectionVisible ? 'animate-in' : ''}`}>
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

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`fade-up stagger-${index + 1} ${cardsVisible ? 'animate-in' : ''}`}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform">
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
            </div>
          ))}
        </div>

        <div 
          ref={journeyRef}
          className={`mt-16 bg-card rounded-2xl p-8 shadow-sm border scale-in ${journeyVisible ? 'animate-in' : ''}`}
        >
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