import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MALKOS_CONFIG } from "../data/config";

// Section Components
import Hero from "../components/Hero";
import Works from "../components/Works";
import SliderSection from "../components/SliderSection";
import StatsSection from "../components/StatsSection";
import ServiceSection from "../components/ServiceSection";

/**
 * Home Page
 * Primary landing page controller. Handles cross-page scroll orchestration
 * and section-based layout rendering.
 */
const Home = () => {
  const location = useLocation();

  // --- NAVIGATION ORCHESTRATION ---
  useEffect(() => {
    const scrollToTarget = location.state?.scrollTo;

    if (scrollToTarget) {
      // Delay allows for full DOM paint and asset layout calculations
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToTarget);

        if (element) {
          const NAVBAR_OFFSET = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const scrollPosition = elementRect - bodyRect - NAVBAR_OFFSET;

          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      }, 150);

      // Reset history state to prevent re-triggering scroll on manual refresh
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
      {/* 01. Hero / Splash */}
      <section id="home">
        <Hero />
      </section>

      {/* 02. Service Offerings */}
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

      {/* 03. Curated Works Portfolio */}
      <section id="gallery">
        <Works />
      </section>

      {/* 04. Creative Personnel */}
      <section id="team">
        <SliderSection
          title="Meet our Team"
          subtitle="The faces behind the lens"
          items={MALKOS_CONFIG.team}
        />
      </section>

      {/* 05. Studio Legacy & Metrics */}
      <section id="about">
        <StatsSection />
      </section>

      {/* 06. Global Footer / Lead Capture */}
      <section id="contact">
        <div className="py-10 border-t border-white/5 bg-malkos-dark" />
      </section>
    </motion.div>
  );
};

export default Home;
