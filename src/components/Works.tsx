import { motion } from "framer-motion";
import { MALKOS_CONFIG } from "../data/config";

/**
 * Works Component
 * Displays a curated "Bento Box" grid of popular projects.
 * Utilizes dynamic grid spanning from MALKOS_CONFIG to create a premium visual hierarchy.
 */
const Works = () => {
  // Animation Variants for sequential entry
  const headerVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-malkos-dark py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={headerVariants}
            className="text-malkos-orange text-[10px] uppercase tracking-[0.4em] font-black mb-3"
          >
            Your memory with Malkos
          </motion.p>

          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            variants={headerVariants}
            className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight"
          >
            POPULAR WORKS
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[2px] bg-malkos-orange mx-auto mt-6"
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px]">
          {MALKOS_CONFIG.popularWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className={`relative overflow-hidden group rounded-sm shadow-2xl ${work.gridClass}`}
            >
              {/* Media Container */}
              <div className="w-full h-full overflow-hidden bg-zinc-900">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover brightness-[0.6] group-hover:brightness-[0.85] transition-all duration-700"
                  loading="lazy"
                />
              </div>

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-malkos-orange text-[9px] uppercase tracking-[0.3em] font-black mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {work.category}
                </span>
                <h4 className="text-white text-xl font-bold uppercase tracking-tighter translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {work.title}
                </h4>
              </div>

              {/* Subtle Frame */}
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
