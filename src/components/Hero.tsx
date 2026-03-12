import { motion } from "framer-motion";

/**
 * Hero Section
 * Main entry point of the landing page featuring cinematic brand messaging
 * and primary call-to-action triggers.
 */
const Hero = () => {
  // Internal utility for precise section scrolling
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

  return (
    <section className="relative h-[75vh] w-full flex items-center justify-start overflow-hidden bg-malkos-dark">
      {/* Visual Backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="/hero-bg.png"
          className="w-full h-full object-cover brightness-75 will-change-transform"
          alt="Malkos Cinematic Visual"
        />
      </div>

      {/* Primary Brand Messaging */}
      <div className="relative z-20 px-6 md:px-20 lg:px-32 max-w-4xl pt-10">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.215, 0.61, 0.355, 1],
            delay: 0.3,
          }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Capturing Moments,
            <br />
            Creating Memories.
          </h1>

          <p className="mt-6 text-white/70 text-sm md:text-base max-w-lg leading-relaxed font-light">
            Elevate your narrative with our professional studio expertise, where
            every frame transforms your vision into a timeless masterpiece.
          </p>
        </motion.div>

        {/* Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-row items-center gap-4"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="border border-malkos-orange text-malkos-orange px-8 md:px-10 py-3 uppercase text-[9px] tracking-widest font-black transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,77,0,0.3)]"
          >
            About Studio
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-malkos-orange border border-malkos-orange text-white px-8 md:px-10 py-3 uppercase text-[9px] tracking-widest font-black transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,77,0,0.4)]"
          >
            Book Session
          </button>
        </motion.div>
      </div>

      {/* Bottom Branding Accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center opacity-20 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-white" />
          <span className="text-[8px] tracking-[0.5em] uppercase font-medium">
            Est. 2024
          </span>
          <div className="h-[1px] w-8 bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
