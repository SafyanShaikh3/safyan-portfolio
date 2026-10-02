/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#07080B',
          900: '#0A0B0F',
          850: '#0D0F15',
          800: '#12141B',
          700: '#1A1D26',
          600: '#242833',
        },
        ink: {
          100: '#F4F5F7',
          300: '#C4C7CF',
          500: '#8B909C',
          700: '#5A5F6B',
        },
        signal: {
          blue: '#5B8CFF',
          violet: '#A78BFA',
          cyan: '#22D3EE',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'signal-gradient': 'linear-gradient(135deg, #5B8CFF 0%, #A78BFA 55%, #22D3EE 100%)',
        'signal-gradient-soft': 'linear-gradient(135deg, rgba(91,140,255,0.15) 0%, rgba(167,139,250,0.15) 55%, rgba(34,211,238,0.15) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(91,140,255,0.35)',
        'glow-violet': '0 0 40px -10px rgba(167,139,250,0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.25)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(30px,-20px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite alternate',
        gradientShift: 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
