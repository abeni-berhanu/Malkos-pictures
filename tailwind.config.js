/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        malkos: {
          orange: "#FF5C00",
          dark: "#050505",
        },
      },
    },
  },
  plugins: [],
};
