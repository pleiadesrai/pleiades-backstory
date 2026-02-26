import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-purple': '#6A05A6',
        'sky-blue': '#00BFFF',
        'stardust-white': '#F8F0E3',
        'night-sky-black': '#333333',
        'golden-star': '#FFD700',
        'nebula-green': '#00FF00',
        'cosmic-pink': '#FF69B4',
        'violet-burst': '#8A2BE2',
        'solar-orange': '#FFA500',
        'lunar-blue': '#ADD8E6',
        'sunset-red': '#FF4500',
        'mint-planet': '#98FB98',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
