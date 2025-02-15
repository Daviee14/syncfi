/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shrink: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.8)' },
        },
      },
      animation: {
        shrink: 'shrink 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
