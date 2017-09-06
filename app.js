const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const sugarml = require('sugarml')
const sugarss = require('sugarss')
const env = process.env.SPIKE_ENV

const reshapeOpts = htmlStandards({
  delimiters: ['{%', '%}'],
  unescapeDelimiters: ['{%=', '%}'],
  parser: sugarml,
  minify: env === 'production',
  locals: (ctx) => { return { pageId: pageId(ctx), foo: 'Hey!' }},
})


module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: { _skipSpikeProcessing: true }
          },
        ],
      },
    ]
  },
  reshape: reshapeOpts,
  postcss: cssStandards({
    parser: sugarss,
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards()
}
