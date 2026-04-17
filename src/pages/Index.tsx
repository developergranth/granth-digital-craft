import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Templates from "@/components/portfolio/Templates";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import WhatsAppFloat from "@/components/portfolio/WhatsAppFloat";

const Index = () => {
  // Activate scroll-triggered reveal animations site-wide
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Templates />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
