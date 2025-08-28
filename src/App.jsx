import React from "react";
import { Navbar } from "./Layouts/Navbar";
import { Footer } from "./Layouts/Footer";
import { HeroSection } from "./Pages/Hero";
import { AboutSection } from "./Pages/AboutUs";
import { MissionAndVision } from "./Pages/MissionAndVision";
import { OurServices } from "./Pages/OurServices";
import { ContactUs } from "./Pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OurServices />
      <MissionAndVision />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
