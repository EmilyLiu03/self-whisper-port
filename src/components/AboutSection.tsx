import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getPersonalInfo } from "@/services/content";
import { PersonalInfo } from "@/types/content";
import { interests, skills, iconMap } from "@/data/static";

const AboutSection = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    const loadPersonalInfo = async () => {
      const info = await getPersonalInfo();
      setPersonalInfo(info);
    };
    loadPersonalInfo();
  }, []);

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
            {personalInfo ? (
              <>
                我是一名拥有 {personalInfo.experience} 经验的{personalInfo.title}。
                当我不在编程时，你可以发现我在写技术文章、探索新的咖啡店，或者通过摄影捕捉世界的美好。
              </>
            ) : (
              "Loading..."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = iconMap[interest.icon as keyof typeof iconMap];
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
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
            <div className="space-y-4">
              {skills.map((skillCategory, categoryIndex) => (
                <div key={categoryIndex}>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-accent rounded-full text-accent-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;