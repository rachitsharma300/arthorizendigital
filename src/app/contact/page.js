import { generatePageMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = generatePageMetadata({
  title: "Contact Us",
  description: "Get in touch with Arthorizen Digital to start discussing your next architectural or interior design project.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="bg-brand-white dark:bg-brand-black min-h-screen pt-40 pb-24 md:pt-48 transition-colors">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <SectionHeading
              label="Get In Touch"
              title="Start Your Project"
              description="Whether you have a specific vision or need guidance from the ground up, our team is ready to bring your ideas to life."
            />
            
            <ScrollReveal delay={0.2} className="space-y-12 mt-12">
              <div>
                <h4 className="font-heading text-2xl mb-4 text-brand-black dark:text-brand-white">Studio</h4>
                <address className="not-italic text-brand-gray dark:text-brand-gray-light leading-relaxed">
                  1280 Design Avenue<br />
                  Suite 400<br />
                  New York, NY 10001
                </address>
              </div>
              
              <div>
                <h4 className="font-heading text-2xl mb-4 text-brand-black dark:text-brand-white">Connect</h4>
                <div className="space-y-2 text-brand-gray dark:text-brand-gray-light">
                  <p><a href="mailto:hello@arthorizendigital.com" className="hover:text-brand-gold transition-colors">hello@arthorizendigital.com</a></p>
                  <p><a href="tel:+12125550199" className="hover:text-brand-gold transition-colors">+1 (212) 555-0199</a></p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={0.4} className="bg-[#F5F2EE] dark:bg-[#050505] p-8 md:p-12 border border-brand-gray-light/20">
            <h3 className="font-heading text-3xl mb-8 text-brand-black dark:text-brand-white">Send us a message</h3>
            <ContactForm />
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
