"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutUs() {
  return (
    <section id="about" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow justify-center before:hidden">Our Story</span>
          <h2 className="display mt-5 text-4xl text-ink lg:text-5xl">About Us</h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-ink-muted">
            Fashion District is a fashion lifestyle e-retailer driven to make
            top-class fashion accessible nationwide. We&apos;re more than just a
            brand — we are a fashion movement, delivering the season&apos;s
            hottest looks faster than anyone else. Trusted nationwide for style
            that&apos;s bold, accessible, and trendy, Fashion District is in the
            habit of exceeding expectations.
          </p>
        </motion.div>

        {/* Mission */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image src="/hero-logo.jpeg" alt="Our mission" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain bg-ivory" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="eyebrow">Our Mission</span>
            <h3 className="display mt-5 text-3xl text-ink lg:text-4xl">
              An inclusive space to thrive.
            </h3>
            <p className="mt-5 text-base font-light leading-relaxed text-ink-muted">
              To provide an inclusive and innovative space where fashion
              enthusiasts, designers, and entrepreneurs can thrive. We focus on
              quality craftsmanship, sustainable practices, and accessibility to
              ensure everyone can experience high-end fashion.
            </p>
          </motion.div>
        </div>

        {/* Vision */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease }}
            viewport={{ once: true, margin: "-80px" }}
            className="md:order-2 relative aspect-[4/3] overflow-hidden"
          >
            <Image src="/gal2.jpg" alt="Our vision" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="md:order-1"
          >
            <span className="eyebrow">Our Vision</span>
            <h3 className="display mt-5 text-3xl text-ink lg:text-4xl">
              A global leader in style.
            </h3>
            <p className="mt-5 text-base font-light leading-relaxed text-ink-muted">
              To become a global leader in luxury fashion e-commerce, integrating
              technology with style to offer a seamless and personalized shopping
              experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
