const c = (v) => `rgb(var(${v}) / <alpha-value>)`;
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: c("--bg"), surface: c("--surface"), fg: c("--fg"), muted: c("--muted"), accent: c("--accent"), line: c("--line") },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "42.5rem", wide: "72rem" },
    },
  },
  plugins: [],
};
