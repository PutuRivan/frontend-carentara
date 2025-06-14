/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pure B/W with “dynamic” accent
        black: "#000000",
        white: "#ffffff",
        accent: "#444444", // a mid-gray for buttons/hover
        "accent-light": "#666666", // lighter hover state
      },
    },
    keyframes: {
      "marquee-x": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
      "marquee-y": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-100% - var(--gap)))" },
      },
    },
    animation: {
      "marquee-horizontal": "marquee-x var(--duration) infinite linear",
      "marquee-vertical": "marquee-y var(--duration) linear infinite",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
