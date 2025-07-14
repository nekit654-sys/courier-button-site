import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CourierTypes from "@/components/CourierTypes";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import CourierBanner from "@/components/CourierBanner";

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    document.title =
      "Stuey.Go — свобода выбора, стабильность заработка. Присоединяйся! 🚀";
  }, []);

  return (
    <div className="min-h-screen">
      {showBanner && (
        <CourierBanner onClose={() => setShowBanner(false)} />
      )}
      <div className="relative">
        <Navigation />
        <HeroSection />
      </div>
      <CourierTypes />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;