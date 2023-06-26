module.exports = {
  content: [
    '/src/athemes.json'
  ],
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'style-1': '#FF0000',
        'style-2': '#0000FF',
      },
    },
  },
  safelist: ["./src/themes.js",
  ],
  variants: {},
  plugins: [],
  important: true,
}
