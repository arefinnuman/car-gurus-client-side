/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E14D2A",

          secondary: "#3E6D9C",

          accent: "#bbdd75",

          neutral: "#282C39",

          "base-100": "#E0DDEE",

          info: "#2F9EDA",

          success: "#2DB99A",

          warning: "#F1B40E",

          error: "#E6665B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
