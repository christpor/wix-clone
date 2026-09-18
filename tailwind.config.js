/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wix: {
          blue: '#116DFF',
          blueHover: '#0E5CD8',
          dark: '#000000',
          slate: '#0F1216',
          sand: '#EDEBE8',
          card: '#16191E',
          cardBorder: 'rgba(255, 255, 255, 0.1)',
          muted: '#8F939A',
          highlight: '#7843E6'
        }
      },
      fontFamily: {
        sans: ['Wix Madefor Display', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Wix Madefor Text', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'pill': '9999px',
        '2xl': '24px',
        '3xl': '32px',
      }
    },
  },
  plugins: [],
};
