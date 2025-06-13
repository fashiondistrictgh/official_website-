"use client";

import React, { useState } from "react";
// import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md flex flex-col justify-center lg:h-[90px] h-16 fixed w-full top-0 z-50">
      <div className="container mx-8 max-w-full lg:max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Link 
          href="/"
          >
            <Image
            width={100}
            height={50}
            src="/tfdlogo.png"
            alt="Logo"
            className="h-[50px] lg:h-[80px] w-[50px] lg:w-[100px]"
          />
          </Link>
          
          
        
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/contact-us" className="text-white hover:text-gray-200 font-medium">
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden mr-10 text-gray-800 hover:text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <MenuIcon color="white" size={28} />
          </div>
        </button>
      </div>

      {/* Mobile Menu for the mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            
            <Link
              href="/contact-us"
              className="text-gray-800 hover:text-gray-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}