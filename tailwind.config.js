/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      monkred: "#FF0961",
      monkdeepred: "#DA0001",
      monkwhite: "#FFFFFF",
      monkblack: "#0D0D0D"
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

