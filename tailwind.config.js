/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
      },
      colors: {
        light: "#f2f2f2",
        dark: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
