import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../Components/Ui/Card';
import {  
  Pill, 
  Shield, 
  Stethoscope, 
  Syringe, 
  UserCheck,

} from 'lucide-react';

export function OurServices (){
    const services = [
    {
      icon: <Pill className="h-8 w-8 text-blue-600" />,
      title: "Pharmaceutical Distribution",
      description: "Wholesale and retail distribution to healthcare institutions with comprehensive supply chain management."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Non-Prescription Products",
      description: "Retail of over-the-counter medications and wellness items for everyday health needs."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
      title: "Prescription Medication Dispensing",
      description: "Licensed pharmacists fill and dispense prescriptions with careful attention to safety and accuracy."
    },
    {
      icon: <Syringe className="h-8 w-8 text-green-600" />,
      title: "Immunization Services",
      description: "Vaccinations for various age groups following strict medical protocols and safety standards."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-blue-600" />,
      title: "Clinical Consultation Services",
      description: "Expert medication counseling, health advice, and comprehensive wellness guidance."
    }
  ];
  return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive healthcare solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl poppins-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center lora-normal">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  )
}
