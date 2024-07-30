import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': 'Poppins'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #146EF5  -80%,  #080808 45%, #080808 60%, #3391CF 200%)',
        'featured-gradient': 'linear-gradient(45deg, #146EF5  -20%,  #080808 35%, #080808 60%, #146EF5 115%)',
        'pricing-gradient': 'linear-gradient(-45deg, #146EF5  -20%,  #080808 35%, #080808 60%, #146EF5 115%)',
        'client-gradient': 'linear-gradient(108.36deg, #146EF5 30%, #080808 70%)',

      },
      backgroundSize: {
        'small-gradient': '50% 50%', // Adjust the size here
      },
      backgroundPosition: {
        'gradient-position': 'center top', // Adjust the position here
      },

    },
  },
  plugins: [],
};
export default config;
