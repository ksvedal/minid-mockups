module.exports = {
  content: [
    '/src/athemes.json'
  ],
  darkMode: 'class',
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {},
  plugins: [require('tailwindcss-patterns')],
  important: true,
  theme: {
    fontFamily: {
      'custom-font': 'Titillium Web',
    },
    extend: {
      rotate: {
        "no-rotate": "0"
      },
      colors: {
        // Add your custom colors here
        'custom-light-grey': '#dadada',
        'custom-dark-grey': '#716E6E',
        'custom-very-dark-grey': '#313131',
        'custom-very-darker-grey': '#212121',

        //LM
        'custom-bg': "#EDE6E3",
        'custom-bg-darker': "#7B6966",
        'custom-blue': "#91BBD9",
        'custom-darker-blue': "#6D9EBA",
        'custom-white': "#F0F0F0",
        'custom-black': "#1F1F1F",
        'custom-dark-grey': "#878787",
        'custom-light-grey': "#BFBFBF",
        'custom-error': "#FF8744",
        
        //DM
        'custom-yellow': "#FFF3C8",
        'custom-darker-yellow': "#C7B67B",

      },
    }
  }
}
