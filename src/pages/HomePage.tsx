import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ReviewsSection } from "@/components/ReviewsSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
    </Layout>
  );
};

export default HomePage;
