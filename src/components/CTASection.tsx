import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-8 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2">
          {/* Left - Navy Block */}
          <div className="bg-primary p-10 flex items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Track Your Service Area
              </h3>
              <p className="text-white/80 text-sm">
                We provide specialized grease trap cleaning for restaurants and food facilities of all sizes.
              </p>
            </div>
            <Link 
              to="/services" 
              className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center hover:bg-accent transition-colors group"
            >
              <ArrowRight className="h-5 w-5 text-accent group-hover:text-primary" />
            </Link>
          </div>

          {/* Right - Yellow Block */}
          <div className="bg-accent p-10 flex items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                Request a Quote
              </h3>
              <p className="text-primary/80 text-sm">
                Get a fast, no-obligation quote for professional grease trap cleaning tailored to your facility's needs.
              </p>
            </div>
            <Link 
              to="/service-request" 
              className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary transition-colors group"
            >
              <ArrowRight className="h-5 w-5 text-primary group-hover:text-accent" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
