/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "open-menu": {
          "0%": { trasform: "scaleY(0)" },
          "80%": { trasform: "scaleY(1.2)" },
          "100%": { trasform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forward",
      },
    },
  },
  plugins: [],
};
