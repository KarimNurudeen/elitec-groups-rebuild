import { Button } from "./ui/button";
import { ArrowRight, Shield, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-truck.jpg";

export const Hero = () => {
  return (
    <div className="relative bg-hero-from text-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Elitec Group Service Truck" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent text-sm md:text-base font-semibold mb-4 animate-fade-up uppercase tracking-wide">
            Commercial Grease Trap
          </p>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-up text-primary leading-tight">
            Cleaning & Maintenance
          </h1>
          <p className="text-base md:text-lg text-foreground/80 mb-8 animate-fade-up max-w-xl" style={{ animationDelay: '0.1s' }}>
            Professional grease trap services you can trust. Certified technicians providing expert cleaning, repair, and installation for commercial facilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/services">
              <Button size="lg" className="gap-2 group bg-accent hover:bg-accent/90">
                Our Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground">
                Get A Quote
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="bg-accent/20 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-bold text-2xl text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="bg-accent/20 p-3 rounded-lg">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-bold text-2xl text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="bg-accent/20 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-bold text-2xl text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};