import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Culture from "@/pages/Culture";
import Courses from "@/pages/Courses";
import Downloads from "@/pages/Downloads";
import DownloadFile from "@/pages/DownloadFile";
import { Analytics } from "@vercel/analytics/next"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="18tech-ui-theme">
      <TooltipProvider>
        <Analytics />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cultura" element={<Culture />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/download/:token" element={<DownloadFile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
