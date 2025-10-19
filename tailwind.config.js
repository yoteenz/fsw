/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'futura': ['Futura PT Medium', 'Futura', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
