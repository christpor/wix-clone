/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wix: {
          blue: '#116DFF',
          blueHover: '#0E5CD8',
          dark: '#0F172A',
          charcoal: '#1E293B',
          muted: '#64748B',
          lightBg: '#F8FAFC',
          mint: '#D8F5E9',
          border: 'rgba(15, 23, 42, 0.08)',
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
