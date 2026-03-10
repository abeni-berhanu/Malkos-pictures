import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SliderItem {
  id: number;
  img: string;
  name: string;
  role?: string;
}

interface SliderProps {
  title: string;
  subtitle: string;
  items: SliderItem[];
}

const SliderSection = ({ title, subtitle, items }: SliderProps) => {
  return (
    <section className="py-24 bg-[#0F0F0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Logic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-malkos-orange text-xs uppercase tracking-[0.5em] mb-3 font-bold">
            {subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            {title}
          </h2>
          <div className="h-[1px] w-16 bg-malkos-orange mx-auto mt-6" />
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-malkos-card">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Overlay for that premium feel */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="mt-8 text-center md:text-left">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-malkos-orange transition-colors duration-300">
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
