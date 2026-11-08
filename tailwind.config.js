/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Trip Sans VF', 'Trip Sans', 'Inter', 'Arial', 'sans-serif'],
        sans: ['Trip Sans VF', 'Trip Sans', 'Inter', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      fontSize: {
        'xs': ['13.33px', { lineHeight: '1.4' }],
        'sm': ['14px', { lineHeight: '1.45' }],
        'md': ['16px', { lineHeight: '1.5' }],
        'base': ['16px', { lineHeight: '1.5' }],
        'lg': ['20px', { lineHeight: '1.4' }],
        'xl': ['28px', { lineHeight: '1.25' }],
        '2xl': ['32px', { lineHeight: '1.2' }],
        '3xl': ['54px', { lineHeight: '1.1' }],
      },
      colors: {
        brand: {
          primary: '#002b11', // Main dark forest green
          secondary: '#38443a', // Refined slate green
          tertiary: '#888484', // Neutral gray
          green: '#00aa6c', // Tripadvisor green
          mint: '#4fa882', // Village Pantry sign mint
          gold: '#c59b27', // Warm artisanal gold
          cream: '#f9f8f5', // Warm pantry cream
        },
        surface: {
          strong: '#f7f7f7',
          base: '#000000',
          muted: '#ffffff',
          raised: '#b9b7b7',
        },
        text: {
          primary: '#002b11',
          secondary: '#38443a',
          tertiary: '#888484',
        }
      },
      spacing: {
        '1': '4px',
        '2': '4.5px',
        '3': '5px',
        '4': '6px',
        '5': '6.5px',
        '6': '7px',
        '7': '8px',
        '8': '9px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
      },
      borderRadius: {
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '20px',
        'xl': '28px',
        '2xl': '42px',
        'step7': '50px',
        'step8': '1000px',
      },
      transitionDuration: {
        'instant': '100ms',
        'fast': '200ms',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 43, 17, 0.06), 0 1px 2px rgba(0, 43, 17, 0.04)',
        'card': '0 4px 12px rgba(0, 43, 17, 0.08)',
        'elevated': '0 12px 32px rgba(0, 43, 17, 0.12)',
        'modal': '0 20px 48px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

