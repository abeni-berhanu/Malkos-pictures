import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper Core Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * Type Definitions
 */
interface SliderItem {
  id: number;
  image: string;
  name: string;
  role?: string;
}

interface SliderProps {
  title: string;
  subtitle: string;
  items: SliderItem[];
}

/**
 * SliderSection Component
 * A reusable carousel for showcasing team members.
 * Grayscale is disabled on mobile (below md) to provide a better
 * experience for touch-based users.
 */
const SliderSection = ({ title, subtitle, items }: SliderProps) => {
  // Swiper Configuration
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    className: "pb-16",
  };

  return (
    <section className="py-24 bg-[#0F0F0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-malkos-orange text-xs uppercase tracking-[0.5em] mb-3 font-bold">
            {subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            {title}
          </h2>
          <div className="h-[1px] w-16 bg-malkos-orange mx-auto mt-6" />
        </motion.div>

        {/* Carousel Interface */}
        <Swiper {...swiperOptions}>
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                {/* Media Wrapper */}
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 shadow-2xl border border-white/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    /* md:grayscale applies only on tablet/desktop. 
                       Mobile devices see the image in full color immediately.
                    */
                    className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Meta Information */}
                <div className="mt-8 text-center md:text-left">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-malkos-orange transition-colors duration-300">
                    {item.name}
                  </h3>
                  {item.role && (
                    <p className="text-gray-500 text-xs uppercase tracking-widest mt-2 font-medium">
                      {item.role}
                    </p>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSection;
