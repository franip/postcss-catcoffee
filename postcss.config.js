module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import')({
      plugins: [require('stylelint')],
    }),
    require('postcss-preset-env')({ stage: 0 }),
    require('precss'),
    require('postcss-short'),
    require('postcss-reporter')({ clearReportedMessages: false }),
  ],
};
