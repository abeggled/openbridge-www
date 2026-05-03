/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bridge: {
          50:  '#f0faf7',
          100: '#d1f0e5',
          200: '#9fe1cb',
          300: '#5dcaa5',
          400: '#3db88f',
          500: '#25a07a',
          600: '#1a8063',
          700: '#15654e',
          800: '#10503d',
          900: '#085041',
          950: '#052e24',
        },
      },
      fontFamily: {
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
