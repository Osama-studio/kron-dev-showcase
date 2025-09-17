import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '/assets/devkron_logo-removebg.png'; 
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in-up">

          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Welcome to Devkron Soft</span>
          </div> */}
          {/* ✅ Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Devkron Soft Logo"
              className="h-56 w-auto object-contain"
            />
          </div>


          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Digital
            <br />
            <span className="gradient-text text-shadow">Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            At <span className="text-primary font-semibold">Devkron Soft</span>, we craft innovative web solutions, 
            mobile applications, and AI-powered systems that transform businesses and drive growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="glow-button bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 group pulse-glow"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
