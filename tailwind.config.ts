import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        yubarbell: "url('./public/YuBarbell.png')",
      },
      colors: {
        text: "#f2ede7",
        background: "#232323", // Background
        backgroundAccent: "#0A0A0A",
        primary: "#bc002c", // Primary Button
        accent: "#80736b",
        secondary: "#74001b",
        bgGradient: "#403935", // Background Home Page
        bgGradient2: "#5D544F", // Background Converter
        placeholder: "#6b6b6b", // Placeholder Text
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const textStrokeUtilities = {
        ".text-stroke-black": {
          "-webkit-text-stroke": "1px black",
          "text-stroke": "1px black",
        },
      };
      addUtilities(textStrokeUtilities);
    },
  ],
};
export default config;
