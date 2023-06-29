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
        'custom-blue': '#0462BA',
        'custom-light-grey': '#F5F5F5',
        'custom-dark-grey': '#716E6E',
        'custom-yellow': '#fdb96e',
        'custom-very-dark-grey': '#313131',
        'custom-very-darker-grey': '#212121',
      }
    }
  }
}
