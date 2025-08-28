import React from "react";
import { Navbar } from "./Layouts/Navbar";
import { Footer } from "./Layouts/Footer";
import { HeroSection } from "./Pages/Hero";
import { AboutSection } from "./Pages/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;
