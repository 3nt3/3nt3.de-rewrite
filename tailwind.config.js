/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Rubik', 'sans-serif'],
        serif: ['EB Garamond', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'display-gradient': 'linear-gradient(267deg, #A167EA 37.5%, #C285FF 60.44%, #3F43A0 97%)'
      }
    },
    plugins: [],
  }
}

