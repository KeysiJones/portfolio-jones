/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/awesome-background.jpeg')",
        'hero-mobile': "url('/new-hero.jpg')",
        'about-hero': "url('/pergolado-deck-madeira.jpg')",
        'about-hero-mobile': "url('/sala-cimento-queimado.webp')",
        'cimento-queimado-hero': "url('/hero-1.webp')",
        'cimento-queimado-mobile-hero': "url('/banheiro.webp')"
      },
    },
  },
  plugins: [],
}