import { Link } from "wouter";
import { Gem, MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import logoImg from "../../public/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <img className="w-20" src={logoImg} alt="Naitik Diamond Tools Pvt Ltd. Logo" />
              {/* <div className="bg-accent p-2 rounded text-white">
                <Gem className="h-5 w-5" />
              </div> */}
              <span className="font-display font-bold text-xl tracking-wide">
                NAITIK DIAMOND TOOLS PVT LTD.
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Precision engineered diamond tools for professional stone cutting, drilling, and polishing applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Products</Link></li>
              {/* <li><Link href="/about" className="hover:text-accent transition-colors">Our Story</Link></li> */}
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/6tRtfM6513ojVib19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  NH-8, Bhagwanda Village, near Morchana <br />
                  Kankroli, Rajsamand 313324 (Rajasthan)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a 
                  href="tel:+919414174580" 
                  className="hover:text-accent transition-colors"
                >
                  +91 9414174580
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a 
                  href="mailto:naitikdiamondtools@yahoo.com" 
                  className="hover:text-accent transition-colors"
                >
                  naitikdiamondtools@yahoo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wider">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-primary-foreground/10 p-2 rounded hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 p-2 rounded hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/50 mt-4">
              © {new Date().getFullYear()} Diamond Tools Inc.<br/>All rights reserved.
            </p>
          </div> */}
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/40">
          <p>Designed for Industrial Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
