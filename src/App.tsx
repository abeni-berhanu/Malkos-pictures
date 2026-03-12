import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";

// Placeholder pages for your routes
const About = () => (
  <div className="pt-32 text-center h-screen">About Page Coming Soon</div>
);
const Team = () => (
  <div className="pt-32 text-center h-screen">Team Page Coming Soon</div>
);
const Contact = () => (
  <div className="pt-32 text-center h-screen">Contact Page Coming Soon</div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-malkos-dark flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
