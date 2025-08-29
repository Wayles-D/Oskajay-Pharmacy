import { Button } from '../Components/Ui/Button';
import { Search, ShoppingCart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-green-700 leading-tight">
                Trusted Pharmaceutical Wholesaler for{' '}
                <span className="text-[#9E1E8D]">Clinics &amp; Pharmacies</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed lora-normal">
                Supplying Nigeria with affordable, quality medications and equipment. 
                NAFDAC verified with 35 years of excellence and nationwide delivery.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={"/services"}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Search className="mr-2 h-5 w-5" />
                Explore Our Services
              </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-6 lora-normal">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">NAFDAC Verified</span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-[#9E1E8D]">30+</span> Years Experience
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-blue-600">500+</span> Partners
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate__animated animate__slideInRight">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl ">
              <img
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern pharmacy interior with organized medication shelves"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>
                <div className='lora-normal'>
                  <p className="text-2xl font-bold text-gray-900">1000+</p>
                  <p className="text-sm text-gray-600">Products Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}