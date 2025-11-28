import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive grease trap solutions for commercial kitchens and facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                slug={service.slug}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Elitec Groups?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're committed to delivering exceptional service that keeps your facility compliant, efficient, and odor-free.
              </p>

              <div className="space-y-4">
                {[
                  "Certified and licensed technicians",
                  "24/7 emergency service availability",
                  "EPA-compliant disposal methods",
                  "Comprehensive service documentation",
                  "Competitive pricing with no hidden fees",
                  "Scheduled maintenance programs",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-primary-foreground/90 mb-6">
                Request a service quote today and experience the Elitec difference.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;