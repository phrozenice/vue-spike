const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.SPIKE_ENV



module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock', '**/vue/*.*'],
  reshape: htmlStandards({
    locals: (ctx) => { return { pageId: pageId(ctx), foo: 'bar' } },
    minify: env === 'production'
  }),

  module: {
    rules: [
      { 
        test: /\.vue$/,
        use: [
          { 
            loader: 'vue-loader',
            options: {
              _skipSpikeProcessing: true,
            }
          },
        ]
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': './vue',
    }
  },


  postcss: cssStandards({
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards()
}
