/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'slide-1': "url('/src/assets/images/home-page/hero-section/slide-1.png')",
      'slide-2': "url('/src/assets/images/home-page/hero-section/slide-2.png')",
      'slide-3': "url('/src/assets/images/home-page/hero-section/slide-1.png')",
    }
  },
  plugins: [],
}

