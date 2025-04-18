import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { MainLayout } from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedProjects />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout>
  );
}
