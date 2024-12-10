/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    screens: {
      "3xs": "330px",
      "2xs": "400px",
      xs: "605px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "custom-lg": "992px",
      // => @media (min-width: 992px) { ... }

      lg: "1024px",

      "2lg": "1200px",

      xl: "1300px",

      "2xl": "1400px",

      "3xl": "1500px",

      "4xl": "1600px",

      "5xl": "1700px",

      "6xl": "1800px",

      "7xl": "1900px",

      "8xl": "2000px",
    },
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





