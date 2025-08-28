import { Button } from "../Components/Ui/Button";
import { Input } from "../Components/Ui/Input";
import {
  MapPin,
  Phone,
  Mail,
  // facebook,
  // Twitter,
  // Instagram,
  // Linkedin,
  Send,
} from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const productCategories = [
    { name: "Pharmaceutical distribution", href: "#" },
    { name: "Non-Prescription Products", href: "#" },
    { name: "Immunization Services", href: "#" },
    { name: "Prescription Medication Dispensing", href: "#" },
    { name: "Clinical Consultation Services", href: "#" },
  ];

  const socialLinks = [
    // { icon: <facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    // { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    // { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    // { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="">
                <img
                  src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1756050333/Screenshot_2025-08-24_163342_kjlwnx_e_improve_e_sharpen_wx0hbc.png"
                  alt="Brand-logo"
                  className="w-16 h-10 rounded-sm"
                />
              </div>
              <div className="ml-1">
                <span className="text-green-500 font-bold text-lg">
                  Healthy Living
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted healthcare partner since 1988, committed to providing
              quality pharmaceutical services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="h-10 w-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  {/* {social.icon} */}#
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  12B James Watt Rd, Benin City
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+234-807-122-5454</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">oskajaynig@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs text-center">
              © 2025 OSKAJAY Nigeria. All rights reserved. | NAFDAC Verified
              Supplier
            </p>

            <p className="text-gray-400 text-xs">
              Powered by <span className="text-[#9E1E8D]"> <a href="#">WAYLES</a></span>
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
