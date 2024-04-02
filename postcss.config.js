module.exports = {
  plugins: [
    'autoprefixer',
    [
      '@csstools/postcss-global-data',
      {
        files: ['./src/styles/_media.css'],
      },
    ],
    'postcss-nested',
    'postcss-custom-media',
    'postcss-media-minmax',
    'postcss-selector-not',
  ],
};
