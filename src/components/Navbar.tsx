import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MALKOS_CONFIG } from "../data/config";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Navigation Links Definition
  // 'isPage: true' means it's a separate route (/gallery)
  // 'isPage: false' means it's an ID on the home page (#team)
  const navLinks = [
    { name: "Home", id: "home", isPage: false },
    { name: "About", id: "about", isPage: false },
    { name: "Gallery", id: "/gallery", isPage: true },
    { name: "Team", id: "team", isPage: false },
    { name: "Contact", id: "contact", isPage: false },
  ];

  // --- SMART NAVIGATION LOGIC ---
  const handleNavigation = (id: string, isPage: boolean) => {
    setIsMobileMenuOpen(false);

    if (isPage) {
      // 1. If it's a separate page (Gallery)
      navigate(id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // 2. If it's a section anchor (Home, About, Team, etc.)
      if (location.pathname === "/") {
        // We are already home - scroll to ID
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        // We are on Gallery page - Go home first, then scroll
        navigate("/", { state: { scrollTo: id } });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY < heroHeight) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-[60] transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-malkos-dark/95 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        } ${
          isVisible || isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {/* 1. SOCIALS & DIVIDER */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="pt-5 pb-3 flex justify-center items-center space-x-7 text-malkos-orange">
            {MALKOS_CONFIG.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
          <div className="w-full flex justify-center">
            <div className="w-3/4 h-[1px] bg-white/20" />
          </div>
        </div>

        {/* 2. MAIN NAV */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => handleNavigation("home", false)}
            className="flex items-center group"
          >
            <img
              src="/logo.png"
              alt="Malkos Logo"
              className="h-10 md:h-13 w-auto object-contain"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.id, link.isPage)}
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 relative py-1 ${
                    location.pathname === link.id
                      ? "text-malkos-orange"
                      : "text-white/70 hover:text-malkos-orange"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavigation("contact", false)}
              className="px-5 py-2 border border-malkos-orange text-malkos-orange text-[9px] uppercase tracking-[0.25em] font-black transition-all duration-300 hover:bg-malkos-orange hover:text-white"
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden text-white relative z-[100] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 bg-malkos-dark flex flex-col items-center justify-center z-[55] md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.id, link.isPage)}
                  className="text-3xl uppercase tracking-[0.2em] font-black text-white hover:text-malkos-orange transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-10">
                <button
                  onClick={() => handleNavigation("contact", false)}
                  className="px-10 py-3 border border-malkos-orange text-malkos-orange text-xs uppercase tracking-[0.25em] font-black"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
