import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.2);
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation(0.3);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 transition-all duration-[2s] ${
        heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
      }`}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-2 h-2 bg-primary/20 rounded-full transition-all duration-[3s] ${
              heroVisible ? 'animate-pulse' : 'opacity-0'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main title with curtain reveal */}
        <div 
          ref={textRef}
          className={`curtain-up ${textVisible ? 'animate-in' : ''}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack developer and writer sharing insights about technology, 
            life, and the journey of continuous learning.
          </p>
        </div>
        
        {/* Buttons with staggered slide animation */}
        <div 
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 ${
            buttonsVisible ? '' : 'opacity-0'
          }`}
        >
          <div className={`slide-left stagger-1 ${buttonsVisible ? 'animate-in' : ''}`}>
            <Button 
              size="lg" 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all hover:scale-105"
            >
              Learn More About Me
            </Button>
          </div>
          
          <div className={`slide-right stagger-2 ${buttonsVisible ? 'animate-in' : ''}`}>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          heroVisible ? 'animate-bounce opacity-100' : 'opacity-0 translate-y-4'
        }`}>
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;