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
    },
  },
  plugins: [],
}

