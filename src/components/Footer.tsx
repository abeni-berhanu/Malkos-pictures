import React, { useState, useRef } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { MALKOS_CONFIG } from "../data/config";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Footer Component
 * Correctly integrated with EmailJS using environment variables.
 */
const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const exploreLinks = [
    { name: "Home", id: "home" },
    { name: "About Studio", id: "about" },
    { name: "Our Team", id: "team" },
    { name: "Gallery", id: "gallery" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    // Correct implementation using Vite Environment Variables
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error: Error) => {
        console.error("Submission Error:", error);
        setStatus("error");
      });
  };

  return (
    <footer
      id="contact"
      className="bg-[#0A0A0A] pt-24 pb-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Form Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-malkos-orange text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">
            Get In Touch
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">
            Let's capture the vision.
          </h2>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center justify-center gap-4"
              >
                <CheckCircle2 className="text-malkos-orange" size={40} />
                <p className="text-white text-xs uppercase tracking-widest font-bold">
                  Message Sent Successfully
                </p>
                <p className="text-gray-500 text-[10px] uppercase">
                  We'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-10 max-w-xl mx-auto leading-relaxed">
                  Tell us about the service you're looking for and any special
                  requests.
                </p>

                <form
                  ref={formRef}
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      required
                      type="text"
                      name="name" // Matches {{name}} in your template
                      placeholder="YOUR NAME"
                      className="flex-1 bg-transparent border border-white/10 px-6 py-4 focus:border-malkos-orange outline-none transition-colors text-xs tracking-widest text-white uppercase"
                    />
                    <input
                      required
                      type="email"
                      name="email" // Matches {{email}} in your template
                      placeholder="YOUR EMAIL"
                      className="flex-1 bg-transparent border border-white/10 px-6 py-4 focus:border-malkos-orange outline-none transition-colors text-xs tracking-widest text-white "
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-0">
                    <input
                      required
                      name="message" // Matches {{message}} in your template
                      type="text"
                      placeholder="YOUR MESSAGE"
                      className="flex-grow bg-transparent border border-white/10 px-6 py-4 focus:border-malkos-orange outline-none transition-colors text-xs tracking-widest text-white ss"
                    />
                    <button
                      disabled={status === "sending"}
                      className="bg-malkos-orange text-white px-10 py-4 uppercase font-bold text-[10px] tracking-[0.2em] hover:bg-white hover:text-black disabled:bg-zinc-900 disabled:text-zinc-600 transition-all flex items-center justify-center gap-2"
                    >
                      {status === "sending" ? "SENDING..." : "Send"}{" "}
                      <Send size={12} />
                    </button>
                  </div>
                  {status === "error" && (
                    <p className="text-red-500 text-[8px] uppercase tracking-widest mt-2">
                      Submission failed. Please check your connection or try
                      again.
                    </p>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info Grid (Brand, Links, Map) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-white/5 pt-16">
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

          <div className="relative h-48 w-full rounded-sm overflow-hidden border border-white/5 grayscale invert-[0.9] opacity-80 hover:grayscale-0 hover:invert-0 transition-all duration-700">
            <iframe
              title="Malkos Location"
              src={MALKOS_CONFIG.contact.googleMapsLink}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} {MALKOS_CONFIG.brand.name} Pictures.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
