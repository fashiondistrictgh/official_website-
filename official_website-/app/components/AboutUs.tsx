"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900">About Us</h2>
        <p className="text-lg text-gray-600 mt-4">
        At The Fashion District (TFD), we redefine luxury fashion by blending modern trends with timeless elegance. We are creating an ecosystem that connects designers, stylists, and fashion lovers worldwide.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/gal4.jpg"
            width={600}
            height={400}
            alt="Mission"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-gray-100 p-8 shadow-md rounded-lg border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
          <p className="text-lg text-gray-700 mt-4">
          To provide an inclusive and innovative space where fashion enthusiasts and designers can thrive. We focus on quality craftsmanship, sustainable practices, and accessibility to ensure everyone can experience high-end fashion
          </p>
          <a href="#" className="text-blue-600 font-semibold mt-4 inline-block">
            Read More
          </a>
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-100 p-8 shadow-md rounded-lg border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
          <p className="text-lg text-gray-700 mt-4">
          To become a global leader in luxury fashion e-commerce, integrating technology with style to offer a seamless and personalized shopping experience.
          </p>
          <a href="#" className="text-blue-600 font-semibold mt-4 inline-block">
            Read More
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/gal2.jpg"
            width={600}
            height={400}
            alt="Vision"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
