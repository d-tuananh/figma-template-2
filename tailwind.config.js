/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
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
      },
      boxShadow: {
        "ct-orange": "0px 8px 16px 0px rgba(229, 119, 9, 0.35)",
        "ct-green": "0px 8px 16px 0px rgba(33, 226, 118, 0.35)",
      },
    },
  },
  plugins: [],
}
// ct : custom
