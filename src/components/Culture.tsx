const valores = [
  {
    title: "Inovação",
    desc: "Buscamos soluções criativas e tecnológicas para transformar negócios.",
    bg: 1,
  },
  {
    title: "Ética",
    desc: "Agimos com integridade, respeito e responsabilidade em todas as relações.",
    bg: 2,
  },
  {
    title: "Colaboração",
    desc: "Acreditamos na força do trabalho em equipe e na diversidade de ideias.",
    bg: 3,
  },
  {
    title: "Excelência",
    desc: "Entregamos sempre o nosso melhor, superando expectativas.",
    bg: 4,
  },
];

const backgrounds = {
  1: `url("data:image/svg+xml;utf8,<svg width='600' height='200' xmlns='http://www.w3.org/2000/svg'><polygon points='0,100 150,0 300,100 450,0 600,100 600,200 0,200' fill='%23e3e8ee'/><polygon points='0,150 200,50 400,150 600,50 600,200 0,200' fill='%23b6c7e3' opacity='0.7'/></svg>")`,
  2: `url("data:image/svg+xml;utf8,<svg width='600' height='200' xmlns='http://www.w3.org/2000/svg'><polygon points='0,150 200,50 400,150 600,50 600,200 0,200' fill='%23b6c7e3' opacity='0.7'/></svg>")`,
  3: `url("data:image/svg+xml;utf8,<svg width='600' height='200' xmlns='http://www.w3.org/2000/svg'><polygon points='0,150 200,50 400,150 600,50 600,200 0,200' fill='%23b6c7e3' opacity='0.7'/></svg>")`,
  4: `url("data:image/svg+xml;utf8,<svg width='600' height='200' xmlns='http://www.w3.org/2000/svg'><polygon points='0,100 150,0 300,100 450,0 600,100 600,200 0,200' fill='%23e3e8ee'/></svg>")`,
};

const Cultura = () => (
  <section id="cultura" className="py-20 px-4">
    <div className="container mx-auto max-w-7xl">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 text-primary mb-4">
          <div className="w-8 h-px bg-gradient-border"></div>
          <span className="text-sm font-semibold tracking-wide uppercase">
            Quem somos nós
          </span>
          <div className="w-8 h-px bg-gradient-border"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Valorizamos a{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            cultura
          </span>{" "}
          da excelência
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Está na nossa formação e no nosso DNA entregar sempre o melhor para
          os nossos clientes, parceiros e colaboradores.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
          alt="Equipe profissional"
          className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
        />
        <div>
          <span className="text-2xl md:text-3xl font-bold mb-4 text-[hsl(var(--cyber-blue))]">
            A história como ela é
          </span>
          <p className="text-s text-left leading-relaxed">
            A trajetória na área de tecnologia teve início em 2005, com atuação em projetos de desenvolvimento e arquitetura ao longo dos primeiros dez anos. Esse período foi marcado pela participação em inúmeras iniciativas que consolidaram experiência técnica e visão estratégica.

            A partir desse ponto, os desafios se tornaram cada vez maiores, exigindo soluções de alto nível em inovação, segurança, robustez e geração de resultados. Projetos complexos passaram a demandar não apenas conhecimento técnico aprofundado, mas também capacidade de entregar valor real em ambientes altamente competitivos e em constante evolução.

            Essa história reflete uma caminhada contínua de crescimento, aprendizado e dedicação à criação de soluções tecnológicas que acompanham a velocidade das mudanças do mercado e a necessidade crescente de resultados consistentes.
          </p>
        </div>
      </div>

      {/* Missão */}
      <div className="text-center mt-16 mb-16">
        <div className="p-8 rounded-2xl border border-cyber-border relative overflow-hidden"
          style={{
            backgroundColor: "#f8f9fa", // off-white
            backgroundImage: `url("data:image/svg+xml;utf8,<svg width='600' height='200' xmlns='http://www.w3.org/2000/svg'><circle cx='300' cy='100' r='80' fill='%23b6c7e3' opacity='0.3'/><circle cx='300' cy='100' r='50' fill='%231e3a77' opacity='0.5'/></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nossa Missão
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Transformar a forma como as empresas operam através da inovação tecnológica e soluções personalizadas.
            </p>
          </div>
        </div>
      </div>
      {/* Visão */}
      <div className="text-center mt-16 mb-16">
        <div className="p-8 rounded-2xl border border-cyber-border relative overflow-hidden"
          style={{
            backgroundColor: "#f8f9fa", // off-white
            backgroundImage: `url("data:image/svg+xml;utf8,<svg width='600' height='200' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='%23e3e8ee' rx='100' opacity='0.3'/><rect width='80%' height='80%' x='10%' y='10%' fill='%23b6c7e3' rx='50' opacity='0.2'/></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nossa Visão
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ser referência em inovação tecnológica, ajudando empresas a alcançar seu máximo potencial.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--cyber-blue-light))]">
        <span className="bg-gradient-hero bg-clip-text text-transparent">
          Nossos valores
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {valores.map((valor) => (
          <div
            key={valor.title}
            style={{
              backgroundColor: "#f8f9fa", // off-white
              backgroundImage: backgrounds[valor.bg],
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="bg-[hsl(var(--card))] rounded-lg p-6 shadow-md border border-[hsl(var(--cyber-border))]"
          >
            <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--cyber-blue))]">
              {valor.title}
            </h3>
            <p className="text-base text-[hsl(var(--foreground))]">
              {valor.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Cultura;