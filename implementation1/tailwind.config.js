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
    extend: {
      rotate: {
        "no-rotate": "0"
      },
      colors: {
        // Add your custom colors here
        'custom-blue': '#166988',
        'custom-white': '#f3f3f3',
        'custom-light-grey': '#dadada',
        'custom-dark-grey': '#716E6E',
        'custom-yellow': '#fdb96e',
        'custom-very-dark-grey': '#313131',
        'custom-very-darker-grey': '#212121',
      }
    }
  }
}
