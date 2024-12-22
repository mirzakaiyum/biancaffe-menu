import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        biancaffe: {
          "primary": "#9a835a",
          "secondary": "#c8bc6a",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#0f1d2a",
          "base-content": "#f6f6f6",
        }
      }
    ],
  },
  };
export default config;
