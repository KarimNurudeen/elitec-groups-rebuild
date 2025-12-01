import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Droplets, Settings, Wrench, Headset } from "lucide-react";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceTechnical from "@/assets/service-technical.jpg";
import serviceDrain from "@/assets/service-drain.jpg";
import servicePlumbing from "@/assets/service-plumbing.jpg";

const servicesData = [
  {
    id: 1,
    title: "Grease Trap Cleaning",
    slug: "grease-trap-cleaning",
    image: serviceCleaning,
    icon: Droplets,
    iconColor: "bg-primary",
  },
  {
    id: 2,
    title: "Grease Trap Replacement",
    slug: "grease-trap-installation",
    image: serviceInstallation,
    icon: Droplets,
    iconColor: "bg-primary",
  },
  {
    id: 3,
    title: "One-Stop Grease Trap Repair Services",
    slug: "grease-trap-repair",
    image: serviceRepair,
    icon: Settings,
    iconColor: "bg-cyan-400",
  },
  {
    id: 4,
    title: "Technical Assistance",
    slug: "technical-assistance",
    image: serviceTechnical,
    icon: Headset,
    iconColor: "bg-yellow",
  },
  {
    id: 5,
    title: "Expert Drain Snaking Services",
    slug: "grease-trap-cleaning",
    image: serviceDrain,
    icon: Settings,
    iconColor: "bg-cyan-400",
  },
  {
    id: 6,
    title: "Commercial Plumbing Solutions",
    slug: "technical-assistance",
    image: servicePlumbing,
    icon: Wrench,
    iconColor: "bg-cyan-400",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-secondary text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Services</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>»</span>
            <span>Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Icon Badge */}
                      <div className={`absolute bottom-4 right-4 ${service.iconColor} w-14 h-14 rounded-full flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;