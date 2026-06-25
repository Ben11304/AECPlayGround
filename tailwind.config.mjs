/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary brand (indigo-blue — replaces flat blue-600)
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        // Accent (cyan — for callouts, highlights)
        accent: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        // Tier palette
        t1: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          500: '#10b981',
          700: '#047857',
          800: '#065f46',
        },
        t2: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          500: '#f59e0b',
          700: '#b45309',
          800: '#92400e',
        },
        t3: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          500: '#f97316',
          700: '#c2410c',
          800: '#9a3412',
        },
      },
      fontFamily: {
        display: [
          'Space Grotesk',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.18), transparent)',
        'card-glow':
          'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,102,241,0.12), transparent)',
      },
      boxShadow: {
        'card':    '0 1px 3px 0 rgba(0,0,0,0.3), 0 1px 2px -1px rgba(0,0,0,0.3)',
        'card-lg': '0 4px 16px 0 rgba(0,0,0,0.4), 0 2px 4px -1px rgba(0,0,0,0.3)',
        'glow-sm': '0 0 12px rgba(99,102,241,0.25)',
        'glow':    '0 0 24px rgba(99,102,241,0.35)',
      },
      animation: {
        'fade-in':  'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
    },
  },
  plugins: [],
};
