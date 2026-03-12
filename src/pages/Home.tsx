import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MALKOS_CONFIG } from "../data/config";

// Component Imports
import Hero from "../components/Hero";
import Works from "../components/Works";
import SliderSection from "../components/SliderSection";
import StatsSection from "../components/StatsSection";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Check if we arrived here with a "scrollTo" instruction in the state
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      // 2. Small timeout to ensure the DOM is fully rendered before calculating position
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Navbar height offset
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 150); // 150ms delay for smooth transition

      // 3. Cleanup: Wipe the state so refreshing the page doesn't trigger the scroll again
      window.history.replaceState({}, document.title);

      return () => clearTimeout(timer);
    }
  }, [location]);

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
        {MALKOS_CONFIG.services.map((service) => (
          <ServiceSection
            key={service.title}
            title={service.title}
            image={service.image}
            description={service.description}
            reverse={service.reverse}
            category={service.title.toLowerCase()}
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

      {/* 6. Contact Section - Added ID to ensure the Navbar "Contact" link works */}
      <section id="contact">
        {/* If you have a Footer component that contains the contact form, place it here */}
        <div className="py-10 border-t border-white/5 bg-malkos-dark" />
      </section>
    </motion.div>
  );
};

export default Home;
