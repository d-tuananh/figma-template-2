/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: ".5rem",
          sm: "1rem",
          lg: "1.5rem",
          xl: "2rem",
          "2xl": "2.5rem",
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        Allura: ["Allura", "cursive"],
      },
      colors: {
        main: "#252525",
      },
      backgroundImage: {
        "linear-Green-Yellow":
          "linear-gradient(90deg, #16A085 0%, #F4D03F 100%)",
        "linear-Yellow-Green":
          "linear-gradient(90deg, #F4D03F 0%, #16A085 100%)",
        "linear-orange": "linear-gradient(180deg, #FFB469 0%, #E57709 100%)",
        "linear-green": "linear-gradient(135deg, #3EED8B 0%, #0A9949 100%)",
        "linear-layout":
          "linear-gradient(90deg, rgba(22, 160, 133, 0.50) 0%, rgba(244, 208, 63, 0.50) 100%)",
      },
      boxShadow: {
        "ct-orange": "0px 8px 16px 0px rgba(229, 119, 9, 0.35)",
        "ct-green": "0px 8px 16px 0px rgba(33, 226, 118, 0.35)",
        "ct-green-item": "0px 8px 16px 0px rgba(10, 153, 73, 0.30)",
      },
      spacing: {
        "half-15rem": "calc(50% + 15rem)",
        "half-11rem": "calc(50% + 11rem)",
      },
    },
  },
  plugins: [],
}
// ct : custom
