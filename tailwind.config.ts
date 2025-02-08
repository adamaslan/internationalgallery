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
    },
  },
}

export default config;