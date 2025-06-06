
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageDetectionProvider } from "./contexts/LanguageDetectionContext";
import { useScrollToHash } from "./hooks/useScrollToHash";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import MadridCampus from "./pages/MadridCampus";
import CanariasCampus from "./pages/CanariasCampus";
import Success from "./pages/Success";
import PreparacionProcesosSelectivos from "./pages/PreparacionProcesosSelectivos";
import PreparacionConvocatoria from "./pages/PreparacionConvocatoria";
import HabilitacionCompleta from "./pages/HabilitacionCompleta";
import Bloque1 from "./pages/Bloque1";
import Bloque2 from "./pages/Bloque2";
import FormacionAvanzada from "./pages/FormacionAvanzada";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";

const queryClient = new QueryClient();

// Componente envoltorio para manejar el scroll a los hashes
const ScrollToHashHandler = ({ children }: { children: React.ReactNode }) => {
  useScrollToHash();
  return <>{children}</>;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      // HelmetProvider removed - Next.js handles head content without providers<TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageDetectionProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow pt-16">
                <ScrollToHashHandler>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/home" element={<Home />} />
                    
                    {/* Spanish Routes */}
                    <Route path="/cursos" element={<Courses />} />
                    <Route path="/servicios" element={<Services />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/madrid" element={<MadridCampus />} />
                    <Route path="/canarias" element={<CanariasCampus />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/procesos-selectivos" element={<PreparacionProcesosSelectivos />} />
                    <Route path="/preparacion-convocatoria" element={<PreparacionConvocatoria />} />
                    <Route path="/habilitacion-completa" element={<HabilitacionCompleta />} />
                    
                    {/* Updated routes with new components */}
                    <Route path="/bloque-1-licencia-torre" element={<Bloque1 />} />
                    <Route path="/bloque-2-licencias-ruta-aproximacion" element={<Bloque2 />} />
                    <Route path="/formacion-avanzada" element={<FormacionAvanzada />} />
                    <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
                    <Route path="/politica-cookies" element={<CookiePolicy />} />
                    
                    {/* English Routes */}
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/madrid-campus" element={<MadridCampus />} />
                    <Route path="/canary-islands" element={<CanariasCampus />} />
                    <Route path="/selection-process" element={<PreparacionProcesosSelectivos />} />
                    <Route path="/call-preparation" element={<PreparacionConvocatoria />} />
                    <Route path="/complete-rating" element={<HabilitacionCompleta />} />
                    
                    {/* Updated English route paths */}
                    <Route path="/block-1-tower" element={<Navigate to="/bloque-1-licencia-torre" replace />} />
                    <Route path="/block-2-approach" element={<Navigate to="/bloque-2-licencias-ruta-aproximacion" replace />} />
                    <Route path="/advanced-training" element={<FormacionAvanzada />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    
                    {/* Internal Routes (not linked in navigation) */}
                    <Route path="/feedback" element={<Feedback />} />
                    
                    {/* Redirect deleted routes */}
                    <Route path="/modulo-1-torre" element={<Navigate to="/bloque-1-licencia-torre" replace />} />
                    <Route path="/modulo-2-aproximacion" element={<Navigate to="/bloque-2-licencias-ruta-aproximacion" replace />} />
                    <Route path="/modulo1-torre" element={<Navigate to="/bloque-1-licencia-torre" replace />} />
                    <Route path="/home2" element={<Navigate to="/" replace />} />
                    
                    {/* Short URL redirects */}
                    <Route path="/bloque-1" element={<Navigate to="/bloque-1-licencia-torre" replace />} />
                    <Route path="/bloque-2" element={<Navigate to="/bloque-2-licencias-ruta-aproximacion" replace />} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </ScrollToHashHandler>
              </main>
              <Footer />
            </div>
          </LanguageDetectionProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
