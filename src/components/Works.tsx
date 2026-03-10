import { motion } from "framer-motion";

const works = [
  {
    id: 1,
    title: "The Royal Union",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000",
    gridClass: "md:col-span-8 md:row-span-2",
  },
  {
    id: 2,
    title: "Heritage Gold",
    category: "Melse / Cultural",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000",
    gridClass: "md:col-span-4 md:row-span-1",
  },
  {
    id: 3,
    title: "The Modern Muse",
    category: "Portrait",
    image:
      "https://images.unsplash.com/photo-1509460913899-515f1df34fea?q=80&w=1000",
    gridClass: "md:col-span-4 md:row-span-1",
  },
  {
    id: 4,
    title: "After Hours",
    category: "Event Cinematography",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000",
    gridClass: "md:col-span-12 md:row-span-1",
  },
];

const Works = () => {
  return (
    <section className="bg-malkos-dark py-16 px-6">
      {" "}
      {/* Reduced padding from 24 to 16 */}
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Narrower container for better focus */}
        {/* EXACT SAME HEADER STYLE */}
        <div className="text-center mb-12">
          {" "}
          {/* Reduced bottom margin */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-malkos-orange text-[10px] uppercase tracking-[0.3em] font-bold mb-2"
          >
            Your memory with Malkos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight"
          >
            POPULAR WORKS
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[3px] bg-malkos-orange mx-auto mt-4"
          />
        </div>
        {/* COMPACT BENTO GRID */}
        {/* Changed auto-rows from 350px to 250px for a smaller look */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-[250px]">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group rounded-sm ${work.gridClass}`}
            >
              <div className="w-full h-full overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-700"
                />
              </div>

              {/* Overlay Content (Made padding smaller) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <span className="text-malkos-orange text-[8px] uppercase tracking-[0.2em] font-bold mb-1">
                  {work.category}
                </span>
                <h4 className="text-white text-lg font-bold uppercase tracking-tight">
                  {work.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
