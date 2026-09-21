/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Base del sitio (ya la usas)
        sans: ['Inter', 'system-ui', 'sans-serif'],

        // Hero: tu nombre, títulos muy grandes
        display: ['"DM Serif Display"', 'Georgia', 'serif'],

        // Etiquetas GeoAI, job title, headings técnicos
        geoai: ['"Space Grotesk"', 'system-ui', 'sans-serif'],

        // Código / cosas muy técnicas
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
