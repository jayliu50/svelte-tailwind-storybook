const production = !process.env.ROLLUP_WATCH;


module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.html"],
    enabled: production, // disable purge in dev
    options: {
      whitelist: [/svelte-/],
      /* eslint-disable no-unused-vars */
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
