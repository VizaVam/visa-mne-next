/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "dm": { max: "768px" },
        "mdd": { max: "640px" }, // Matches devices below 640px
        "mddd": { max: "600px" },
        "ht": { min: "1500px" },
        "dr": { max: "400px" },
        "br": { max: "1280px" },
        "1024m": { max: "1024px" },
        "1400m": {max: "1400px"},
        "xl": {min: "1280px"},
        "2xl": {min: "1840px"},
      },
    },
  },
  plugins: [],
};
