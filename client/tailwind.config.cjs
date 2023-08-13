/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#2B2B2B',
        secbackground: '#3B3B3B',
        label: '#858584',
        light: '#fff',
        action: '#A259FF',
        caption: '#cccc'
      },
      fontFamily: {
        spaceMono: ["space Mono"]
      },
      screens: {
        "mobile": "320px",
        'tablet': '768px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1025px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1279px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        'magic-section': "url('/images/image/magic.svg')",
        'tab-magic': "url('/images/image/tab-magic.svg')",
        "mob-magic": "url('/images/image/mobmagic.svg')"
      }


    },
  },
  plugins: [],
}
