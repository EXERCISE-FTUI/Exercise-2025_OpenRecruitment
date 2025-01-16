import { title } from "process";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        InterExer: ["Inter", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white_1: "#FAFAFA",
        white_2: "#F5F5F5",
        gray_1: "#D9D9D9",
        gray_2: "#BFC8CE",
        gray_3: "#889DA8",
        blue_1: "#2B7696",
        blue_2: "#1C465C",
        blue_3: "#15394A",
        blue_4: "#0D2734",
        purple_1: "#E2E0E8",
        purple_2: "#9D98B3",
        purple_3: "#645B87",
        purple_4: "#55457E",
        purple_5: "#383F96",
        green_yellow: "#D9E05A",
      },
    },
  },
  plugins: [],
} satisfies Config;
