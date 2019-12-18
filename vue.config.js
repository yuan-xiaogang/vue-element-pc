
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
        .set('@', resolve('src'))
        .set('_c',resolve('src/components'))
    },
    devServer: {
        proxy: {
          '/api': {
            target: '<url>',
            ws: true,
            changeOrigin: true
          },
          '/foo': {
            target: '<other_url>'
          }
        }
      }
}