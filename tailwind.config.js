const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "360px",
    },
    extend: {
      backgroundImage: {
        homeSections: "url('/images/fundo.jpg')",
      },
      fontFamily: {
        sans: ["var(--font-geologica)"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
