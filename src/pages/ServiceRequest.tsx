import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ServiceRequest = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Service Request</h1>
            <p className="text-foreground/80 text-lg">Coming soon...</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceRequest;
