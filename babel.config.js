module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [],
  env: {
    test: {},
    development: {},
    production: {
      presets: ['minify'],
    },
  },
}
