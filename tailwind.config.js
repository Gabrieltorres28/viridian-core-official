module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  animation: {
    flicker: 'flicker 1.5s infinite',
    'pulse-slow': 'pulse 4s ease-in-out infinite',
  },
  keyframes: {
    flicker: {
      '0%, 100%': { opacity: '0.1' },
      '50%': { opacity: '0.3' },
    },
  },
}
  },
  plugins: [],
}


