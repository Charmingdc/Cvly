/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courier: ["Courier", "monospace"]
      },
      colors: {
        background: "rbg(var(--background))",
        foreground: "rgb(var(--foreground))",
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))"
        },
        input: {
          DEFAULT: "rgb(var(--input))",
          foreground: "rgb(var(--input-foreground))"
        },
        border: "rgb(var(--border))"
      }
    }
  },
  plugins: []
};
