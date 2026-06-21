"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const feature = [
  { src: "/hero-logo.jpeg", title: "Street", caption: "Everyday edits" },
  { src: "/gal3.jpg", title: "Classy", caption: "Refined essentials" },
];

const grid = ["/reep1.jpg", "/reep2.jpg", "/gal4.jpg", "/float.jpg"];

export default function GallerySection() {
  return (
    <section id="collection" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 max-w-2xl"
        >
          <span className="eyebrow">The Collection</span>
          <h2 className="display mt-5 text-4xl text-ink lg:text-5xl">
            Curated for the way you live.
          </h2>
        </motion.div>

        {/* Feature row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {feature.map((item, i) => (
            <motion.a
              key={item.title}
              href="#download-app"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative block aspect-[4/5] overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-ivory">
                <span className="block text-xs uppercase tracking-editorial text-brass-soft">
                  {item.caption}
                </span>
                <span className="display mt-2 block text-3xl lg:text-4xl">{item.title}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quality divider */}
        <div className="my-20 flex items-center gap-6">
          <span className="h-px flex-1 bg-ink/15" />
          <span className="text-xs uppercase tracking-editorial text-ink-muted">
            Uncompromising Quality
          </span>
          <span className="h-px flex-1 bg-ink/15" />
        </div>

        {/* Grid row */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {grid.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={src}
                alt="Gallery"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
