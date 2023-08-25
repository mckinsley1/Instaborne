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
      colors: {
            transparent: 'transparent',
            'white': '#ffffff',
            'primary': '#02B5A1',
            'secondary': '#03252F',
          },
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/forms'),require('@tailwindcss/aspect-ratio')
  ],
}
