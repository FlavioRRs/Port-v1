/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lgmin: { min: "1024px" },

      lgmax: { max: "1023px" },

      mdmin: { min: "768px" },

      mdmax: { max: "767px" },

      smmin: { min: "501px" },

      smmax: { max: "500px" },

      tnmin: { min: "391px" },

      tnmax: { max: "390px" },
    },
    fontFamily: {
      Astloch: "Astloch, serif",
      Roboto: "Roboto",
    },
    extend: {
      backgroundImage: {
        leaves: "url('./assets/backgroundHome.jpg')",
      },
      keyframes: {
        swing: {
          "0%": { transform: "translateY(-1vh)" },
          "50%": { transform: "translateY(1vh)" },
          "100%": { transform: "translateY(-1vh)" },
        },
        appear: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        swing: "swing 3s ease infinite",
        appear: "appear 1.5s linear",
      },
    },
  },
  plugins: [],
};
