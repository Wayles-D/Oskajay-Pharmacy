import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
      <section  className="py-20 bg-green-100">
        <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091358783-a212ec293ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjaXN0JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc1NjA4MTAyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pharmacist consultation"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-lg text-gray-600 mb-6 lora-normal">
                Founded in 1988 by Sir Pharm. Festus Ojo Idehai, OSKAJAY Healthy Living has grown from a small 
                community pharmacy into a trusted healthcare partner serving clients across Nigeria.
              </p>
              <p className="text-lg text-gray-600 mb-6 lora-normal">
                With over three decades of experience, we have built our reputation on unwavering commitment 
                to high-quality pharmaceuticals, exceptional customer service, and professional healthcare delivery.
              </p>
              <p className="text-lg text-gray-600 lora-normal">
                Our customer-centered approach ensures that every interaction reflects our dedication to your 
                health and wellbeing, making us a reliable partner in your healthcare journey.
              </p>
            </div>
          </div>
        </div>
      </section>

  );
}