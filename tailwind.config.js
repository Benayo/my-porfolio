/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
        hero: ["Helvetica"],
        logo: ["Playfair Display SC"],
      },

      fontSize: {
        logo: "3rem",
        list: "0.875rem",
      },

      colors: {
        primary: "rgba(32, 30, 30, 1)",
        secondary: {
          100: "rgba(32, 30, 30, 0.75)",
          200: "#f7f7f7",
        },
      },
    },
  },
  plugins: [],
};
