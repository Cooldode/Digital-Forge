/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forge: {
          orange: '#E85D2C',
          dark: '#1A1A2E',
          gold: '#F4A261',
          slate: '#2D2D44',
          light: '#E8E8F0',
          dim: '#9C9CB0',
          green: '#2EC4B6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}