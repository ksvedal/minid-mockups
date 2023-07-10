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
      'sans': 'Arial',
    },
    extend: {
      rotate: {
        "no-rotate": "0"
      },
      colors: {
        // Add your custom colors here
        'custom-purple': '#785190',
        'custom-white': '#fff8e7',
        'custom-light-grey': '#F5F5F5',
        'custom-dark-grey': '#716E6E',
        'custom-yellow': '#e6c2ff',
        'custom-very-dark-grey': '#313131',
        'custom-very-darker-grey': '#212121',
        'custom-light-purple': 'rgba(120,81,144,0.5)',
        'custom-beige-background': '#FFFBF2',
        'custom-red': '#A63C4F',
        'custom-light-red': '#c17580',
        'custom-neon-red': '#ff8989',
        'custom-golden': '#ffc541',
      }
    }
  }
};