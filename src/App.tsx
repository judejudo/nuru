import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  useNavigate, 
  useLocation,
  Navigate
} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import Services from "./pages/Services";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ContactPage from "./pages/ContactPage";

// Add this script to your public/index.html file head
// This will run before React loads and handle direct URL access
// <script>
//   // Only add this code for production, not development
//   if (window.location.hostname !== 'localhost') {
//     // Handle 404 errors before React loads by redirecting to home
//     window.addEventListener('error', function(e) {
//       if (document.querySelector('noscript')) {
//         if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
//           window.location.href = '/';
//         }
//       }
//     }, true);
//   }
// </script>

const queryClient = new QueryClient();

// Custom hook to handle reload detection and mobile redirection
const useHandleReload = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Skip for home page
    if (location.pathname === '/') return;
    
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Skip for non-mobile devices
    if (!isMobile) return;
    
    // Handle reload event
    const detectReload = () => {
      // Check Performance API
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0 && navEntries[0].type === 'reload') {
        console.log('Reload detected via Performance API');
        navigate('/', { replace: true });
        return true;
      }
      
      // Fallback method if Performance API failed
      try {
        if (sessionStorage.getItem('pageReloaded') === 'true') {
          console.log('Reload detected via sessionStorage');
          sessionStorage.removeItem('pageReloaded');
          navigate('/', { replace: true });
          return true;
        }
      } catch (e) {
        // Session storage might be unavailable
      }
      
      return false;
    };
    
    // Set reload marker (for next load)
    const handleBeforeUnload = () => {
      try {
        sessionStorage.setItem('pageReloaded', 'true');
      } catch (e) {
        // Session storage might be unavailable
      }
    };
    
    // Handle page show events (for back-forward cache)
    const handlePageShow = (e) => {
      if (e.persisted) {
        console.log('Page was restored from back-forward cache');
        navigate('/', { replace: true });
      }
    };
    
    // Check for reload when component mounts
    const isReload = detectReload();
    
    // Set up event listeners if not a reload
    if (!isReload) {
      window.addEventListener('beforeunload', handleBeforeUnload);
      window.addEventListener('pageshow', handlePageShow);
      
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        window.removeEventListener('pageshow', handlePageShow);
      };
    }
  }, [navigate, location.pathname]);
};

const AppRoutes = () => {
  // Use our custom hook to handle reload behavior
  useHandleReload();
  
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
          {/* Catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
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