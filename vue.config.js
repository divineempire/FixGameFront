const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('st', path.resolve(__dirname, 'src/static'));
    ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(rule => {
      config.module
        .rule('scss')
        .oneOf(rule)
        .use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [
            path.resolve(__dirname, 'src/assets/css/vars.scss')
          ]
        })
        .before('resolve-url-loader')
        .end()
        .use('resolve-url-loader')
        .loader('resolve-url-loader')
        .options({
          removeCR: true,
          sourceMap: true
        })
        .before('sass-loader')
        .end()
        .use('sass-loader')
        .loader('sass-loader')
        .tap(options => ({ ...options, sourceMap: true }))
    })
    config.module.rule('svg')
      .test(/\.svg$/)
      .exclude
      .add(path.resolve(__dirname, 'src/assets/icons'))
      .end()
    config.module.rule('svg-sprite')
      .test(/\.svg$/)
      .include
      .add(path.resolve(__dirname, 'src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [
          {
            cleanupIDs: {
              minify: false
            }
          },
          {
            removeViewBox: false
          },
          {
            removeAttributesBySelector: {
              selectors: [
                {
                  selector: ['svg'],
                  attributes: ['width', 'height']
                },
                {
                  selector: ['svg:not(.goodFill) *'],
                  attributes: ['fill']
                },
                {
                  selector: ['svg:not(.goodFill)'],
                  attributes: ['fill']
                }
              ]
            }
          }]
      })
    config.module
      .rule('lint')
      .test(/\.js$/)
      .pre()
      .include
      .add(path.resolve(__dirname, 'src'))
      .end()
      .use('eslint')
      .loader('eslint-loader')
  }
}
