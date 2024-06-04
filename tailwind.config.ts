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

      },
      colors: {
        'primary': '#7598ED',
        // 'primary': '#eab308',
      },
      screens: {
        'xs': '512px',
        '3xl': '1792px',
        '4xl': '2048px',
      }
    },
  },
  plugins: [],
};
export default config;
