/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Dark Matter palette
        dm: {
          bg:        '#000005',
          surface:   '#07021a',
          card:      '#0d0530',
          border:    '#1a0f4a',
          'border-bright': '#2d1a7a',
          cyan:      '#00aaff',
          'cyan-dim':'#0066cc',
          purple:    '#cc44ff',
          'purple-dim': '#7722cc',
          text:      '#e8e0ff',
          'text-dim':'#8878b8',
          'text-muted': '#4a3f78',
          emerald:   '#00ff9d',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-very-slow': 'spin-very-slow 20s linear infinite',
        'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
        'blink': 'blink 1.1s step-start infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'spin-very-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
