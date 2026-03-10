import { motion } from "framer-motion";

const Clients = () => {
  const logos = [1, 2, 3, 4, 5]; // Replace with actual logo URLs later

  return (
    <section className="py-20 bg-malkos-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-malkos-orange text-xs uppercase tracking-[0.4em] mb-4">
          We could tell you what makes us special
        </p>
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-12">
          Our Honored Clients
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {logos.map((logo) => (
            <div
              key={logo}
              className="h-12 w-32 bg-white/10 rounded flex items-center justify-center font-bold text-xs"
            >
              LOGO {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
