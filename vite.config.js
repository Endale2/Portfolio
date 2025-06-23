/** @type {import('tailwindcss').Config} */
import tailwindcss from '@tailwindcss/vite'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add 'Fira Code' as a new font family
        code: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [tailwindcss(),],
};
