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
        background: "#232323",
        primary: "#bc002c",
        accent: "#80736b",
        secondary: "#74001b",
      },
    },
  },
  plugins: [],
};
export default config;
