import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const TikTokIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer hover:text-white transition-colors"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-malkos-dark/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      {/* 1. SOCIALS & DIVIDER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-5 pb-3 flex justify-center items-center space-x-7 text-malkos-orange">
          <Facebook
            size={14}
            className="cursor-pointer hover:text-white transition-colors"
          />
          <Instagram
            size={14}
            className="cursor-pointer hover:text-white transition-colors"
          />
          <Twitter
            size={14}
            className="cursor-pointer hover:text-white transition-colors"
          />
          <TikTokIcon size={14} />
          <Youtube
            size={14}
            className="cursor-pointer hover:text-white transition-colors"
          />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-3/4 h-[1px] bg-white/20" />
        </div>
      </div>

      {/* 2. MAIN NAV */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="Malkos Logo"
            className="h-10 md:h-13 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 relative py-1 ${
                  isActive(link.path)
                    ? "text-malkos-orange"
                    : "text-white/70 hover:text-malkos-orange"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-malkos-orange"
                  />
                )}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="px-5 py-2 border border-malkos-orange text-malkos-orange text-[9px] uppercase tracking-[0.25em] font-black transition-all duration-300 hover:bg-malkos-orange hover:text-white"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden text-white z-[70]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 3. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-malkos-dark flex flex-col items-center justify-center z-[60] md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl uppercase tracking-[0.2em] font-black ${
                    isActive(link.path) ? "text-malkos-orange" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-10">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-10 py-3 border border-malkos-orange text-malkos-orange text-xs uppercase tracking-[0.25em] font-black transition-all duration-300 hover:bg-malkos-orange hover:text-white"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
