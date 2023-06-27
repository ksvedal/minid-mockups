module.exports = {
  content: [
    '/src/athemes.json'
  ],
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["./src/themes.js",
  ],
  variants: {},
  plugins: [],
  important: true,
}
