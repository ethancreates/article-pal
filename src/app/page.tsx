import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowToSection from "@/components/HowToSection";
import LargeNavbar from "@/components/LargeNavbar";

export default function Home() {
  return (
    <main>
      <LargeNavbar />
      <HeroSection />
      <FeaturesSection />
      <HowToSection />
    </main>
  );
}
