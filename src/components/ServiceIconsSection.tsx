import { Link } from "react-router-dom";

export const ServiceIconsSection = () => {
  const services = [
    {
      title: "Grease Trap Cleaning",
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          <path d="M7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
        </svg>
      ),
      slug: "grease-trap-cleaning",
      bgColor: "bg-primary"
    },
    {
      title: "Grease Trap Replacement",
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
        </svg>
      ),
      slug: "grease-trap-repair",
      bgColor: "bg-accent"
    },
    {
      title: "One-Stop Grease Trap Repair Services",
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      slug: "grease-trap-installation",
      bgColor: "bg-primary"
    },
    {
      title: "Technical Assistance",
      icon: (
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        </svg>
      ),
      slug: "technical-assistance",
      bgColor: "bg-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Service Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={`/services/${service.slug}`}
              className="group text-center"
            >
              <div className={`${service.bgColor} w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};