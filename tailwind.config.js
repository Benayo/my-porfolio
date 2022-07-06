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
        primary: "#15202B",
        secondary: {
          100: "#ffffff",
          200: "rgba(247, 247, 247, 0.75)",
        },
        tertiary: {
          100: "#1DA1F2",
          200: "rgba(29, 161, 242, 0.75)",
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

      moveInBottom: {
        "0%": { transform: "translateY(3rem)", opacity: 0 },
        "100%": { transform: "translate(0)", opacity: 1 },
      },

      ping: {
        "75%, 100%": { transform: "scale(1.1)", opacity: 1 },
      },
    },

    animation: {
      moveInLeft: "moveInLeft 1s ease-out",
      moveInRight: "moveInRight 1s ease-out",
      moveInBottom: "moveInBottom 1.5s ease-in backwards",
      animatePing: "ping 3s cubic-bezier(0, 0, 0.2, 1)",
    },
    
  },
  plugins: [],
};
