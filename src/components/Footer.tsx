import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-malkos-orange text-xs uppercase tracking-[0.5em] mb-4 font-bold">
            Stay Updated
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
            Newsletter Updates
          </h2>
          <form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow bg-malkos-dark border border-white/10 px-6 py-4 focus:border-malkos-orange outline-none transition-colors"
            />
            <button className="bg-malkos-orange text-white px-10 py-4 uppercase font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-all">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5 pt-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter italic">
              MALKOS
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Elevating memories through the lens of professional artistry.
            </p>
            <div className="flex space-x-4">
              <Instagram
                size={20}
                className="text-gray-400 hover:text-malkos-orange cursor-pointer"
              />
              <Facebook
                size={20}
                className="text-gray-400 hover:text-malkos-orange cursor-pointer"
              />
              <Youtube
                size={20}
                className="text-gray-400 hover:text-malkos-orange cursor-pointer"
              />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Studio
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 space-y-4 text-gray-500 text-sm">
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-white">
              Contact Info
            </h4>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-malkos-orange" />
              <p>Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-malkos-orange" />
              <p>+251 900 000 000</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-malkos-orange" />
              <p>contact@malkospictures.com</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Malkos Pictures. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
