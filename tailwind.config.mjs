/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#243880',
          container: '#3D5099',
          light: '#5569B3',
          dark: '#1A2A60',
        },
        secondary: {
          fixed: '#CEE5FF',
          'on-fixed': '#001D32',
        },
        surface: {
          DEFAULT: '#fcf8fb',
          'container-low': '#f6f3f5',
          'container-lowest': '#ffffff',
          'container-high': '#eae7ea',
          bright: '#ffffff',
          dim: '#ddd9dd',
        },
        'on-surface': {
          DEFAULT: '#1b1b1d',
          variant: '#46464f',
        },
        outline: {
          DEFAULT: '#777680',
          variant: '#c5c5d2',
        },
        ocean: {
          50: '#e6f6ff',
          100: '#b3e4ff',
          200: '#80d2ff',
          300: '#4dc0ff',
          400: '#1aaeff',
          500: '#0288D1',
          600: '#026da7',
        },
        gold: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#F59E0B',
          600: '#c47f09',
        },
        navy: {
          50: '#eef1f8',
          100: '#d5daf0',
          200: '#aab5e1',
          300: '#7f90d2',
          400: '#556bc3',
          500: '#3D5099',
          600: '#31407a',
          700: '#25305c',
          800: '#19203d',
          900: '#0c101f',
          950: '#060810',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        ambient: '0px 20px 40px rgba(27, 27, 29, 0.06)',
        'ambient-lg': '0px 30px 60px rgba(27, 27, 29, 0.08)',
        'ambient-sm': '0px 8px 20px rgba(27, 27, 29, 0.04)',
      },
      letterSpacing: {
        tight: '-0.02em',
        label: '0.05em',
      },
    },
  },
  plugins: [],
};
