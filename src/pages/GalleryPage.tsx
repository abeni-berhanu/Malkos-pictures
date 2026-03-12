import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS } from "../data/galleryData";

const GalleryPage = () => {
  const location = useLocation();
  const [filter, setFilter] = useState(location.state?.filter || "all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.state?.filter) setFilter(location.state.filter);
  }, [location.state]);

  const categories = ["all", "wedding", "melse", "portrait"];
  const filteredImages =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const getBentoClass = (index: number) => {
    const patternIndex = index % 10;
    switch (patternIndex) {
      case 0:
        return "md:col-span-2 md:row-span-2";
      case 2:
        return "md:row-span-2";
      case 4:
        return "md:col-span-2";
      case 7:
        return "md:row-span-2";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-malkos-dark pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 text-[10px] uppercase tracking-[0.3em] font-black border transition-all duration-500 ${
                filter === cat
                  ? "bg-malkos-orange border-malkos-orange text-white"
                  : "border-white/10 text-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* The Grid - This is the version with 'layout' restored */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 grid-flow-dense"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for "cinematic" feel
                }}
                className={`relative group overflow-hidden bg-zinc-900 ${getBentoClass(index)}`}
                style={{ backfaceVisibility: "hidden" }} // Prevents jitter during layout shifts
              >
                <img
                  src={item.src}
                  alt="Malkos Gallery"
                  loading={index < 4 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 will-change-transform"
                />

                {/* Hover Overlays */}
                <div className="absolute inset-0 bg-malkos-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-0 h-0 border-t border-r border-malkos-orange/50 opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-0 h-0 border-b border-l border-malkos-orange/50 opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;
