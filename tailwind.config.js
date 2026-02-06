/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Times New Roman', 'serif'],
        sans: ['Instrument Sans', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
