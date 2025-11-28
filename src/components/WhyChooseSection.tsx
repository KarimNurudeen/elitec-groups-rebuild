export const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div>
            <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
              Why Choose us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              We Keep Kitchens Clean, Compliant, and Operational Always
            </h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              Whether you run a bustling restaurant or a large-scale food processing facility, Elitec Groups provides expert grease trap cleaning services that keep your operation running smoothly. Our professional team works around your schedule, ensuring your kitchen stays efficient, hygienic, and fully compliant with health regulations.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Commercial Kitchen Compliance Cleaning</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Routine & Emergency Services</h3>
              </div>
            </div>
          </div>

          {/* Right - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=300&fit=crop" 
                alt="Professional chef cooking"
                className="w-full h-56 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=250&fit=crop" 
                alt="Grease trap maintenance"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=250&fit=crop" 
                alt="Kitchen cleaning service"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" 
                alt="Commercial kitchen equipment"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};