/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        judson: ['Judson', 'sans-serif'],
        archivo: ['Archivo Black', 'sans-serif'],
      },
      borderRadius: {
        extraLarge: '13rem',
      },
    },
    rotate: {
      30: '30deg',
    },
    colors: {
      backgroundColor: '#ECC4C9',
      primaryColor: '#D1788F',
      secondaryColor: '#201F41',
      accentColor: '#E4ACB2',
      accentColor2: '#422D53',
      textColor: '#FFFFFF',
      black: '#020202',
      amber: '#ffcc00',
    },
    plugins: [],
  },
};
