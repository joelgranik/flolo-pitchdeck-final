/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        secondary: {
          DEFAULT: '#2196F3',
          light: '#64B5F6',
          dark: '#1976D2',
        },
        accent: {
          DEFAULT: '#8D6E63',
          light: '#A1887F',
          dark: '#6D4C41',
        },
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
        info: '#2196F3',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-opensans)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        opensans: ['var(--font-opensans)', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 6px 2px rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dots-pattern': 'radial-gradient(#4CAF50 1px, transparent 1px)',
        'lines-pattern': 'linear-gradient(rgba(76, 175, 80, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(76, 175, 80, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots-sm': '16px 16px',
        'dots-md': '24px 24px',
        'lines-sm': '20px 20px',
        'lines-md': '40px 40px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#212121',
            a: {
              color: '#4CAF50',
              '&:hover': {
                color: '#388E3C',
              },
            },
            h1: {
              color: '#212121',
              fontWeight: '700',
            },
            h2: {
              color: '#212121',
              fontWeight: '600',
            },
            h3: {
              color: '#212121',
              fontWeight: '600',
            },
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}