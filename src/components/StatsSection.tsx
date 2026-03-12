import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { MALKOS_CONFIG } from "../data/config";

/**
 * Counter Component
 * Internal utility to handle high-performance numeric animations
 * using Framer Motion's useMotionValue.
 */
const Counter = ({ value, title }: { value: number; title: string }) => {
  const count = useMotionValue(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Transforms the raw number into a formatted string (K/M shorthand)
  const displayValue = useTransform(count, (latest): string => {
    const rounded = Math.round(latest);
    if (rounded >= 1000000) return (rounded / 1000000).toFixed(0) + "M";
    if (rounded >= 1000) return (rounded / 1000).toFixed(0) + "K";
    return rounded.toString();
  });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, count, value]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl md:text-5xl font-black text-malkos-orange italic flex justify-center items-center">
        <motion.span>{displayValue}</motion.span>
        <span>+</span>
      </h3>
      <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-2 font-bold">
        {title}
      </p>
    </div>
  );
};

/**
 * StatsSection Component
 * Displays brand achievements and mission statement with
 * an editorial-style "drop cap" layout.
 */
const StatsSection = () => {
  return (
    <section className="relative py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Background Brand Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase">
        {MALKOS_CONFIG.brand.name}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-white/5 pb-16">
          {MALKOS_CONFIG.stats.map((stat, index) => (
            <Counter key={index} value={stat.value} title={stat.title} />
          ))}
        </div>

        {/* Narrative Content */}
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 leading-relaxed text-lg">
              <span className="text-7xl font-black text-malkos-orange float-left mr-4 mt-2 leading-[0.8]">
                M
              </span>
              alkos Pictures is more than just a photography studio; it is a
              sanctuary for stories. Based in the heart of Addis Ababa, we
              specialize in capturing the raw, unscripted emotions of life's
              most significant milestones.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-400 leading-relaxed text-lg">
              <span className="text-7xl font-black text-white/20 float-left mr-4 mt-2 leading-[0.8]">
                W
              </span>
              hether we are documenting a traditional Melse ceremony or a
              contemporary wedding, our approach remains the same: technical
              precision blended with artistic soul. We don't just take pictures;
              we create heirlooms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
