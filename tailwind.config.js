/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "media"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["custom-shape-divider-top", "shape-fill"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        chewy: ["Chewy", "sans-serif"]
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))"
        },
        input: {
          DEFAULT: "rgb(var(--input))",
          foreground: "rgb(var(--input-foreground))"
        },
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))"
        },
        border: "rgb(var(--border))"
      }
    }
  },
  plugins: []
};
