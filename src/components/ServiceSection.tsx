import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceProps {
  title: string;
  image: string;
  reverse?: boolean;
  link: string;
}

const ServiceSection = ({ title, image, reverse, link }: ServiceProps) => {
  return (
    <div className="py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`max-w-7xl mx-auto px-6 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
      >
        {/* Image Container */}
        <div className="w-full md:w-3/5">
          <div className="relative group overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 border-[1px] border-white/10 m-4 pointer-events-none" />
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`w-full md:w-2/5 text-center ${reverse ? "md:text-right" : "md:text-left"} space-y-8`}
        >
          <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none break-words">
            {title}
          </h2>
          <p className="text-gray-400 tracking-widest uppercase text-xs">
            Professional Photography & Cinematography
          </p>
          <div
            className={`flex ${reverse ? "justify-center md:justify-end" : "justify-center md:justify-start"}`}
          >
            <Link
              to={link}
              className="inline-block border border-malkos-orange text-malkos-orange px-10 py-3 hover:bg-malkos-orange hover:text-white transition-all duration-300 uppercase text-xs tracking-[0.3em] font-bold"
            >
              Explore
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceSection;
