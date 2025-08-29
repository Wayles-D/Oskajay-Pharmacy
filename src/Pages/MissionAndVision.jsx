'use client'

import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Target, Eye } from 'lucide-react'

export default function MissionAndVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6"
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-gray-900 mb-6 poppins-bold"
            >
              Our Mission
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-700 leading-relaxed lora-normal"
            >
              To provide high-quality, affordable medications and comprehensive healthcare 
              services that prioritize patient safety, well-being, and satisfaction. We are 
              committed to building lasting relationships with our communities through 
              exceptional care and professional excellence.
            </motion.p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6"
            >
              <Eye className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl text-gray-900 mb-6 poppins-bold"
            >
              Our Vision
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-700 leading-relaxed lora-normal"
            >
              To empower individuals and communities to lead healthier lives by becoming 
              the most trusted and accessible healthcare partner in Nigeria. We envision 
              a future where quality healthcare is within reach for everyone, fostering 
              wellness and prosperity across all communities we serve.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


// import React from "react";
// import { Heart, Target, Users, TrendingUp, Brain, Zap } from "lucide-react";

// export function MissionAndVision() {
//   const coreValues = [
//     {
//       icon: <Heart className="h-6 w-6 text-blue-600" />,
//       title: "Respect",
//       description: "Treating every individual with dignity and care",
//     },
//     {
//       icon: <Target className="h-6 w-6 text-green-600" />,
//       title: "Passion",
//       description: "Dedicated commitment to healthcare excellence",
//     },
//     {
//       icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
//       title: "Growth",
//       description: "Continuous improvement and innovation",
//     },
//     {
//       icon: <Zap className="h-6 w-6 text-green-600" />,
//       title: "Motivation",
//       description: "Driven to make a positive impact",
//     },
//     {
//       icon: <Users className="h-6 w-6 text-blue-600" />,
//       title: "Empathy",
//       description: "Understanding and compassionate care",
//     },
//     {
//       icon: <Brain className="h-6 w-6 text-green-600" />,
//       title: "Strength",
//       description: "Reliable and dependable service",
//     },
//   ];
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-10">
//           {/* Mission */}
//           <div className="rounded-2xl bg-green-50 shadow-lg p-6">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               Our Mission
//             </h2>
//             <p className="text-lg text-gray-600 mb-6">
//               To provide affordable, high-quality medications and exceptional
//               pharmaceutical services that improve the health and wellbeing of
//               our communities.
//             </p>
//             <p className="text-lg text-gray-600">
//               We strive to be the most trusted healthcare partner by delivering
//               reliable, professional, and compassionate care to every individual
//               we serve.
//             </p>
//           </div>
//           {/* Vision */}
//           <div className="rounded-2xl bg-gray-100  shadow-lg p-6">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               Our Vision
//             </h2>
//             <p className="text-lg text-gray-600 mb-6">
//               To be the Trusted pharmacy that delivers innovative, cost-effective solutions, empowering individuals to lead healthier lives through outstanding service and care
//             </p>
//             <p className="text-lg text-gray-600">
//               We strive to be the most trusted healthcare partner by delivering
//               reliable, professional, and compassionate care to every individual
//               we serve.
//             </p>
//           </div>

//           {/* Core Values */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               Core Values
//             </h2>
//             <div className="grid grid-cols-1 gap-4">
//               {coreValues.map((value, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
//                 >
//                   <div className="flex-shrink-0 mt-1">{value.icon}</div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-1">
//                       {value.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm">{value.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
