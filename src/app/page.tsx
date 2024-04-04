import ContactSection from "@/components/ContactSection";
import FAQsSection from "@/components/FAQsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowToSection from "@/components/HowToSection";
import LargeNavbar from "@/components/LargeNavbar";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main>
      <LargeNavbar />
      <HeroSection />
      <FeaturesSection />
      <HowToSection />
      <PricingSection />
      <FAQsSection />
      <ContactSection />
    </main>
  );
}
