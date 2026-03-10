import Hero from "../components/Hero";
import Works from "../components/Works"; // Import the new Bento Gallery
import SliderSection from "../components/SliderSection";
import StatsSection from "../components/StatsSection";
import { motion } from "framer-motion";

const Home = () => {
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

      {/* REPLACED ServiceSection loop with the Works Bento Grid.
          This gives a much more modern, gallery-focused look.
      */}
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
