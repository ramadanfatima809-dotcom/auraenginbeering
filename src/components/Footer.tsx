import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-h3 mb-3">Aura technical and general enterprises limited</h3>
            <p className="text-body opacity-80">Powering Reliable Infrastructure</p>
            <p className="text-sm mt-4 opacity-70">
              Professional electrical and construction solutions for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-body-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-body opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-semibold text-body-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 opacity-80" />
                <p className="text-sm opacity-80">
                  Plot 14/27 Naibawa Along NNPC pipeline,<br />
                  Kumbotso LGA, Kano State
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 opacity-80" />
                <div className="text-sm opacity-80">
                  <p>0803 268 5802</p>
                  <p>0802 236 2816</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 opacity-80" />
                <a href="mailto:nuhuramadam@yahoo.com" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  nuhuramadam@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-8 py-5 text-center">
          <p className="text-sm opacity-70">
            © 2026 Aura technical and general enterprises limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
