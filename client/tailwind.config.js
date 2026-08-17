/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f4c81', // Classic Premium Dark Blue
          dark: '#0a3357',
        },
        secondary: {
          DEFAULT: '#3a86c8', // Aesthetic Medium-Light Blue
          dark: '#2a6ea8',
        },
        accent: {
          DEFAULT: '#e6f0fa', // Icy Accent Blue
          dark: '#c8def4',
        },
        background: {
          DEFAULT: '#f5f9fc', // Clean light blue-gray background
          dark: '#eaf2f8',
        },
        charcoal: '#1b2a4a', // Navy Blue charcoal text
        'surface-container-low': '#ffffff',
        'surface-container': '#f0f6fc',
        'surface-variant': '#e1edf8',
        'outline-variant': '#b5d0ea',
      },
      fontFamily: {
        script: ['"Hipster Script Pro"', '"Great Vibes"', 'Pacifico', 'cursive'],
        sans: ['"Breadley Sans"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 4px 20px rgba(45, 45, 45, 0.04)',
        'card-hover': '0px 12px 32px rgba(45, 45, 45, 0.08)',
      }
    },
  },
  plugins: [],
}
