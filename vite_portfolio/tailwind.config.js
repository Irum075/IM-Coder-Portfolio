/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", // Include your HTML files
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '380px',  // Custom breakpoint for extremely small screens
        'lxs':'100px',
    },

    extend: {

      animation: {
        meteor: "meteor 5s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
       
      },

    

      colors: {
        'deep-purple': '#6A0D91',
        'background-color': '#111827',
         'text-color': '#DF00FF',
        // 'text-color': '#FFFF00',
               
        'accent-color': '#7F3FBF',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

