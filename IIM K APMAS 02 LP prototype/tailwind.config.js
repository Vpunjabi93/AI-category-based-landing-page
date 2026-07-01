/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2E4BE0',
          purple: {
            light: '#F3F0FF',
            dark: '#1e1b4b',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        display: ['Anton', 'Archivo Expanded', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #E752A8, #FF7A59)',
      }
    },
  },
  plugins: [],
}
