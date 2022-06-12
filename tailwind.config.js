module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'color-bg': 'hsl(0,0%,97%)',
        'color-h': '#0e2b5c',
        'color-p': '#71829f',
        'color-other': 'hsl(43,100%,49%)'
      
    },
      backgroundPosition: {
      bottom: 'bottom',
      'top-center': 'top center',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    }
    },
    fontFamily: {
      'sans': ['Oswald', 'sans-serif']
    },
    screens: {
      'xsm': '520px',

      'sm': '768px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 768px) { ... }

      'lg': '1224px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1480px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1636px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}