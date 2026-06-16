import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Luxury / editorial palette
        ink: {
          DEFAULT: "#16130f", // near-black charcoal, warm
          soft: "#2b2722",
          muted: "#6b655c",
        },
        ivory: {
          DEFAULT: "#f7f3ec", // warm off-white page background
          soft: "#fbf9f4",
          deep: "#ece5d8",
        },
        brass: {
          DEFAULT: "#b08d4f", // muted gold accent
          soft: "#c8a86d",
          deep: "#8c6d38",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.22em",
        wide: "0.08em",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
