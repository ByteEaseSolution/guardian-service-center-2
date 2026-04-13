import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary accent — pastel sky blue, drawn from the logo's #008BD2
          yellow: "#8ECAE6",
          yellowDark: "#4A9FB8",
          // Soft dark navy — replaces pure black for a pastel mood
          black: "#2C3E50",
          gray: "#9FB3C8",
          // Supporting pastels
          cream: "#FBF7EE",
          peach: "#FBD5C2",
          sage: "#D4EBD6",
          blush: "#F9D9E0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
