import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  'rgb(var(--brand-50) / <alpha-value>)',
          100: 'rgb(var(--brand-100) / <alpha-value>)',
          200: 'rgb(var(--brand-200) / <alpha-value>)',
          300: 'rgb(var(--brand-300) / <alpha-value>)',
          400: 'rgb(var(--brand-400) / <alpha-value>)',
          500: 'rgb(var(--brand-500) / <alpha-value>)',
          600: 'rgb(var(--brand-600) / <alpha-value>)',
          700: 'rgb(var(--brand-700) / <alpha-value>)',
          800: 'rgb(var(--brand-800) / <alpha-value>)',
          900: 'rgb(var(--brand-900) / <alpha-value>)'
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem'
      },
      boxShadow: {
        'card': '0 10px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.06)'
      },
      backgroundImage: {
        'mesh': 'radial-gradient(50% 50% at 30% 20%, rgba(13,148,136,0.25) 0%, rgba(13,148,136,0) 60%), radial-gradient(40% 40% at 80% 0%, rgba(56,189,248,0.2) 0%, rgba(56,189,248,0) 60%)'
      }
    }
  },
  plugins: []
}
export default config
