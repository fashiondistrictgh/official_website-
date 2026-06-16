"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || isOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-editorial ${
        solid
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(22,19,15,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
        {/* Logo */}
        <Link href="/" aria-label="The Fashion District — home" className="flex items-center">
          <Image
            width={100}
            height={50}
            src="/tfdlogo.png"
            alt="The Fashion District"
            priority
            className={`h-10 w-auto transition-all duration-500 lg:h-14 ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/contact-us"
            className={`text-xs font-medium uppercase tracking-wide transition-colors duration-300 hover:text-brass ${
              solid ? "text-ink" : "text-ivory"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="#download-app"
            className={`btn-line border-current text-xs ${
              solid ? "text-ink" : "text-ivory"
            }`}
          >
            Get the App
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${solid ? "text-ink" : "text-ivory"}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink/10 bg-ivory md:hidden transition-[max-height] duration-500 ease-editorial ${
          isOpen ? "max-h-60" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          <Link
            href="/contact-us"
            className="py-3 text-sm font-medium uppercase tracking-wide text-ink hover:text-brass"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            href="#download-app"
            className="py-3 text-sm font-medium uppercase tracking-wide text-brass"
            onClick={() => setIsOpen(false)}
          >
            Get the App
          </Link>
        </nav>
      </div>
    </header>
  );
}
