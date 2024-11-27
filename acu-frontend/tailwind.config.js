/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}





