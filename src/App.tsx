import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import FoundersLetter from "./pages/FoundersLetter.tsx";
import Terms from "./pages/Terms.tsx";
import BlogBrownButter from "./pages/BlogBrownButter.tsx";
import BlogJaggery from "./pages/BlogJaggery.tsx";
import BlogChai from "./pages/BlogChai.tsx";

const queryClient = new QueryClient();

import { CartProvider } from "@/contexts/CartContext";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/founders-letter" element={<FoundersLetter />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog/brown-butter" element={<BlogBrownButter />} />
            <Route path="/blog/jaggery" element={<BlogJaggery />} />
            <Route path="/blog/chai-pairings" element={<BlogChai />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
