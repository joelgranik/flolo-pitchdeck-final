/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#2196F3',
        accent: '#8D6E63',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-opensans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 