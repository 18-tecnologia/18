import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const pdfs = [
  "ia-guia.pdf",
  "gestao-agil.pdf",
  "automacao-produtividade.pdf",
];

export default function DownloadFile() {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
      return;
    }
    try {
      const decoded = JSON.parse(atob(token));
      const { file, exp } = decoded;
      if (!file || !exp || !pdfs.includes(file)) {
        throw new Error("Token inválido");
      }
      if (Date.now() > exp) {
        alert("Link expirado. Solicite novamente o download.");
        navigate("/", { replace: true });
        return;
      }
      // Realiza o download
      const link = document.createElement("a");
      link.href = `/pdfs/${file}`;
      link.download = file;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // Redireciona para Index no topo
      setTimeout(() => {
        navigate("/", { replace: true });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    } catch (err) {
      alert("Link inválido ou expirado.");
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <span>Preparando seu download...</span>
    </div>
  );
}