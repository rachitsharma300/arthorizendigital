export const metadata = {
  title: "Contact Us | Arthorizen Digital",
  description:
    "Get in touch with Arthorizen Digital to discuss your next interior design project.",
};

export default function ContactPage() {
  return (
    <section className="bg-[#0A0A0A] pt-40 pb-20 px-6 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#C9A96E]" />
          <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E]">
            Get In Touch
          </span>
        </div>
        <h1
          className="text-6xl md:text-8xl text-[#F5F2EE] mb-12"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let's Work
          <br />
          <span className="text-[#C9A96E] italic">Together</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl text-[#F5F2EE] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Contact Information
            </h3>
            <div className="flex flex-col gap-6 text-[#ADA8A3]">
              <div>
                <p className="text-xs tracking-[0.1em] uppercase text-[#6B6560] mb-2">Email</p>
                <a href="mailto:hello@arthorizendigital.com" className="hover:text-[#C9A96E] transition-colors">
                  hello@arthorizendigital.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.1em] uppercase text-[#6B6560] mb-2">Phone</p>
                <p>+91 98765 43210</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.1em] uppercase text-[#6B6560] mb-2">Location</p>
                <p>123 Design Avenue, Creative District<br />Mumbai, Maharashtra 400001<br />India</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111111] p-8 border border-[#C9A96E]/10">
            <h3 className="text-2xl text-[#F5F2EE] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              Send a Message
            </h3>
            <form className="flex flex-col gap-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-[#C9A96E]/20 pb-3 text-[#F5F2EE] focus:outline-none focus:border-[#C9A96E] transition-colors placeholder:text-[#6B6560]"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-transparent border-b border-[#C9A96E]/20 pb-3 text-[#F5F2EE] focus:outline-none focus:border-[#C9A96E] transition-colors placeholder:text-[#6B6560]"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your project" 
                  rows={4}
                  className="w-full bg-transparent border-b border-[#C9A96E]/20 pb-3 text-[#F5F2EE] focus:outline-none focus:border-[#C9A96E] transition-colors placeholder:text-[#6B6560] resize-none"
                />
              </div>
              <button 
                type="button"
                className="mt-4 border border-[#C9A96E] text-[#C9A96E] py-3 px-8 hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-300 w-fit text-sm tracking-[0.1em] uppercase"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
