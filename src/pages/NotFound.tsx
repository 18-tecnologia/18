import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Header />
      <main className="flex-1 flex items-center justify-center py-28 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-5xl mx-auto">
          {/* Imagem à esquerda */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
              alt="Robô destruído"
              className="w-[28rem] h-[28rem] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          {/* Texto à direita */}
          <div className="flex flex-col items-start">
            <h1 className="text-5xl font-bold mb-4 text-[hsl(var(--cyber-blue))]">
              ERRO 404 - Página não encontrada
            </h1>
            <p className="text-2xl mb-4 text-[hsl(var(--cyber-blue-light))] text-left">
              Oops! Nossa IA sofreu um curto-circuito e não encontrou esta página.
            </p>
            <p className="text-lg mb-8 text-muted-foreground text-left">
              O endereço{" "}
              <span className="font-mono bg-muted px-2 py-1 rounded">
                {location.pathname}
              </span>{" "}
              não existe.
              <br />
              Que tal voltar para a página inicial?
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-hero text-primary-foreground font-semibold shadow hover:scale-105 transition"
            >
              Voltar para Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
