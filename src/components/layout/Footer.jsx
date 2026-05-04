import Link from "next/link";
import { Diamond, Camera, Briefcase, Paintbrush } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-brand-white pt-20 pb-10 border-t border-brand-gray-light/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <Diamond className="w-6 h-6 text-brand-gold group-hover:rotate-45 transition-transform duration-500" />
              <span className="font-heading text-2xl font-bold tracking-widest text-brand-white">
                ARTHORIZEN
              </span>
            </Link>
            <p className="text-brand-gray-light mb-8 max-w-sm">
              Transforming spaces into timeless experiences through visionary architecture and curated design.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gray-light/30 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gray-light/30 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Briefcase className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-gray-light/30 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Paintbrush className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading mb-6 tracking-wider">Company</h4>
            <ul className="space-y-4 text-brand-gray-light">
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-brand-gold transition-colors">Our Projects</Link></li>
              <li><Link href="/team" className="hover:text-brand-gold transition-colors">Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading mb-6 tracking-wider">Services</h4>
            <ul className="space-y-4 text-brand-gray-light">
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Architectural Design</Link></li>
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Interior Architecture</Link></li>
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Interior Styling</Link></li>
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Custom Furniture</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading mb-6 tracking-wider">Office</h4>
            <address className="not-italic text-brand-gray-light space-y-4">
              <p>1280 Design Avenue<br />Suite 400<br />New York, NY 10001</p>
              <p><a href="mailto:hello@arthorizendigital.com" className="hover:text-brand-gold transition-colors">hello@arthorizendigital.com</a></p>
              <p><a href="tel:+12125550199" className="hover:text-brand-gold transition-colors">+1 (212) 555-0199</a></p>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-gray-light/10 flex flex-col md:flex-row items-center justify-between text-sm text-brand-gray-light">
          <p>&copy; {new Date().getFullYear()} Arthorizen Digital. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}