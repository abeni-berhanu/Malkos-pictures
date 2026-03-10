import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Send, // Used for Telegram
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  // Social Links Data - Match this with your Navbar
  const socialLinks = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Youtube, href: "#", label: "Youtube" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Send, href: "#", label: "Telegram" }, // Telegram often uses the Send/PaperPlane icon
  ];

  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <p className="text-malkos-orange text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">
            Stay Updated
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-white">
            Newsletter Updates
          </h2>
          <form
            className="flex flex-col sm:flex-row gap-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-grow bg-transparent border border-white/10 px-6 py-4 focus:border-malkos-orange outline-none transition-colors text-xs tracking-widest text-white uppercase"
            />
            <button className="bg-malkos-orange text-white px-10 py-4 uppercase font-bold text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-white/5 pt-16">
          {/* Column 1: Brand Info & All Socials */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-2xl font-black tracking-tighter italic text-white">
              MALKOS
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Elevating memories through the lens of professional artistry. We
              capture the soul of every moment in Addis Ababa and beyond.
            </p>
            <div className="flex flex-wrap gap-5">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-500 hover:text-malkos-orange transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-white">
              Explore
            </h4>
            <ul className="space-y-4 text-gray-500 text-xs font-medium uppercase tracking-widest">
              <li>
                <a
                  href="/"
                  className="hover:text-malkos-orange transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-malkos-orange transition-colors"
                >
                  About Studio
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="hover:text-malkos-orange transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-malkos-orange transition-colors"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Modern Map */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-white">
                Find Us
              </h4>
              <div className="space-y-4 text-gray-400 text-sm font-medium">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-malkos-orange shrink-0" />
                  <p className="leading-relaxed">
                    Bole, Behind Edna Mall,
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-malkos-orange shrink-0" />
                  <p>+251 900 000 000</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-malkos-orange shrink-0" />
                  <p>hello@malkospictures.com</p>
                </div>
              </div>
            </div>

            {/* THE MODERN MAP WITH ORANGE PIN TRICK */}
            <div
              className="relative h-64 w-full rounded-sm overflow-hidden border border-white/5 
                            grayscale invert-[0.9] hue-rotate-[160deg] opacity-80 
                            hover:grayscale-0 hover:invert-0 hover:hue-rotate-0 hover:opacity-100 
                            transition-all duration-700 ease-in-out group"
            >
              <iframe
                title="Malkos Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5487661502444!2d38.7845!3d9.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850000000001%3A0x0!2zOcKwMDAnMDAuMCJOIDM4wrA0NycwNC4yIkU!5e0!3m2!1sen!2set!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-malkos-orange/5 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Malkos Pictures. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
