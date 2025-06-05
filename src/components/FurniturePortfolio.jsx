import { useEffect, useState } from "react";
import React from "react";
import LoadingScreen from "./LoadingScreen";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const FurniturePortfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppContact = () => {
    const whatsappNumber = "2349078999379"; 
    const message = encodeURIComponent("Hello! I'm interested in your furniture crafting services. Can we discuss a project?");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      <Header onWhatsAppContact={handleWhatsAppContact} />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection onWhatsAppContact={handleWhatsAppContact} />
      <Footer />
    </div>
  );
};

export default FurniturePortfolio;