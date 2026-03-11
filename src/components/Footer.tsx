import { Mail, MapPin, Phone, Send } from "lucide-react";
import { MALKOS_CONFIG } from "../config";

const Footer = () => {
  // Hardcoded Navigation - Matching Navbar IDs
  const exploreLinks = [
    { name: "Home", id: "home" },
    { name: "About Studio", id: "about" },
    { name: "Our Team", id: "team" },
    { name: "Gallery", id: "gallery" },
  ];

  // Reusable Scroll Logic
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Space for the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      id="contact"
      className="bg-[#0A0A0A] pt-24 pb-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* --- SIMPLE CONTACT FORM SECTION (Newsletter Style) --- */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-malkos-orange text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">
            Get In Touch
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">
            Let's capture the vision.
          </h2>
          <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us about the service you're looking for and any special
            requests.
          </p>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="flex-1 bg-transparent border border-white/10 px-6 py-4 focus:border-malkos-orange outline-none transition-colors text-xs tracking-widest text-white uppercase"
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="flex-1 bg-transparent border border-white/10 px-6 py-4 focus:border-malkos-orange outline-none transition-colors text-xs tracking-widest text-white uppercase"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-0">
              <input
                type="text"
                placeholder="YOUR MESSAGE"
                className="flex-grow bg-transparent border border-white/10 px-6 py-4 focus:border-malkos-orange outline-none transition-colors text-xs tracking-widest text-white uppercase"
              />
              <button className="bg-malkos-orange text-white px-10 py-4 uppercase font-bold text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                Send <Send size={12} />
              </button>
            </div>
          </form>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-white/5 pt-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black tracking-tighter italic text-white uppercase">
              {MALKOS_CONFIG.brand.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {MALKOS_CONFIG.brand.tagline}
            </p>
            <div className="flex flex-wrap gap-5">
              {MALKOS_CONFIG.socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-malkos-orange transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (Now with Scroll Logic) */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-white">
              Explore
            </h4>
            <ul className="space-y-4 text-gray-500 text-xs font-medium uppercase tracking-widest">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-malkos-orange transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-white">
              Find Us
            </h4>
            <div className="space-y-4 text-gray-400 text-sm font-medium">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-malkos-orange shrink-0" />
                <p className="leading-relaxed whitespace-pre-line">
                  {MALKOS_CONFIG.contact.address}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-malkos-orange shrink-0" />
                <p>{MALKOS_CONFIG.contact.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-malkos-orange shrink-0" />
                <p className="break-all">{MALKOS_CONFIG.contact.email}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Map Section */}
          <div>
            <div className="relative h-48 w-full rounded-sm overflow-hidden border border-white/5 grayscale invert-[0.9] opacity-80 hover:grayscale-0 hover:invert-0 transition-all duration-700">
              <iframe
                title="Malkos Location"
                src={MALKOS_CONFIG.contact.googleMapsLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} {MALKOS_CONFIG.brand.name} Pictures.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
