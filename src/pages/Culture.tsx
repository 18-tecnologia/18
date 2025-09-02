import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const valores = [
	{
		title: "Inovação",
		desc: "Buscamos soluções criativas e tecnológicas para transformar negócios.",
	},
	{
		title: "Ética",
		desc: "Agimos com integridade, respeito e responsabilidade em todas as relações.",
	},
	{
		title: "Colaboração",
		desc: "Acreditamos na força do trabalho em equipe e na diversidade de ideias.",
	},
	{
		title: "Excelência",
		desc: "Entregamos sempre o nosso melhor, superando expectativas.",
	},
];

export default function Culture() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<div className="min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
			<Header />
			<main className="flex-1 pt-28 pb-12 px-4 max-w-5xl mx-auto">
				<section className="mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--cyber-blue))]">
						Nossa História
					</h1>
					<div className="flex flex-col md:flex-row items-center gap-8">
						<img
							src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
							alt="Equipe profissional"
							className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
						/>
						<p className="text-lg text-justify leading-relaxed">
							Fundada em 2018, a 18 Tecnologia & Inteligência Artificial nasceu do
							desejo de transformar empresas por meio da inovação. Nossa equipe
							multidisciplinar une experiência, criatividade e paixão por tecnologia
							para entregar soluções que impactam positivamente o futuro dos
							negócios. Ao longo dos anos, crescemos junto com nossos clientes,
							sempre guiados por valores sólidos e uma visão de futuro ousada.
						</p>
					</div>
				</section>

				<section className="mb-16 grid md:grid-cols-2 gap-12">
					<div>
						<h2 className="text-3xl font-bold mb-3 text-[hsl(var(--cyber-blue-light))]">
							Missão
						</h2>
						<p className="text-lg leading-relaxed">
							Desenvolver soluções inovadoras em tecnologia e inteligência
							artificial, promovendo o crescimento sustentável e a transformação
							digital dos nossos clientes.
						</p>
					</div>
					<div>
						<h2 className="text-3xl font-bold mb-3 text-[hsl(var(--cyber-blue-light))]">
							Visão
						</h2>
						<p className="text-lg leading-relaxed">
							Ser referência nacional em tecnologia e IA, reconhecida pela
							excelência, ética e impacto positivo na sociedade.
						</p>
					</div>
				</section>

				<section className="mb-16">
					<h2 className="text-3xl font-bold mb-6 text-[hsl(var(--cyber-blue-light))]">
						Nossos Valores
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{valores.map((valor) => (
							<div
								key={valor.title}
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
				</section>

				<section className="flex justify-center">
					<img
						src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80"
						alt="Profissionais colaborando"
						className="rounded-xl shadow-lg w-full md:w-2/3 object-cover"
					/>
				</section>
			</main>
			<Footer />
		</div>
	);
}