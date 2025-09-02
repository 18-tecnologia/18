import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse delay-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-20">
          {/* Main Logo - Left Side */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-[20rem] md:text-[30rem] lg:text-[35rem] font-black font-orbitron bg-gradient-hero bg-clip-text text-transparent leading-none">
              18
            </h1>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Subtitle */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-4">
                <Zap className="w-6 h-6" />
                <span className="text-sm font-semibold tracking-wide uppercase">Tecnologia & Inteligência Artificial</span>
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Inovação que transforma o futuro
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Desenvolvemos soluções tecnológicas avançadas e sistemas de IA que impulsionam 
                seu negócio para a próxima era digital.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-primary-foreground border-0 hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/5531999193955?text=Site%2018%20Tecnologia', '_blank')}
              >
                Vamos Conversar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 border border-primary/30 rounded-lg rotate-45" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float delay-1000">
          <div className="w-12 h-12 border border-accent/30 rounded-full" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;