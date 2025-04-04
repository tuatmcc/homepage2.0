module.exports = {
  plugins: [
    'autoprefixer',
    '@tailwindcss/postcss',
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
