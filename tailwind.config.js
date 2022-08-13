/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/**/*.{css,scss}", "./index.html", "index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          heroWhite: "#E8E9EE",
          textColor: "#B7C1D8",
          greyColor: "#C1C2C6",
          sectionTitleColor: "#D9D9D9",
          blue: "#191F2E",
          blueDark: "#10141c",
          blueDark10: "#10141c3e",
        },
      },
      fontFamily: {
        Inter: '"Inter", sans-serif',
        Oswald: '"Oswald", sans-serif',
      },
      boxShadow: {
        'registerFormShadow': '0px 34px 44px -20px rgba(185, 206, 234, 0.25)',
      },
      screens: {
        'mobile-sm': '375px',

      },
      gridTemplateRows: {
        // Simple 8 row grid
        '3': 'repeat(3, 1fr)',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
    },
    plugins: [],
  }
};