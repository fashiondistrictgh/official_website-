"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";


export default function DownloadAppSection() {
  return (
    <motion.section   initial={{ scale: 0.7, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.7 }}
     id="download-app" className="py-16 px-6 md:px-12 bg-gray-100 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Unlock a new level of confidence with our app
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Experience seamless navigation and effortless shopping directly from your phone.
        </p>

        {/* Download Buttons */}
      <div className="flex flex-col items-center lg:flex-row lg:gap-10 gap-5">

      {/* Google Download */}
      <Link href="#">
      <div className="flex gap-5 items-center bg-black border border-gray-400 rounded-[6px] py-4 px-4 w-[200px] h-[60px] shadow-md transition duration-300 ease-in-out transform hover:scale-105 ">
          {/* change the playstore icon */}
          <Image
          src="/playstore.png"
          alt="playstore"
          width={21}
          height={24}
          />
          <div>
            <p className="text-white text-[14px]">GET IT ON</p>
            <p className="text-white font-bold text-[18px]">Google Play</p>
          </div>
        </div>
      
      </Link>
        {/* Apple download */}
        <Link href="#">
        <div className="flex gap-5 items-center bg-black border border-gray-400 rounded-[6px] py-4 px-4 w-[200px] h-[60px] shadow-md transition duration-300 ease-in-out transform hover:scale-105 ">
          <Image
          src="/apple.png"
          alt="playstore"
          width={24}
          height={21}
          />
          <div className="flex flex-col gap-[-100px]">
            <p className="text-white text-[14px]">Download on the</p>
            <p className="text-white font-bold text-[20px]">App Store</p>
          </div>
        </div>
        </Link>
      </div>
      </div>

      {/* Phone Mockups */}
      <div className="flex-1 flex justify-center relative">
        <div className="relative">
          <Image
            src="/app1.png"
            alt="Phone Mockup 1"
            width={400}
            height={400}
          />
        </div>
      </div>
    </motion.section>
  );
}

