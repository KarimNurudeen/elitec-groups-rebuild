import { Button } from "./ui/button";
import { ArrowRight, Shield, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-hero-from to-hero-to text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Professional Grease Trap Services You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Certified technicians providing expert cleaning, repair, and installation services for commercial facilities across the region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 group">
                Request Service
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground">
                View Services
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start gap-3 bg-trust-bg/30 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="font-bold text-2xl">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-trust-bg/30 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="font-bold text-2xl">500+</div>
                <div className="text-sm text-primary-foreground/80">Satisfied Clients</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-trust-bg/30 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="font-bold text-2xl">24/7</div>
                <div className="text-sm text-primary-foreground/80">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};