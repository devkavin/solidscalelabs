import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
        screens: { "2xl": "1200px" },
      },
      colors: {
        base: {
          950: "#050712",
          900: "#070A16",
          850: "#0B1020",
        },
        line: "rgba(255,255,255,.10)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,189,248,.25), 0 24px 80px rgba(0,0,0,.55)",
        soft: "0 24px 70px rgba(0,0,0,.55)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.6rem",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
