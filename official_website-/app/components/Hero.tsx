"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden"> {/* Added overflow-hidden */}
      <Image
        src="/hero.jpg"
        alt="Fashion"
        fill
        style={{ objectFit: "cover" }}
        priority // Optional: Prioritize loading this image
      />
      <section className="absolute inset-0 flex flex-col md:flex-row items-center justify-between text-white px-6 mt-32 max-w-6xl lg:mt-0 md:px-12 gap-1 lg:gap-8 mx-auto"> {/* Absolute positioning and white text */}
        <div className="flex-1 text-center pt-20 md:text-left z-10"> {/* Added z-index */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 md:mb-6"
          >
            Luxury Redefined
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl mb-4 md:mb-6"
          >
            Discover timeless fashion that blends elegance with modern design. Explore our collections and redefine your style.
          </motion.p>
          <motion.a
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-gray-800"
            href="#download-app"
          >
            Shop Now
          </motion.a>
        </div>
        {/* Removed the image div */}
      </section>
    </div>
  );
}
