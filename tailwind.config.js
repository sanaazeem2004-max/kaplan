/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#05070c', 900: '#080b14', 800: '#0b1020' },
        deep: '#0d1830',
        cream: { DEFAULT: '#f6f2ea', 200: '#ece5d8' },
        bronze: '#8a5f14',
        slate: '#4a5468',
        navy: { DEFAULT: '#0f1a30', 700: '#13213d', 600: '#1a2b4d', line: '#22345a' },
        gold: { DEFAULT: '#c8922e', light: '#e0b05a', dark: '#a8761f' },
        mist: '#a9b3c7',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1240px' },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: { floaty: 'floaty 6s ease-in-out infinite' },
    },
  },
  plugins: [],
};
