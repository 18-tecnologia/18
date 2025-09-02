import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { v4 as uuidv4 } from "uuid";

const pdfs = [
	{
		title: "Guia Prático de Inteligência Artificial",
		description: "Material introdutório sobre IA para empresas e profissionais.",
		cover: "/pdfs/ia-capa.jpg", // coloque uma imagem de capa para cada PDF
		file: "ia-guia.pdf",
	},
	{
		title: "Gestão Ágil de Projetos de Software",
		description: "Dicas e frameworks para gestão eficiente de projetos.",
		cover: "/pdfs/gestao-capa.jpg",
		file: "gestao-agil.pdf",
	},
	{
		title: "Automação e Produtividade com IA",
		description: "Como automatizar processos e aumentar produtividade.",
		cover: "/pdfs/automacao-capa.jpg",
		file: "automacao-produtividade.pdf",
	},
];

export default function Downloads() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	const [modalOpen, setModalOpen] = useState(false);
	const [selectedPdf, setSelectedPdf] = useState<number | null>(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
	});
	const [loading, setLoading] = useState(false);
	const { toast } = useToast();

	const handleDownloadClick = (idx: number) => {
		setSelectedPdf(idx);
		setModalOpen(true);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		// Gera token com expiração de 1 hora
		const tokenData = {
			id: uuidv4(),
			file: pdfs[selectedPdf!].file,
			exp: Date.now() + 60 * 60 * 1000, // 1 hora
		};
		const token = btoa(JSON.stringify(tokenData));

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_DOWNLOAD_ID,
				{
					name: formData.name,
					email: formData.email,
					phone: formData.phone,
					company: formData.company,
					title: pdfs[selectedPdf!].title,
					link: `${window.location.origin}/download/${token}`,
				},
				import.meta.env.VITE_EMAILJS_USER_ID
			);
			toast({
				title: "Link enviado!",
				description: "Verifique sua caixa de entrada para acessar o material.",
			});
			setModalOpen(false);
			setFormData({ name: "", email: "", phone: "", company: "" });
		} catch (error) {
			toast({
				title: "Erro ao enviar link",
				description: "Tente novamente mais tarde.",
				variant: "destructive",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
			<Header />
			<main className="flex-1 pt-28 pb-12 px-4 max-w-5xl mx-auto">
				<h1 className="text-4xl md:text-5xl font-bold mb-10 text-[hsl(var(--cyber-blue))] text-center">
					Materiais Gratuitos para Download
				</h1>
				<div className="grid md:grid-cols-3 gap-8">
					{pdfs.map((pdf, idx) => (
						<div
							key={pdf.title}
							className="bg-[hsl(var(--card))] rounded-xl shadow-lg border border-[hsl(var(--cyber-border))] flex flex-col items-center p-4"
						>
							<img
								src={pdf.cover}
								alt={`Capa do PDF ${pdf.title}`}
								className="rounded-lg mb-4 w-32 h-44 object-cover shadow"
							/>
							<h2 className="text-xl font-bold mb-2 text-[hsl(var(--cyber-blue-light))] text-center">
								{pdf.title}
							</h2>
							<p className="text-sm mb-4 text-center">{pdf.description}</p>
							<Button
								className="w-full bg-gradient-hero text-primary-foreground"
								onClick={() => handleDownloadClick(idx)}
							>
								Download
							</Button>
						</div>
					))}
				</div>
				{/* Modal de formulário */}
				{modalOpen && selectedPdf !== null && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
						<div className="bg-[hsl(var(--card))] rounded-xl p-8 max-w-md w-full shadow-lg border border-[hsl(var(--cyber-border))] relative">
							<button
								className="absolute top-2 right-4 text-2xl text-[hsl(var(--cyber-blue))] font-bold"
								onClick={() => setModalOpen(false)}
								aria-label="Fechar"
							>
								×
							</button>
							<h3 className="text-2xl font-bold mb-4 text-[hsl(var(--cyber-blue))]">
								Receba o link por e-mail
							</h3>
							<form onSubmit={handleSubmit} className="space-y-4">
								<Input
									type="text"
									placeholder="Nome"
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									required
								/>
								<Input
									type="email"
									placeholder="E-mail"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									required
								/>
								<Input
									type="tel"
									placeholder="Telefone"
									value={formData.phone}
									onChange={(e) =>
										setFormData({ ...formData, phone: e.target.value })
									}
									required
								/>
								<Input
									type="text"
									placeholder="Empresa"
									value={formData.company}
									onChange={(e) =>
										setFormData({ ...formData, company: e.target.value })
									}
								/>
								<Button
									type="submit"
									className="w-full bg-gradient-hero text-primary-foreground"
									disabled={loading}
								>
									{loading ? "Enviando..." : "Receber link"}
								</Button>
							</form>
						</div>
					</div>
				)}
			</main>
			<Footer />
		</div>
	);
}