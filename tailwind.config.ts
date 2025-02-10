import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        'retro-pink': '#ff69f7',
        'retro-blue': '#00a2ff',
        'retro-green': '#00ff00',
        'retro-yellow': '#fff200',
      },
      animation: {
        'crt-flicker': 'crt-flicker 0.15s infinite',
      },
      keyframes: {
        'crt-flicker': {
          '0%': { filter: 'brightness(1) contrast(1)' },
          '50%': { filter: 'brightness(1.02) contrast(1.02)' },
          '100%': { filter: 'brightness(1) contrast(1)' },
        },
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,...')", // Replace with actual noise pattern SVG data
      },
      clipPath: {
        'pixel-corner': 'polygon(0 0, 100% 0, 100% 25%, 75% 100%, 0 100%)',
      },
    },
  },
  plugins: [],
}

export default config;
