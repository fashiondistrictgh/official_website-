import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const details = [
  { Icon: MapPin, label: "Our Location", value: "East Legon, Accra, Ghana." },
  { Icon: Phone, label: "Phone Number", value: "(+233) 54 142 5799" },
  { Icon: Mail, label: "Email Address", value: "fashiondistrict@gmail.com" },
];

const inputClass =
  "w-full border border-ink/15 bg-transparent px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/70 outline-none transition-colors focus:border-brass";

export default function ContactUs() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
        {/* Left — intro + details */}
        <div className="max-w-lg">
          <span className="eyebrow">Contact Us</span>
          <h1 className="display mt-5 text-4xl text-ink lg:text-5xl">
            Get in touch with us.
          </h1>
          <p className="mt-6 text-base font-light leading-relaxed text-ink-muted">
            Have questions about The Fashion District, or interested in becoming a
            vendor? We would love to hear from you.
          </p>

          <div className="mt-12 space-y-8">
            {details.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink/15 text-brass">
                  <Icon size={20} />
                </span>
                <div>
                  <h2 className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                    {label}
                  </h2>
                  <p className="mt-1 text-base text-ink">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-ivory-soft p-8 shadow-[0_20px_60px_-20px_rgba(22,19,15,0.18)] sm:p-12">
          <form className="space-y-5">
            <input type="text" placeholder="Your Name" aria-label="Your Name" className={inputClass} required />
            <input type="email" placeholder="Your Email" aria-label="Your Email" className={inputClass} required />
            <input type="tel" placeholder="Your Phone" aria-label="Your Phone" className={inputClass} />
            <textarea placeholder="Your Message" aria-label="Your Message" rows={5} className={`${inputClass} resize-none`} required />
            <button type="submit" className="btn-solid w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
