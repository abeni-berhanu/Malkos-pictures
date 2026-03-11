import { motion } from "framer-motion";
import { MALKOS_CONFIG } from "../config";

// Component Imports
import Hero from "../components/Hero";
import Works from "../components/Works";
import SliderSection from "../components/SliderSection";
import StatsSection from "../components/StatsSection";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-malkos-dark"
    >
      {/* 1. Hero Section - Target for "Home" */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. Services Section */}
      <section id="services" className="pt-20">
        {MALKOS_CONFIG.services.map((service, index) => (
          <ServiceSection
            key={service.title}
            title={service.title}
            image={service.image}
            link={service.link}
            description={service.description}
            reverse={service.reverse}
          />
        ))}
      </section>

      {/* 3. Bento Gallery / Popular Works - Target for "Gallery" */}
      <section id="gallery">
        <Works />
      </section>

      {/* 4. Team Slider - Target for "Team" */}
      <section id="team">
        <SliderSection
          title="Meet our Team"
          subtitle="The faces behind the lens"
          items={MALKOS_CONFIG.team}
        />
      </section>

      {/* 5. Stats Counter - Target for "About" */}
      <section id="about">
        <StatsSection />
      </section>
    </motion.div>
  );
};

export default Home;
