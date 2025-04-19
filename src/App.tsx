import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";


import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import Services from "./pages/Services";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

// Create a wrapper component to handle the navigation logic
const AppRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Function to detect mobile browsers
    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    
    // Set up handler for page reloads on mobile
    if (isMobile() && location.pathname !== '/') {
      const handlePageShow = (event) => {
        // If page is being loaded from the cache (reload)
        if (event.persisted) {
          navigate('/');
        }
      };
      
      // Handle reloads using pageshow event
      window.addEventListener('pageshow', handlePageShow);
      
      // Also handle the performance API way
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0 && navEntries[0].type === 'reload') {
        navigate('/');
      }
      
      return () => {
        window.removeEventListener('pageshow', handlePageShow);
      };
    }
  }, [navigate, location.pathname]);
  
  return (
    <>
      <Header />
      <div className="min-h-screen pt-[1px]">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;