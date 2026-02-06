import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { VerkstedSection } from "@/components/VerkstedSection";
import { VinterlagringSection } from "@/components/VinterlagringSection";
import { McSalgsSection } from "@/components/McSalgsSection";
import { ToursSection } from "@/components/ToursSection";
import { OmOssSection } from "@/components/OmOssSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <VerkstedSection />
      <VinterlagringSection />
      <McSalgsSection />
      <ToursSection />
      <OmOssSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
