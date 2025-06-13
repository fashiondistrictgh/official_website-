"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function GallerySection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white max-w-full mx-auto">
      {/* Main Image Row */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <Image
            src="/gal1.jpg"
            width={400}
            height={300}
            alt="Lived-In Stripes"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white p-6">
            <h3 className="lg:text-4xl text-2xl md:text-3xl font-bold mb-2">Street</h3>
            
          </div>
        </div>
        <div className="relative">
          <Image
            src="/gal3.jpg"
            width={500}
            height={500}
            alt="Our Core Sueded Tee"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white p-6">
            <h3 className="lg:text-4xl text-2xl md:text-3xl font-bold mb-2">Classy</h3>
          
          </div>
        </div>
      </motion.div>

      <div className="mt-10">
        <h1 className="text-2xl lg:text-4xl text-center font-semibold">Quality</h1>
      </div>

      {/* Additional Image Row */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/reep1.jpg"
            width={500}
            height={500}
            alt="Gallery Image 1"
            className="w-full h-auto object-cover rounded-lg shadow-sm"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/reep2.jpg"
            width={500}
            height={500}
            alt="Gallery Image 2"
            className="w-full h-auto object-cover rounded-lg shadow-sm"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/gal4.jpg"
            width={500}
            height={500}
            alt="Gallery Image 3"
            className="w-full h-auto object-cover rounded-lg shadow-sm"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* The image section  */}
          <Image
            src="/float.jpg"
            width={500}
            height={100}
            alt="Gallery Image 4"
            className="w-full h-full object-cover rounded-lg shadow-sm"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
