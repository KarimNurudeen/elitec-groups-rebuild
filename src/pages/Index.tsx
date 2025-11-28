import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServiceIconsSection } from "@/components/ServiceIconsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { AppointmentSection } from "@/components/AppointmentSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServiceIconsSection />
      <WhyChooseSection />
      <NewsletterSection />
      <AppointmentSection />
      <Footer />
    </div>
  );
};

export default Index;