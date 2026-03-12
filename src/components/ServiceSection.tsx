import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceProps {
  title: string;
  image: string;
  reverse: boolean;
  description?: string;
  // We add a category prop to tell the gallery what to filter
  category?: string;
}

const ServiceSection = ({
  title,
  image,
  reverse,
  description,
  category,
}: ServiceProps) => {
  return (
    <div className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`max-w-7xl mx-auto px-6 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-16 lg:gap-24`}
      >
        {/* Image Container */}
        <div className="w-full md:w-[45%]">
          <div className="relative group overflow-hidden shadow-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-[480px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            {/* Aesthetic Frame Overlay */}
            <div className="absolute inset-0 border-[1px] border-white/10 m-3 pointer-events-none z-10" />
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`w-full md:w-[55%] flex flex-col ${
            reverse
              ? "items-center md:items-end text-center md:text-right"
              : "items-center md:items-start text-center md:text-left"
          } space-y-8`}
        >
          <div className="space-y-4">
            <p className="text-malkos-orange tracking-[0.4em] uppercase text-[10px] font-black">
              Professional Service
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              {title}
            </h2>
          </div>

          <p className="text-gray-400 tracking-[0.1em] text-sm font-medium max-w-md leading-relaxed">
            {description}
          </p>

          <div
            className={`flex w-full ${
              reverse
                ? "justify-center md:justify-end"
                : "justify-center md:justify-start"
            }`}
          >
            <Link
              to="/gallery" // Always point to the main gallery page
              state={{ filter: category }} // This is the "secret" message passed to the gallery
              className="group relative inline-flex items-center justify-center border border-malkos-orange text-malkos-orange px-12 py-4 overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 uppercase text-[10px] tracking-[0.4em] font-bold group-hover:text-white transition-colors duration-300">
                Explore {title}
              </span>
              {/* Animated Background Fill */}
              <div className="absolute inset-0 bg-malkos-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceSection;
