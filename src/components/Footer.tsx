import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Elitec <span className="text-secondary">Groups</span>
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Professional grease trap services for commercial facilities. Certified, reliable, and compliant.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Offers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/grease-trap-cleaning" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Grease Trap Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/grease-trap-repair" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Grease Trap Repair
                </Link>
              </li>
              <li>
                <Link to="/services/technical-assistance" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Technical Assistance
                </Link>
              </li>
              <li>
                <Link to="/services/installation" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Installation Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">info@elitecgroups.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">123 Business St, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Elitec Groups. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};