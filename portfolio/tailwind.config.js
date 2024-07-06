/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-bg': "url('/assets/Galleries/bg.jpg')",
      },

      textColor: {
        skin: {
          base: 'var(--color-text-base)',
        },
      },
      fontFamily: {
        skin: {
          base: 'var(--font-text-base)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
        },
      },
    },

  },
  plugins: [],
};
