module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [require('stylelint')],
    }),
    require('postcss-easings'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({ stage: 0 }),
  ],
};
