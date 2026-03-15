/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        souls: {
          dark: '#0a0908',
          darker: '#050504',
          gold: '#c9a227',
          ember: '#d4a017',
          blood: '#8b0000',
          ash: '#2d2d2d',
          bone: '#d4c5a9',
          fog: '#1a1a1a',
        }
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'ember': 'ember 2s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ember: {
          '0%, 100%': { boxShadow: '0 0 20px #c9a227, 0 0 40px #d4a017' },
          '50%': { boxShadow: '0 0 30px #c9a227, 0 0 60px #d4a017' },
        }
      }
    },
  },
  plugins: [],
}

