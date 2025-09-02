import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "contato@dezoito.tec.br",
      link: "mailto:contato@dezoito.tec.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "+55 (31) 99919-3955",
      link: "tel:+5531999193955"
    },
    {
      icon: MapPin,
      title: "Localização",
      description: "Belo Horizonte, MG - Brasil",
      link: "#"
    }
  ];

  const stats = [
    { icon: Users, value: "40+", label: "Clientes Atendidos" },
    { icon: Clock, value: "24/7", label: "Suporte Disponível" },
    { icon: Send, value: "120+", label: "Projetos Entregues" }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <div className="w-8 h-px bg-gradient-border"></div>
            <span className="text-sm font-semibold tracking-wide uppercase">Entre em Contato</span>
            <div className="w-8 h-px bg-gradient-border"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos <span className="bg-gradient-hero bg-clip-text text-transparent">Construir</span> o Futuro Juntos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para transformar suas ideias em soluções tecnológicas inovadoras. 
            Entre em contato e descubra como podemos ajudar.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg bg-gradient-card border border-cyber-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-hero mb-4">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-cyber-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Envie uma Mensagem
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome Completo
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-input border-cyber-border focus:border-primary"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-input border-cyber-border focus:border-primary"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Empresa
                  </label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-input border-cyber-border focus:border-primary"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-input border-cyber-border focus:border-primary min-h-[120px]"
                    placeholder="Conte-nos sobre seu projeto..."
                    required
                  />
                </div>

                <Button 
                  type="button" 
                  className="w-full bg-gradient-hero text-primary-foreground hover:shadow-glow-primary transition-all duration-300"
                  size="lg"
                  onClick={() => window.open('https://wa.me/5531999193955?text=Site%2018%20Tecnologia', '_blank')}
                >
                  Vamos Conversar
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-cyber-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Informações de Contato
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Entre em contato através dos canais abaixo ou agende uma reunião.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg border border-cyber-border hover:border-primary/50 transition-all duration-300 hover:bg-cyber-surface/50 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-hero group-hover:shadow-glow-primary transition-all duration-300">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </div>
                      <div className="text-muted-foreground">
                        {info.description}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-cyber-border">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-6xl font-black font-orbitron bg-gradient-hero bg-clip-text text-transparent mb-4">
                    18
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Tecnologia & Inteligência Artificial
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Transformando ideias em soluções digitais inovadoras desde 2024.
                  </p>
                  <div className="flex justify-center">
                    <div className="px-4 py-2 rounded-full bg-gradient-hero text-primary-foreground text-sm font-semibold">
                      Inovação • Tecnologia • Futuro
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;