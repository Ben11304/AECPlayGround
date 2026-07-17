/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary brand — prussian blue (AEC blueprint heritage)
        primary: {
          50:  '#f0f5fb',
          100: '#d9e8f5',
          200: '#b4cfe9',
          300: '#85b3da',
          400: '#5596ca',
          500: '#357bb8',
          600: '#255f9b',
          700: '#1a4a7f',  // prussian blue — main accent
          800: '#123360',
          900: '#0b2042',
          950: '#060f20',
        },
        // Warm paper tones
        paper: '#faf9f7',       // barely warm off-white
        parchment: '#f3f1eb',   // section alternates (paper-2)
        // Editorial ink
        ink: '#131418',         // near-black
        muted: '#5a5c63',       // secondary text
        // Warm rule / border
        rule: '#dbd9d4',
        // Muted teal (accent chips — non-brand)
        accent: {
          300: '#8dbdce',
          400: '#62a4bc',
          500: '#3e8daa',
          600: '#2a7090',
        },
        // Tier palette — unchanged (semantic)
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
        // Editorial serif for headings — distinct from every SaaS sans
        display: [
          'Newsreader',
          'Georgia',
          'ui-serif',
          'serif',
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
      },
      boxShadow: {
        // Editorial shadows — no glow, just subtle depth
        'card':    '0 1px 2px rgba(19,20,24,.04), 0 1px 4px rgba(19,20,24,.03)',
        'card-lg': '0 4px 16px rgba(19,20,24,.07), 0 2px 6px rgba(19,20,24,.04)',
        'card-xs': '0 1px 2px rgba(19,20,24,.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      // Squarer border-radii (user directive 2026-07-01 — preserved)
      borderRadius: {
        'sm':    '0.125rem',
        DEFAULT: '0.125rem',
        'md':    '0.25rem',
        'lg':    '0.25rem',
        'xl':    '0.375rem',
        '2xl':   '0.5rem',
        '3xl':   '0.625rem',
      },
    },
  },
  plugins: [],
};
