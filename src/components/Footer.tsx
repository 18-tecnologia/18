import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Contato", href: "#contact" },
    { name: "Sobre", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carreiras", href: "#" }
  ];

  const services = [
    { name: "Inteligência Artificial", href: "#" },
    { name: "Desenvolvimento", href: "#" },
    { name: "Análise de Dados", href: "#" },
    { name: "Segurança Cyber", href: "#" },
    { name: "Automação", href: "#" },
    { name: "Consultoria", href: "#" }
  ];

  return (
    <footer className="bg-[hsl(var(--footer-light))] dark:bg-[hsl(var(--footer-dark))]">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-4xl font-black font-orbitron bg-gradient-hero bg-clip-text text-transparent mb-2">
                18
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Empresa líder em tecnologia e inteligência artificial, 
                transformando o futuro através da inovação.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@dezoito.tec.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+55 (31) 99919-3955</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Belo Horizonte, MG - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6 text-lg">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-6 text-lg">
              Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-foreground font-semibold mb-6 text-lg">
              Newsletter
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Receba as últimas novidades sobre tecnologia e IA.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu email"
                className="flex-1 px-3 py-2 bg-input border border-cyber-border rounded-md text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-hero text-primary-foreground rounded-md hover:shadow-glow-primary transition-all duration-300 text-sm font-semibold">
                Assinar
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-cyber-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm mr-2">Siga-nos:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-cyber-surface border border-cyber-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            {/* Copyright & Theme Toggle */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
                <span>© {currentYear} 18 Tech. Todos os direitos reservados.</span>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacidade
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookies
                  </a>
                </div>
              </div>
              
              {/* Theme Toggle */}
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground text-sm">Tema:</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-border opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;