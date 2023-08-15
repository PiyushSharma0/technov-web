/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //   darkblack: "#222831",
    //   lightblack: "#3c434e",
    //   darkwhite: "#ffffff",
    //   lightwhite: "#f7fafc",
    //   darkgrey: "#787a91",
    //   lightgrey: "#9ba4b4",
    //   primaryoff: "#99feff",
    //   primarylight: "#385cf0",
    //   primarydark: "#1d4cb0",
    //   highlight: "#f7f0c2",
    //   warningoff: "#ff3838",
    //   discordBg: "#404eed",
    // },

    fontFamily: {
      mainfont: ["Inter", "sans-serif"],
      codefont: ["Outfit", "sans-serif"],
      curlfont: ["Quicksand", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
