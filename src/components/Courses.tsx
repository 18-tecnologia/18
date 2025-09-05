import Image from "next/image";

const courses = [
	{
		title: "Inteligência Artificial Aplicada",
		image:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
		description:
			"Aprenda os fundamentos e aplicações práticas da Inteligência Artificial, incluindo Machine Learning, Deep Learning e automação de processos. Curso voltado para profissionais e estudantes que desejam atuar com IA em projetos reais.",
		topics: [
			"Fundamentos de IA e Machine Learning",
			"Redes Neurais e Deep Learning",
			"Processamento de Dados",
			"Ferramentas e Plataformas de IA",
			"Projetos práticos",
		],
		duration: "40 horas",
		level: "Intermediário",
	},
	{
		title: "Gestão de Projetos de Software",
		image:
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
		description:
			"Domine as melhores práticas de gestão de projetos de software, desde a concepção até a entrega. Aborda metodologias ágeis, liderança de equipes, planejamento, controle de riscos e ferramentas modernas de gestão.",
		topics: [
			"Metodologias Ágeis (Scrum, Kanban)",
			"Planejamento e Estimativas",
			"Gestão de Equipes e Comunicação",
			"Controle de Qualidade e Riscos",
			"Ferramentas de Gestão",
		],
		duration: "32 horas",
		level: "Intermediário",
	},
	{
		title: "Automação com Inteligência Artificial",
		image:
			"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
		description:
			"Descubra como automatizar processos de negócios utilizando IA e ferramentas modernas como n8n, Make, Autogen e OpenRouter. Ideal para quem busca eficiência e inovação.",
		topics: [
			"Introdução à automação inteligente",
			"Fluxos com n8n e Make",
			"Uso de Autogen e OpenRouter",
			"Integração de APIs e IA",
			"Casos práticos de automação",
		],
		duration: "36 horas",
		level: "Intermediário",
	},
	{
		title: "Transformação Digital com o Poder da IA",
		image:
			"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
		description:
			"Entenda como a Inteligência Artificial está revolucionando empresas e setores. Aprenda estratégias e ferramentas para liderar a transformação digital no seu negócio.",
		topics: [
			"O que é transformação digital",
			"IA como motor de mudança",
			"Ferramentas e plataformas digitais",
			"Gestão da mudança organizacional",
			"Estudos de caso e tendências",
		],
		duration: "28 horas",
		level: "Introdutório",
	},
];

const Courses = () => (
  <section id="courses" className="py-20 px-4">
    <div className="container mx-auto max-w-7xl">
		{/* Header */}
		<div className="text-center mb-16 animate-fade-in">
			<div className="inline-flex items-center gap-2 text-primary mb-4">
				<div className="w-8 h-px bg-gradient-border"></div>
				<span className="text-sm font-semibold tracking-wide uppercase">
					Nossos Cursos
				</span>
				<div className="w-8 h-px bg-gradient-border"></div>
			</div>
			<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
				Aprendizado{" "}
				<span className="bg-gradient-hero bg-clip-text text-transparent">
					prático
				</span>{" "}
				imersivo
			</h2>
			<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
				Um catálogo de temas e cursos que preparam você para o futuro da
				tecnologia e inovação. Os grandes projetos começam com uma boa
				educação.
			</p>
		</div>
				
		<div className="grid md:grid-cols-2 gap-10">
			{courses.map((course) => (
				<div
					key={course.title}
					className="bg-[hsl(var(--card))] rounded-xl shadow-lg border border-[hsl(var(--cyber-border))] flex flex-col"
				>
					<img
						src={course.image}
						alt={course.title}
						className="rounded-t-xl object-cover h-56 w-full"
					/>
					<div className="p-6 flex-1 flex flex-col">
						<h2 className="text-2xl font-bold mb-2 text-[hsl(var(--cyber-blue-light))]">
							{course.title}
						</h2>
						<p className="mb-4 text-base">{course.description}</p>
						<ul className="mb-4 list-disc list-inside text-sm text-[hsl(var(--foreground))]">
							{course.topics.map((topic) => (
								<li key={topic}>{topic}</li>
							))}
						</ul>
						<div className="mt-auto flex items-center justify-between text-sm text-[hsl(var(--cyber-blue))] font-semibold">
							<span>Duração: {course.duration}</span>
							<span>Nível: {course.level}</span>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
  </section>
);

export default Courses;