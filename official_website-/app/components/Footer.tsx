import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and About Section */}
            <div>
            <div className="flex items-center">
          <Link 
          href="/"
          >
            <Image
            width={60}
            height={60}
            src="/log.png"
            alt="Logo"
            // className="h-10"
          />
          </Link>
          <Link
          href={"/"}
          >

          <Image
            width={100}
            height={40}
            src="/logo1.png"
            alt="Text Logo"
            // className="h-10"
          />
          </Link>
          
        
        </div>
                <p className="text-gray-400">
                    Your gateway to the latest trends, timeless designs, and the vibrant culture of fashion.
                </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-3">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
                <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>

            {/* Social Media Links */}
            <div>
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <div className="flex space-x-4 mt-3">
                    <a href="#" className="text-gray-400 hover:text-white">
                        <Facebook size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <Instagram size={24} />
                    </a> 
                    <a href="#" className="text-gray-400 hover:text-white">
                        <Twitter size={24} />
                    </a>
                </div>
            </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-500 text-sm">
            © {new Date().getFullYear()} TFD: The Fashion District. All Rights Reserved.
        </div>
    </footer>
    )
}