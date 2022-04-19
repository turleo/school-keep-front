module.exports = {
  pwa: {
    name: 'School Keep',
    themeColor: '#448aff',
    msTileColor: this.themeColor
  },
  publicPath: '/static/',
  productionSourceMap: process.env.NODE_ENV !== 'production'
}
