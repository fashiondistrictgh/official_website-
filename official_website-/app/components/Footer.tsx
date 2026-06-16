import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Collection", href: "/#collection" },
  { label: "Get the App", href: "/#download-app" },
  { label: "Contact", href: "/contact-us" },
];

const socials = [
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Twitter", href: "#", Icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" aria-label="The Fashion District — home">
              <Image width={120} height={60} src="/tfdlogo.png" alt="The Fashion District" className="h-14 w-auto" />
            </Link>
            <p className="mt-6 text-sm font-light leading-relaxed text-ivory/60">
              Your gateway to the latest trends, timeless designs, and the vibrant
              culture of fashion.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-editorial text-brass-soft">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-editorial text-brass-soft">
              Follow Us
            </h3>
            <div className="mt-6 flex gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-ivory/15 text-ivory/70 transition-all duration-300 hover:border-brass hover:text-brass"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/10 pt-8 text-center text-xs tracking-wide text-ivory/40">
          © {new Date().getFullYear()} TFD — The Fashion District. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
