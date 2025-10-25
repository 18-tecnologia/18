import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, Rocket, Shield, Zap } from "lucide-react";

const services = [
	{
		icon: Brain,
		title: "Inteligência Artificial",
		description:
			"Desenvolva soluções de IA personalizadas que automatizam processos e geram insights valiosos para seu negócio.",
		features: [
			"Machine Learning",
			"Processamento de Linguagem Natural",
			"Visão Computacional",
			"Análise Preditiva",
		],
	},
	{
		icon: Code,
		title: "Desenvolvimento de Software",
		description:
			"Criamos aplicações web e mobile modernas com tecnologias de ponta e arquiteturas escaláveis.",
		features: ["Aplicações Web", "Apps Mobile", "APIs RESTful", "Microsserviços"],
	},
	{
		icon: Database,
		title: "Análise de Dados",
		description:
			"Transforme seus dados em insights acionáveis com nossas soluções de big data e analytics.",
		features: [
			"Big Data",
			"Business Intelligence",
			"Data Mining",
			"Dashboards Interativos",
		],
	},
	{
		icon: Shield,
		title: "Segurança Cibernética",
		description:
			"Proteja sua infraestrutura digital com nossas soluções avançadas de segurança e monitoramento.",
		features: [
			"Auditoria de Segurança",
			"Monitoramento 24/7",
			"Backup & Recovery",
			"Compliance",
		],
	},
	{
		icon: Rocket,
		title: "Automação de Processos",
		description:
			"Otimize suas operações com automação inteligente e workflows personalizados.",
		features: [
			"RPA",
			"Workflows Automatizados",
			"Integração de Sistemas",
			"Otimização de Processos",
		],
	},
	{
		icon: Zap,
		title: "Consultoria Tecnológica",
		description:
			"Orientação estratégica para transformação digital e inovação tecnológica em sua empresa.",
		features: [
			"Estratégia Digital",
			"Inovação",
			"Arquitetura de TI",
			"Gestão de Projetos",
		],
	},
];

const Services = () => {
	return (
		<section id="services" className="py-20 px-4">
			<div className="container mx-auto max-w-7xl">
				{/* Header */}
				<div className="text-center mb-16 animate-fade-in">
					<div className="inline-flex items-center gap-2 text-primary mb-4">
						<div className="w-8 h-px bg-gradient-border"></div>
						<span className="text-sm font-semibold tracking-wide uppercase">
							Nossos Serviços
						</span>
						<div className="w-8 h-px bg-gradient-border"></div>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
						Soluções{" "}
						<span className="bg-gradient-hero bg-clip-text text-transparent">
							Tecnológicas
						</span>{" "}
						Avançadas
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Oferecemos um portfólio completo de serviços tecnológicos para
						impulsionar a inovação e o crescimento do seu negócio.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<Card
							key={index}
							className="group bg-gradient-card border-cyber-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary hover:scale-105 animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<CardHeader className="pb-4">
								<div className="flex items-center gap-4 mb-4">
									<div className="p-3 rounded-lg bg-gradient-hero group-hover:shadow-glow-primary transition-all duration-300">
										<service.icon className="w-6 h-6 text-primary-foreground" />
									</div>
									<CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
										{service.title}
									</CardTitle>
								</div>
								<CardDescription className="text-muted-foreground leading-relaxed">
									{service.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<li
											key={featureIndex}
											className="flex items-center gap-2 text-sm text-muted-foreground"
										>
											<div className="w-1 h-1 bg-primary rounded-full"></div>
											{feature}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-16">
					<div
						className="p-8 rounded-2xl border border-cyber-border relative overflow-hidden"
						style={{
							backgroundColor: "#f8f9fa", // off-white
							backgroundImage: `url("data:image/svg+xml;utf8,<svg width='600' height='200' xmlns='http://www.w3.org/2000/svg'><polygon points='0,100 150,0 300,100 450,0 600,100 600,200 0,200' fill='%23e3e8ee'/><polygon points='0,150 200,50 400,150 600,50 600,200 0,200' fill='%23b6c7e3' opacity='0.7'/></svg>")`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					>
						<div className="absolute inset-0 opacity-10"></div>
						<div className="relative z-10">
							<h3 className="text-2xl font-bold text-foreground mb-4">
								Pronto para transformar seu negócio?
							</h3>
							<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
								Entre em contato conosco e descubra como nossas soluções podem
								acelerar sua jornada de transformação digital.
							</p>
							<button
								onClick={() =>
									window.open(
										"https://wa.me/5511915777168",
										"_blank"
									)
								}
								className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-hero text-primary-foreground rounded-lg font-semibold hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105"
							>
								Vamos Conversar
								<Rocket className="w-4 h-4" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;