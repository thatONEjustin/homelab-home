const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"FiraCode"', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [
    require('tailwind-dracula')(),
  ],
}
