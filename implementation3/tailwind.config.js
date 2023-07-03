module.exports = {
  content: [
    '/src/athemes.json'
  ],
  darkMode: 'class',
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {},
  plugins: [],
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
        'custom-blue': "#91BBD9",
        'custom-white': "#F0F0F0",
        'custom-black': "#1F1F1F",
        'custom-darkgrey': "#878787",
        'custom-lightgrey': "#BFBFBF",
        'custom-error': "#FF8744",
        
        //DM
        'custom-yellow': "#FFF3C8",

      },
    }
  }
}
