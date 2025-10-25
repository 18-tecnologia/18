import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Logo from "@/components/Logo";
import { useState, useEffect } from "react";
import { useLanguage } from "@/locales/LanguageContext";

const Hero = () => {
  const { translations } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [logoPosition, setLogoPosition] = useState({ x: '50%', y: '50%' });
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Captura a posição do mouse na tela
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Limpeza do listener de evento
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Referência para o elemento SVG para pegar suas dimensões
    const svgElement = document.getElementById('logo-svg');
    if (!svgElement) return;

    // Converte as coordenadas do mouse para a proporção do SVG
    const rect = svgElement.getBoundingClientRect();
    const x = ((mousePosition.x - rect.left) / rect.width) * 100 + '%';
    const y = ((mousePosition.y - rect.top) / rect.height) * 100 + '%';
    
    setLogoPosition({ x, y });
  }, [mousePosition]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "hsl(var(--background))", // usa o mesmo background do tema
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundColor: "hsl(var(--background))", // cor de fundo igual ao background da imagem
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full animate-ping" />
        <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-secondary rounded-full animate-pulse delay-200" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-20">
          {/* Main Logo - Left Side */}
          <div className="flex flex-col items-center lg:items-start">
            <Logo
              id="logo-svg" // Adiciona um ID para referenciar no JavaScript
              className="w-[18rem] md:w-[30rem] lg:w-[35rem] h-auto text-primary"
              aria-label="18 Tecnologia e Inteligência Artificial"
              mouseX={logoPosition.x}
              mouseY={logoPosition.y}
            />
          </div>

          {/* Content - Right Side */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Subtitle */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-secondary mb-4">
                <Zap className="w-6 h-6" />
                <span className="text-sm font-semibold tracking-wide uppercase">{translations.hero.vision}</span>
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {translations.hero.subtitle.split('&').map((part, i, arr) => (
                  <>
                    {part}
                    {i < arr.length - 1 && (
                      <>
                        &nbsp;&amp;&nbsp;
                        <br />
                      </>
                    )}
                  </>
                ))}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {translations.hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-primary-foreground border-0 hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/5511915777168', '_blank')}
              >
                {translations.hero.cta.talk}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-primary transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {translations.hero.cta.services}
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 border border-primary/60 rounded-lg rotate-45" />
        </div>
        <div className="absolute top-60 right-10 animate-rotate">
          <div className="w-16 h-16 border border-destructive rounded-lg rotate-45" />
        </div>
        <div className="absolute bottom-10 left-10 animate-float delay-1000">
          <div className="w-12 h-12 border border-secondary/60 rounded-full" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float delay-1000">
          <div className="w-12 h-12 border border-accent/90 rounded-full" />
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