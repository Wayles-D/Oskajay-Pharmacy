import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Layouts/Navbar";
import { Footer } from "./Layouts/Footer";
import Homepage from "./HomePage";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App