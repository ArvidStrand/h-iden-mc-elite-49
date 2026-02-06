import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VerkstedPage from "./pages/VerkstedPage";
import VinterlagringPage from "./pages/VinterlagringPage";
import McSalgsPage from "./pages/McSalgsPage";
import ToursPage from "./pages/ToursPage";
import OmOssPage from "./pages/OmOssPage";
import KontaktPage from "./pages/KontaktPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/verksted" element={<VerkstedPage />} />
          <Route path="/vinterlagring" element={<VinterlagringPage />} />
          <Route path="/mc-til-salgs" element={<McSalgsPage />} />
          <Route path="/mc-turer-og-aktiviteter" element={<ToursPage />} />
          <Route path="/om-oss" element={<OmOssPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
