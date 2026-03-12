import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Imports
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";

/**
 * Root Application Component
 * Handles global layout structure, navigation providers, and
 * primary route definitions.
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col selection:bg-malkos-orange selection:text-white">
        {/* Global Navigation Overlay */}
        <Navbar />

        {/* Primary Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />

            {/* Fallback for undefined routes could be added here */}
          </Routes>
        </main>

        {/* Global Footer & Contact Information */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
