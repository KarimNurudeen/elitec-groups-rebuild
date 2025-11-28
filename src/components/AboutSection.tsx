export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop" 
                  alt="Grease trap cleaning"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=200&fit=crop" 
                  alt="Restaurant kitchen"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=400&h=200&fit=crop" 
                  alt="Kitchen cleaning"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=300&fit=crop" 
                  alt="Professional service"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Years Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[hsl(45,100%,70%)] p-8 rounded-lg shadow-2xl text-center">
              <div className="text-5xl font-bold text-primary">25<span className="text-3xl">+</span></div>
              <div className="text-sm font-semibold text-primary mt-1">Years Of Experience</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
              About us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Reliable Grease Trap Services That Keep Your Business Running Smoothly.
            </h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              At Elitec Groups, we offer flexible, stress-free grease trap cleaning and preventive maintenance services tailored to the needs of restaurants and food processing facilities. Our expert team ensures every job is done thoroughly and on time — so you can focus on your business, not your drains.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-primary mb-1">Experienced team</h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-primary mb-1">Weekly, Biweekly, or On-Demand</h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-primary mb-1">Complete Service Solutions</h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-bold text-primary mb-1">Book, Manage & Track Services Online</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};