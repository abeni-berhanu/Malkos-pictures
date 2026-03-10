import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import SliderSection from "../components/SliderSection";
import StatsSection from "../components/StatsSection";
import { motion } from "framer-motion";

const Home = () => {
  // 1. Define 'services' data here
  const services = [
    {
      title: "Wedding",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
      link: "/wedding",
      reverse: false,
    },
    {
      title: "Melse",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200",
      link: "/melse",
      reverse: true,
    },
    {
      title: "Birthday",
      image:
        "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1200",
      link: "/birthday",
      reverse: false,
    },
  ];

  // 2. Define 'popularWorks' data here
  const popularWorks = [
    {
      id: 1,
      name: "Sunset Nuptials",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
    },
    {
      id: 2,
      name: "Urban Portraits",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800",
    },
    {
      id: 3,
      name: "Traditional Ceremony",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    },
  ];

  // 3. Define 'teamMembers' data here
  const teamMembers = [
    {
      id: 1,
      name: "Abebe Kebede",
      role: "Lead Photographer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    },
    {
      id: 2,
      name: "Sara Tesfaye",
      role: "Creative Director",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    },
    {
      id: 3,
      name: "Dawit Isaac",
      role: "Editor",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-malkos-dark"
    >
      <Hero />

      {/* Services Loop */}
      <section id="work" className="pt-20">
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.title}
            image={service.image}
            link={service.link}
            reverse={service.reverse}
          />
        ))}
      </section>

      {/* Sliders using the defined data */}
      <SliderSection
        title="Popular Works"
        subtitle="Your memory with Malkos"
        items={popularWorks}
      />
      <SliderSection
        title="Meet our Team"
        subtitle="The faces behind the lens"
        items={teamMembers}
      />

      <StatsSection />
    </motion.div>
  );
};

export default Home;
