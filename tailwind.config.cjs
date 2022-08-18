module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        brand: {
          richBlack: "#141E26",
          gunmetal: "#233240",
          charcoal: "#364959",
          text: "#A3B8CC",
          quickSilver: "#A6A6A6",
          cultured: "#F2F2F2",
          culturedDark: "#E0E0E0",
          purple: "#5524BF",
          lavenderFloral: "#B091F2",
          blue: "#2405F2",
          jonquil: "#F2CB05",
          fireOpal: "#F26052",
        },
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
