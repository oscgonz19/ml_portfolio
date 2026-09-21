/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f4f0e8',
          2: '#ece7dc',
          3: '#e2dccf',
        },
        ink: {
          DEFAULT: '#1b1916',
          2: '#4a4540',
          3: '#7d766d',
        },
        rule: '#d6cfc1',
        ochre: {
          DEFAULT: '#b4552a',
          deep: '#8f3f1c',
        },
        moss: '#4d6b4c',
        ice: '#6f8fa3',
        night: '#141311',
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
