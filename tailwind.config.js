/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "btn-xs": "0.125rem",
        "btn-sm": "0.25rem",
        "btn-md": "0.375rem",
        "btn-lg": "0.5rem",
        "btn-xl": "0.75rem",
      },
      boxShadow: {
        "accent-600":
          "-7px -7px 20px 0 rgba(255, 255, 255, 0.2), 7px 7px 20px 0 rgba(95, 145, 31, 0.6)",
        "inset-accent-600":
          "inset -7px -7px 20px 0 rgba(95, 145, 31, 0.3), inset 7px 7px 20px 0 rgba(0, 0, 0, 0.2)",
        "opacity30-black": "5px 5px 10px rgba(0, 0, 0, 0.3)",
        "opacity25-black": "0px 4px 4x rgba(0, 0, 0, 0.25)",
      },
      colors: {
        accent600: "hsl(var(--accent-600))",
        accent700: "hsl(var(--accent-700))",
        accent800: "hsl(var(--accent-800))",
        accent1000: "hsl(var(--accent-1000))",
        accent: "hsl(var(--accent))",
        foireground: "hsl(var(--foireground))",
        textColor: "hsl(var(--text-color))",
        gradient:"linear-gradient(to top, var(--accent600), var(--accent800))"
      },
      gradientColorStopPositions: {
        40: "40%",
      },
      width: {
        33: "8.5rem",
      },
      maxWidth: {
        33: "8.5rem",
      },
      padding: {
        "10px": "0.5rem",
      },
      backgroundImage: {
        "gradient-to-t-accent":
          "linear-gradient(to top, var(--accent600), var(--accent800))",
        "gradient-to-t-accent-hover":
          "linear-gradient(to top, var(--accent800), var(--accent600))",
      },
      height: {
        30: "1.875rem",
        39: "2.4375rem",
      },
      borderColor: {
        'gradient-accent': 'linear-gradient(to top, var(--accent600), var(--accent800))', // Puedes usar esto para referencia visual, pero no funcionará como un color sólido
      },
    },
  },
  plugins: [],
};
