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
        'display-gradient': 'linear-gradient(267deg, #A167EA 37.5%, #C285FF 60.44%, #3F43A0 97%)',
        'display-gradient-lighter': 'linear-gradient(267deg, rgba(192,159,255,1) 0%, rgba(194,133,255,1) 29%, rgba(106,110,198,1) 60%); '
      }
    },
    plugins: [],
  }
}

