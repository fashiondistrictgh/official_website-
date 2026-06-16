"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="The Fashion District"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="scale-105"
      />
      {/* Editorial gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/40" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-content px-6 pb-20 lg:px-10 lg:pb-28">
          <div className="max-w-2xl text-ivory">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="eyebrow text-brass-soft"
            >
              The Fashion District
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.1 }}
              className="display mt-6 text-5xl sm:text-6xl lg:text-7xl"
            >
              Luxury,
              <br />
              redefined.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.25 }}
              className="mt-6 max-w-lg text-base font-light leading-relaxed text-ivory/80 lg:text-lg"
            >
              Timeless fashion that blends elegance with modern design. Explore our
              collections and redefine your style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#download-app" className="btn-solid bg-ivory text-ink hover:bg-brass hover:text-ivory">
                Shop Now
              </a>
              <a href="#about" className="btn-line text-ivory">
                Discover TFD
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <span className="block h-12 w-px animate-pulse bg-ivory/50" />
      </div>
    </section>
  );
}
