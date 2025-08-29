import React from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
} from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";


export default function Contact() {
useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section data-aos="fade-up" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                    <p className="text-gray-600">+234-807-122-5454</p>
                    <p className="text-gray-600">+234-806-717-1505</p>
                    <p className="text-gray-600">+234-912-689-3125</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">oskajaynig@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">12B James Watt Rd, Off Forestry Junction, Benin City</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY2llc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Modern pharmacy interior"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

  )
}
