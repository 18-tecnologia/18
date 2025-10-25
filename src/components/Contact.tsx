import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const maskPhone = (value: string) => {
  // Remove tudo que não for número
  let v = value.replace(/\D/g, "");
  // Limita a 11 dígitos
  v = v.slice(0, 11);
  // Aplica a máscara
  if (v.length > 6) {
    return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  } else if (v.length > 2) {
    return `(${v.slice(0, 2)}) ${v.slice(2)}`;
  } else if (v.length > 0) {
    return `(${v}`;
  }
  return "";
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [emailValid, setEmailValid] = useState(true);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          time: new Date().toLocaleString(),
          title: formData.name + " (" + formData.company + ")"
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
      description: "+55 (11) 91577-7168",
      link: "tel:+5511915777168"
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
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setEmailValid(emailRegex.test(e.target.value));
                      }}
                      className={`bg-input border-cyber-border focus:border-primary ${!emailValid ? "border-red-500" : ""}`}
                      placeholder="seu@email.com"
                      required
                    />
                    {!emailValid && (
                      <span className="text-xs text-red-500">Digite um e-mail válido.</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        const masked = maskPhone(e.target.value);
                        setFormData({ ...formData, phone: masked });
                      }}
                      className="bg-input border-cyber-border focus:border-primary"
                      placeholder="(99) 99999-9999"
                      required
                      maxLength={15}
                      inputMode="numeric"
                      pattern="\(\d{2}\) \d{5}-\d{4}"
                    />
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
                  type="submit" 
                  className="w-full bg-gradient-hero text-primary-foreground hover:shadow-glow-primary transition-all duration-300"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar mensagem"}
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