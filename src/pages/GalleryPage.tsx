import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "../data/galleryData";

/**
 * Helper: Bento Grid Logic
 * Determines the span of each grid item based on its index to create
 * a dynamic, masonry-style visual interest.
 */
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

/**
 * GalleryPage Component
 * A high-performance, filterable media grid with smooth layout transitions
 * and cinematic hover effects.
 */
const GalleryPage = () => {
  const { state } = useLocation();

  // --- STATE & FILTERING ---
  const [filter, setFilter] = useState(state?.filter || "all");

  const categories = ["all", ...GALLERY_CATEGORIES];

  const filteredImages = useMemo(() => {
    return filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);
  }, [filter]);

  // --- EFFECTS ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (state?.filter) setFilter(state.filter);
  }, [state]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-44 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Navigation / Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 text-[10px] uppercase tracking-[0.35em] font-black border transition-all duration-500 ease-out ${
                filter === cat
                  ? "bg-malkos-orange border-malkos-orange text-white shadow-[0_0_20px_rgba(255,102,0,0.3)]"
                  : "border-white/10 text-white/30 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4 grid-flow-dense"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative group overflow-hidden bg-zinc-900 shadow-xl ${getBentoClass(index)}`}
                style={{ backfaceVisibility: "hidden" }}
              >
                {/* Media Layer */}
                <img
                  src={item.src}
                  alt="Malkos Gallery"
                  loading={index < 6 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 will-change-transform"
                />

                {/* Aesthetic Overlays */}
                <div className="absolute inset-0 bg-malkos-orange/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Cinematic Corner Accents */}
                <div className="absolute top-5 right-5 w-0 h-0 border-t border-r border-malkos-orange/60 opacity-0 group-hover:w-5 group-hover:h-5 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute bottom-5 left-5 w-0 h-0 border-b border-l border-malkos-orange/60 opacity-0 group-hover:w-5 group-hover:h-5 group-hover:opacity-100 transition-all duration-700" />

                {/* Subtle Grain/Depth Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;
