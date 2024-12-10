/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './plugins/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  // Use Roboto for the default sans-serif font
        custom: ['Open Sans'],  // Use Roboto for the default sans-serif font
        bang: ['Anek Bangla'],  // Use Roboto for the default sans-serif font
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
