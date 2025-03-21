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
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0%", transform: "translateY(10px)" },
          "100%": { opacity: "100%", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
