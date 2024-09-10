/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-inset": "inset 0px 4.96px 12.4px 2.48px rgba(0, 0, 0, 0.25) ",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
