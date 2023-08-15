


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      noice: "./src/images/noice.png",
      // peacock:'/src/images/peacock.png',
    },
    extend: {
      colors: {
        gre: "#32533c",
        tex: "#FEEABF",
        or: "#ff9620",
      },
      fontFamily: {
        inter: ["inter", "sanssarif"],
        pd: ["Playfair Display", "serif"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
