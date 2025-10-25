import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Downloads from "@/pages/Downloads";
import DownloadFile from "@/pages/DownloadFile";
import { Analytics } from "@vercel/analytics/react";
import { Bubble } from "@typebot.io/react";
import { LanguageProvider } from "@/locales/LanguageContext";
import { useDocumentMetadata } from "@/locales/useDocumentMetadata";

const queryClient = new QueryClient();

const AppContent = () => {
  useDocumentMetadata();
  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="18tech-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/download/:token" element={<DownloadFile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
        <Bubble
          typebot="dezoito"
          apiHost="https://typebot.io"
          previewMessage={{
            message: "Posso te ajudar?",
            autoShowDelay: 5000,
            avatarUrl:
              "https://s3.typebot.io/public/workspaces/cmawmrbii0014zy2pb2ikd4yp/typebots/qkq67d1wm5dwmulcllu79t6d/hostAvatar?v=1757019535817",
          }}
          theme={{
            button: { backgroundColor: "#262778" },
            previewMessage: {
              textColor: "#262778",
              closeButtonBackgroundColor: "#F7F4F2",
              closeButtonIconColor: "#DE8031",
            },
          }}
        />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

const App = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;
