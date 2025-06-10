/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Pure B/W with “dynamic” accent
        black: '#000000',
        white: '#ffffff',
        accent: '#444444',        // a mid-gray for buttons/hover
        'accent-light': '#666666' // lighter hover state
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
