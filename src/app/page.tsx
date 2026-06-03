import { HeroSection } from "@/components/home/HeroSection";
import { AIPlatformSection } from "@/components/home/AIPlatformSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { MainLayout } from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AIPlatformSection />
      <FeaturedProjects />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout>
  );
}
