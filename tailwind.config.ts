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
  				'50': 'rgb(var(--brand-50) / <alpha-value>)',
  				'100': 'rgb(var(--brand-100) / <alpha-value>)',
  				'200': 'rgb(var(--brand-200) / <alpha-value>)',
  				'300': 'rgb(var(--brand-300) / <alpha-value>)',
  				'400': 'rgb(var(--brand-400) / <alpha-value>)',
  				'500': 'rgb(var(--brand-500) / <alpha-value>)',
  				'600': 'rgb(var(--brand-600) / <alpha-value>)',
  				'700': 'rgb(var(--brand-700) / <alpha-value>)',
  				'800': 'rgb(var(--brand-800) / <alpha-value>)',
  				'900': 'rgb(var(--brand-900) / <alpha-value>)'
  			},
  			accent: {
  				emerald: 'rgb(var(--accent-emerald) / <alpha-value>)',
  				violet: 'rgb(var(--accent-violet) / <alpha-value>)',
  				rose: 'rgb(var(--accent-rose) / <alpha-value>)',
  				amber: 'rgb(var(--accent-amber) / <alpha-value>)',
  				cyan: 'rgb(var(--accent-cyan) / <alpha-value>)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			xl: '1rem',
  			'2xl': '1.25rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			card: '0 10px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.06)'
  		},
  		backgroundImage: {
  			mesh: 'radial-gradient(50% 50% at 30% 20%, rgba(13,148,136,0.25) 0%, rgba(13,148,136,0) 60%), radial-gradient(40% 40% at 80% 0%, rgba(56,189,248,0.2) 0%, rgba(56,189,248,0) 60%)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}
export default config
