import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Função para navegar para a home e rolar para a seção desejada
  const goToSectionOnHome = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Aguarda a navegação e rola para a seção após um pequeno delay
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100ms é suficiente na maioria dos casos
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[hsl(var(--footer-light))]/70 dark:bg-[hsl(var(--footer-dark))]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="text-2xl font-bold font-orbitron bg-gradient-hero bg-clip-text text-transparent cursor-pointer"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMenuOpen(false);
          }}
        >
          18 Tecnologia e Inteligência Artificial
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => {
              navigate("/cultura");
              setIsMenuOpen(false);
            }}
            className="text-foreground hover:text-primary transition-colors"
          >
            Cultura
          </button>
          <button
            onClick={() => goToSectionOnHome("services")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => navigate("/cursos")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Cursos
          </button>
          <button
            onClick={() => navigate("/downloads")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Downloads
          </button>
          <button
            onClick={() => goToSectionOnHome("contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => {
                navigate("/cultura");
                setIsMenuOpen(false);
              }}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Cultura
            </button>
            <button
              onClick={() => goToSectionOnHome("services")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => navigate("/cursos")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Cursos
            </button>
            <button
              onClick={() => navigate("/downloads")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Downloads
            </button>
            <button
              onClick={() => goToSectionOnHome("contact")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;