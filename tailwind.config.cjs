/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    //16px = 1rem
    fontSize: {
      xs: '.75rem', // 7.5px
      sm: '.875rem', // 8.75px
      base: '1rem', // 10px
      lg: '1.125rem', // 11.25px
      xl: '1.25rem', // 12.5px
      '2xl': '1.5rem', // 15px
      '3xl': '1.875rem', // 18.75px
    },
    extend: {
      colors: {
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-80': 'var(--color-primary-80)',
        'primary-60': 'var(--color-primary-60)',
        'primary-40': 'var(--color-primary-40)',
        'primary-20': '#000000',
        'primary-10': 'var(--color-primary-10)',
        'primary-5': 'var(--color-primary-5)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-dark': 'var(--color-secondary-dark)',
        'secondary-80': 'var(--color-secondary-80)',
        'secondary-60': 'var(--color-secondary-60)',
        'secondary-40': 'var(--color-secondary-40)',
        'secondary-20': 'var(--color-secondary-20)',
        'secondary-10': 'var(--color-secondary-10)',
        'secondary-5': 'var(--color-secondary-5)',
        'ink-light': 'var(--color-ink-light)',
        'ink-80': 'var(--color-ink-80)',
        'ink-60': 'var(--color-ink-60)',
        'ink-40': 'var(--color-ink-40)',
        'ink-20': 'var(--color-ink-20)',
        'ink-10': 'var(--color-ink-10)',
        'ink-5': 'var(--color-ink-5)',
        'error-bg': 'var(--color-error-bg)',
        'error-dark': 'var(--color-error-dark)',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px', //Tablet
      md: '768px',
      lg: '1024px', //Desktop
      xl: '1440px',
      max_sm: { 'max': '640px' },
      max_md: { 'max': '768px' },
      max_lg: { 'max': '1024px' },
      max_xl: { 'max': '1440px' },
      min_2xl: { 'min': '1536px' },
      min_3xl: { 'min': '1680px' },
      min_4xl: { 'min': '1920px' },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  prefix: 'tw-',
}
