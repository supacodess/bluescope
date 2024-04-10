import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-texture": "url('/images/background.png')",
      },
      fontFamily: {
        inriaSerif: ["var(--font-InriaSerif)"],
      }
    },
  },
  plugins: [],
};
export default config;
