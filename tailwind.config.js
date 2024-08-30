/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'accent-600': '-7px -7px 20px 0 rgba(255, 255, 255, 0.2), 7px 7px 20px 0 rgba(95, 145, 31, 0.6)',
        'inset-accent-600': 'inset -7px -7px 20px 0 rgba(95, 145, 31, 0.3), inset 7px 7px 20px 0 rgba(0, 0, 0, 0.2)',
      },
      colors:{
        accent: "hsl(var(--accent))",
        foireground: "hsl(var(--foireground))",
      }
    },
  },
  plugins: [],
}

