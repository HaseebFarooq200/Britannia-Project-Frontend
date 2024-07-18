/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Public Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        "homepageimage": "url('/src/assets/images/HomePageBackgroundImage.svg')",
      },
    },
  },
  plugins: [],
}

