/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00a0b0',    // Warna biru Ambivert
        secondary: '#4caf50',  // Warna hijau Ambivert
        accent: '#83e4e2',     // Warna aksen
      },
    },
  },
  plugins: [],
}