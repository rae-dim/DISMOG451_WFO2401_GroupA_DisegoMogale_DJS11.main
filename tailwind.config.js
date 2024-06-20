module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    darkMode: 'class', // Enable to change theme based on system preference
    theme: {
        extend: {
          colors: {
            dark: {
              bg: "#15171E",
              bgLight: "#1C1E27",
              primary: "#be1adb",
              text_primary: "#F2F3F4",
              text_secondary: "#b1b2b3",
              card: "#121212",
              button: "#5c5b5b",
            },
            light: {
              bg: "#FFFFFF",
              bgLight: "#f0f0f0",
              primary: "#be1adb",
              text_primary: "#111111",
              text_secondary: "#48494a",
              card: "#FFFFFF",
              button: "#5c5b5b",
            },
          },
        },
      },
      plugins: [],
    };