module.exports = {
  // plugins: {
  //   "postcss-import": {},
  //   "postcss-url": {},
  //   "postcss-cssnext": {},
  //   "postcss-discard-duplicates": {},
  //   "postcss-icss-values": {},
  // },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),

    // ...(process.env.NODE_ENV === 'prod' ? [purgecss] : []),
  ],
};
