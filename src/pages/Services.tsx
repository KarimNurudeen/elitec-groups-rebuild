import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceTechnical from "@/assets/service-technical.jpg";

const serviceImages: { [key: string]: string } = {
  "grease-trap-cleaning": serviceCleaning,
  "grease-trap-installation": serviceInstallation,
  "grease-trap-repair": serviceRepair,
  "technical-assistance": serviceTechnical,
};

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Professional grease trap services tailored to your facility's needs
          </p>
        </div>
      </div>

      <section className="py-20 flex-grow bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="group">
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/3]">
                  <img
                    src={serviceImages[service.slug]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />
                </div>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  slug={service.slug}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;