import { useEffect } from "react";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Services from "./Pages/Services";
import MissionAndVision from "./Pages/MissionAndVision";
import Contact from "./Pages/Contact";

function Homepage() {
  useEffect(() => {
    const sections = [
      { id: "hero", title: "Home | OSKAJAY" },
      { id: "about", title: "About Us | OSKAJAY" },
      { id: "services", title: "Services | OSKAJAY" },
      { id: "mission", title: "Mission & Vision | OSKAJAY" },
      { id: "contact", title: "Contact | OSKAJAY" },
    ];

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((s) => s.id === entry.target.id);
            if (section) {
              document.title = section.title;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="mission">
        <MissionAndVision />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Homepage;