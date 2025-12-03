import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-truck.jpg";

export const Hero = () => {
  return (
    <div className="relative bg-background text-foreground overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Elitec Group Service Truck" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20"></div>
      </div>
      
      {/* Decorative Cyan Circle */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent animate-pulse"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <p className="text-accent text-sm md:text-base font-semibold mb-4 uppercase tracking-wide">
            Commercial Grease Trap
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-navy leading-tight">
            Cleaning &<br />Maintenance
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/services">
              <Button size="lg" className="gap-2 rounded-full px-8 bg-accent hover:bg-secondary text-white font-semibold">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold">
                Get A Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};