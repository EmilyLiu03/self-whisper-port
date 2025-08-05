import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { getPersonalInfo } from "@/services/content";
import { PersonalInfo } from "@/types/content";
import { contactMethods, iconMap } from "@/data/static";

const ContactSection = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    const loadPersonalInfo = async () => {
      const info = await getPersonalInfo();
      setPersonalInfo(info);
    };
    loadPersonalInfo();
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-accent/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you! Whether you want to discuss a project, 
            ask a question, or just say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me more about your project or question..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on interesting projects, 
                or simply having a conversation about technology and development.
              </p>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <MapPin className="h-5 w-5" />
                <span>{personalInfo?.location || "Loading..."}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = iconMap[method.icon as keyof typeof iconMap];
                // 根据个人信息动态生成链接
                let href = method.href;
                let value = method.value;
                
                if (personalInfo) {
                  switch (method.title) {
                    case "Email":
                      href = `mailto:${personalInfo.email}`;
                      value = personalInfo.email;
                      break;
                    case "GitHub":
                      href = personalInfo.github;
                      value = `@${personalInfo.github.split('/').pop()}`;
                      break;
                    case "LinkedIn":
                      href = personalInfo.linkedin;
                      value = personalInfo.name;
                      break;
                    case "Twitter":
                      href = personalInfo.twitter;
                      value = `@${personalInfo.twitter.split('/').pop()}`;
                      break;
                  }
                }
                
                return (
                  <a 
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {value}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;