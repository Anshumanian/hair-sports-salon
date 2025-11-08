/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'matte-black': '#1a1a1a',
        'beige': '#d4c4b0',
        'off-white': '#f5f3f0',
      }
    },
  },
  plugins: [],
};
