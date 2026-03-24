import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Opcoes from "./pages/Opcoes.tsx";
import Atividade from "./pages/Atividade.tsx";
import Conta from "./pages/Conta.tsx";
import Eventos from "./pages/Eventos.tsx";
import Calendario from "./pages/Calendario.tsx";
import AcademyDetail from "./pages/AcademyDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/opcoes" element={<Opcoes />} />
          <Route path="/atividade" element={<Atividade />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/academia/:slug" element={<AcademyDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
