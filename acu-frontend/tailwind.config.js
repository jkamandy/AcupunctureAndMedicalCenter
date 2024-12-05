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
      keyframes: {
        "pulse-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        "pulse-down": "pulse-down 1.5s infinite ease-in-out",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      perspective: {
        DEFAULT: "1000px",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
    },
  },
  plugins: [
    
  ],
}





