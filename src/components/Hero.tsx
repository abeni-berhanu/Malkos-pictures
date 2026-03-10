import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[75vh] w-full flex items-center justify-start overflow-hidden bg-malkos-dark">
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/hero-bg.png"
          className="w-full h-full object-cover brightness-75"
          alt="Malkos Pictures Cinematic Background"
        />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-20 px-6 md:px-20 lg:px-32 max-w-4xl pt-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] tracking-tight">
            Capturing Moments,
            <br />
            Creating Memories.
          </h1>

          <p className="mt-6 text-white/70 text-sm md:text-base max-w-lg leading-relaxed font-light">
            Elevate your memories with our professional photo studio, where
            every click transforms your moments into timeless masterpieces.
          </p>
        </motion.div>

        {/* Action Buttons with Orange Glow + Orange Border on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-row items-center gap-4"
        >
          {/* About Button (Outline) */}
          <button className="border border-malkos-orange text-malkos-orange px-8 md:px-10 py-2.5 uppercase text-[9px] tracking-widest font-bold transition-all duration-300 hover:bg-white hover:border-malkos-orange hover:text-black hover:shadow-[0_0_25px_rgba(255,77,0,0.5)]">
            About
          </button>

          {/* Book Now Button (Solid) */}
          <button className="bg-malkos-orange border border-malkos-orange text-white px-8 md:px-10 py-2.5 uppercase text-[9px] tracking-widest font-bold transition-all duration-300 hover:bg-white hover:border-malkos-orange hover:text-black hover:shadow-[0_0_25px_rgba(255,77,0,0.5)]">
            Book Now
          </button>
        </motion.div>
      </div>

      {/* 3. DECORATIVE ELEMENTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center opacity-30">
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-5 bg-white" />
          <span className="text-[8px] tracking-[0.4em] uppercase">Malkos</span>
          <div className="h-[1px] w-5 bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
