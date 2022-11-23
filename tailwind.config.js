/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#988eff",

          secondary: "#e8b95c",

          accent: "#bbdd75",

          neutral: "#25222A",

          "base-100": "#FAF9FB",

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
