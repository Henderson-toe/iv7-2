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
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        iv7: {
          black: '#000000',
          darkest: '#0a0a0a',
          dark: '#111111',
          card: '#161616',
          border: '#222222',
          gray: {
            dark: '#333333',
            mid: '#555555',
            DEFAULT: '#888888',
            light: '#aaaaaa',
            lighter: '#cccccc',
          },
          white: '#ffffff',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'line-grow': 'lineGrow 1.2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
