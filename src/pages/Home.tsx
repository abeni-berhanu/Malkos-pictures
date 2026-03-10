import Hero from "../components/Hero";
import Works from "../components/Works"; // Import the new Bento Gallery
import SliderSection from "../components/SliderSection";
import StatsSection from "../components/StatsSection";
import { motion } from "framer-motion";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  //1. services
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
  // 2. Team Members Data
  const teamMembers = [
    {
      id: 1,
      name: "Dagim Zeleke",
      role: "Lead Photographer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    },
    {
      id: 2,
      name: "Bemnet Berhanu",
      role: "Creative Director",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    },
    {
      id: 3,
      name: "Biruk Temesgen",
      role: "Editor",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    },
    {
      id: 3,
      name: "Emnet Tesfaye",
      role: "Editor",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
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
      <section id="work">
        <Works />
      </section>

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
