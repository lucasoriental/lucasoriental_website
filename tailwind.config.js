const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4k": "2560px",
    },
    extend: {
      backgroundImage: {
        "homeSections": "url('/images/fundo.jpg')",
      },
      colors: {
        HiringLightPrimary: "#E23030",
        HiringLightSecondary: "#9A0404",
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
