module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        keyframes: {
          blink: {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0 },
          },
        },
        animation: {
          blink: "blink 1s steps(2, start) infinite",
        },
      },
    },
    plugins: [],
  };