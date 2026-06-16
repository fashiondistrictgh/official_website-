"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function DownloadAppSection() {
  return (
    <section id="download-app" className="bg-ink py-24 text-ivory lg:py-32">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 lg:px-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: "-80px" }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <span className="eyebrow text-brass-soft">The TFD App</span>
          <h2 className="display mt-5 text-4xl lg:text-5xl">
            Confidence, in your pocket.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base font-light leading-relaxed text-ivory/70 md:mx-0">
            Seamless navigation and effortless shopping — the entire district,
            directly from your phone.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Link
              href="#"
              className="flex h-[58px] w-[200px] items-center gap-4 border border-ivory/20 bg-ivory/5 px-5 transition-colors duration-300 hover:border-brass hover:bg-ivory/10"
            >
              <Image src="/playstore.png" alt="" width={20} height={22} />
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-wide text-ivory/60">Get it on</p>
                <p className="text-base font-semibold">Google Play</p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex h-[58px] w-[200px] items-center gap-4 border border-ivory/20 bg-ivory/5 px-5 transition-colors duration-300 hover:border-brass hover:bg-ivory/10"
            >
              <Image src="/apple.png" alt="" width={22} height={20} />
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-wide text-ivory/60">Download on the</p>
                <p className="text-base font-semibold">App Store</p>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          viewport={{ once: true, margin: "-80px" }}
          className="order-1 flex justify-center md:order-2"
        >
          <Image src="/app1.png" alt="The Fashion District app" width={420} height={420} className="w-auto" />
        </motion.div>
      </div>
    </section>
  );
}
