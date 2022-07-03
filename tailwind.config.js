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

    backgroundImage: {
      "profile--image": "url('/img/img-1.png')",
    },

    keyframes: {
      moveInLeft: {
        "0%": { transform: "translateX(-100px)", opacity: 0 },
        "80%": { transform: "translateX(10px)" },
        "100%": { transform: "translate(0)", opacity: 1 },
      },

      moveInRight: {
        "0%": { transform: "translateX(100px)", opacity: 0 },
        "80%": { transform: "translateX(-10px)" },
        "100%": { transform: "translate(0)", opacity: 1 },
      },
    },

    animation: {
      moveInLeft: "moveInLeft 1s ease-out",
      moveInRight: "moveInRight 1s ease-out",
    },
  },
  plugins: [],
};
