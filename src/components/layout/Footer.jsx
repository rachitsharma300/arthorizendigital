import Link from "next/link";

const footerLinks = {
    Company: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ],
    Services: [
        { label: "Residential Design", href: "/services" },
        { label: "Commercial Design", href: "/services" },
        { label: "Space Planning", href: "/services" },
        { label: "Consultation", href: "/services" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#0A0A0A] border-t border-[#C9A96E]/20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 border border-[#C9A96E] rotate-45" />
                            <span
                                className="text-xl tracking-[0.2em] uppercase text-[#F5F2EE]"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Arthorizen
                            </span>
                        </div>
                        <p className="text-[#6B6560] text-sm leading-relaxed max-w-xs">
                            Transforming spaces into extraordinary experiences. We craft
                            interiors that inspire, elevate, and endure.
                        </p>
                        {/* Social Links */}
                        <div className="flex flex-wrap gap-6 mt-8">
                            {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-xs tracking-[0.15em] uppercase text-[#6B6560] hover:text-[#C9A96E] transition-colors duration-300"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-6">
                        {title}
                    </h4>
                    <ul className="flex flex-col gap-3">
                        {links.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-[#6B6560] hover:text-[#F5F2EE] transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        {/* Bottom Bar */ }
    <div className="mt-16 pt-8 border-t border-[#C9A96E]/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#6B6560] tracking-[0.1em]">
            © {new Date().getFullYear()} Arthorizen Digital. All rights
            reserved.
        </p>
        <p className="text-xs text-[#6B6560] tracking-[0.1em]">
            Designed with precision & passion
        </p>
    </div>
      </div >
    </footer >
  );
}