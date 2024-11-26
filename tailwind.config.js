/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      maxHeight: {
        '809': '300rem', 
      },
      width: {
        '55': '110rem',
        '30R': '90rem',
        '60': '25rem',
        '35R': '35rem',
        '50': '405rem',
        '569': '8rem',
      },
      height: {
        '50': '10rem',
        '40': '50rem',
        'c': '35cm',
        '569': '8rem',
      },
      margin: {
        '30': '30rem',
        '37': '37rem',
        '3R': '3rem',
        '5R': '5rem',
        'p': '-15rem',
        'p1': '-18rem',
        'p2': '-53rem',
        'p3': '-8rem',
        'p11': '-11rem',
        'p4': '-6rem',
        'm': '-23rem',
      },
    },
  },
  plugins: [],
}
