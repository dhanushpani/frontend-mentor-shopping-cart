/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure the paths match your React project structure
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      red: "hsl(14, 86%, 42%)",
      maroon: "#b02c2c",
      green: "hsl(159, 69%, 38%)",
      rose: {
        50: "hsl(20, 50%, 98%)",
        100: "hsl(13, 31%, 94%)",
        300: "hsl(14, 25%, 72%)",
        400: "hsl(7, 20%, 60%)",
        500: "hsl(12, 20%, 44%)",
        900: "hsl(14, 65%, 9%)",
      },
      white: "#fff",
    },
    fontFamily: {
      custom: ["Light"],
    },

    extend: {},
  },
  plugins: [],
};
