/** Colour tokens are defined once in src/app/globals.css (:root). */
const c = (name) => `rgb(var(${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: c('--paper'), 2: c('--paper-2'), 3: c('--paper-3') },
        ink: { DEFAULT: c('--ink'), 2: c('--ink-2'), 3: c('--ink-3') },
        rule: c('--rule'),
        ochre: { DEFAULT: c('--ochre'), deep: c('--ochre-deep') },
        moss: c('--moss'),
        ice: c('--ice'),
        night: c('--night'),
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '76rem',
        prose: '42rem',
      },
      letterSpacing: {
        label: '0.14em',
      },
    },
  },
  plugins: [],
}
