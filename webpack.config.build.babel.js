import config from 'config'
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import SaveAssetsJson from 'assets-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import precss from 'precss'
import postcssPresetEnv from 'postcss-preset-env'

import webpackConfig, { JS_SOURCE } from './webpack.config.common'

// ----------------------------------------------------------
//  CONSTANT DECLARATION
// ----------------------------------------------------------

const S3_DEPLOY = config.get('s3.s3Deploy') || 'false'
const IS_S3_DEPLOY = String(S3_DEPLOY) === 'true'

const PUBLIC_PATH = IS_S3_DEPLOY
  ? process.env.AWS_CDN_URL
  : config.get('publicPath')
const APP_ENTRY_POINT = `${JS_SOURCE}/router`

// webpack 4 mode
// https://webpack.js.org/concepts/mode/
webpackConfig.mode = 'production'

const webpackProdOutput = {
  publicPath: PUBLIC_PATH,
  filename: `${config.get('assetPath')}/[name]-[hash].js`,
  chunkFilename: `${config.get('assetPath')}/[id].[hash].js`
}

const html = config.get('html')

// Please configure this section if you plan
// to deploy the generated html to production.
// I don't mind you name your page as Retro
// if you want to ...
const htmlPlugins = html.map(
  page =>
    new HtmlWebpackPlugin({
      title: page.title,
      template: `src/assets/Template/${page.template}`,
      inject: 'body',
      filename: page.filename,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    })
)

// ----------------------------------------------------------
//  Extending Webpack Configuration
// ----------------------------------------------------------

// Merges webpackProdOutput and webpackConfig.output
webpackConfig.output = Object.assign(webpackConfig.output, webpackProdOutput)

webpackConfig.module.rules = webpackConfig.module.rules.concat({
  test: /\.(?:css|scss)$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      ident: 'postcss',
      options: {
        sourceMap: true,
        plugins: () => [
          precss(),
          postcssPresetEnv({
            browsers: ['last 2 versions', 'ie >= 9'],
            compress: true
          })
        ]
      }
    },
    'resolve-url-loader',
    'sass-loader'
  ]
})

webpackConfig.devtool = 'source-map'

webpackConfig.entry = {
  app: ['babel-polyfill', path.resolve(__dirname, APP_ENTRY_POINT)]
}

if (IS_S3_DEPLOY) {
  const S3Plugin = require('webpack-s3-plugin')

  // Please read README if you have no idea where
  // `process.env.AWS_ACCESS_KEY` is coming from
  const s3Config = new S3Plugin({
    // Only upload css and js
    // include: /.*\.(css|js)/,
    // s3Options are required
    s3Options: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY
    },
    s3UploadOptions: {
      Bucket: process.env.AWS_BUCKET
    },
    cdnizerCss: {
      test: /Images/,
      cdnUrl: process.env.AWS_CDN_URL
    }
  })

  webpackConfig.plugins = webpackConfig.plugins.concat(s3Config)
}

if (config.get('optimization.analyzeMode') === true) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

  webpackConfig.plugins = webpackConfig.plugins.concat(
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: config.get('optimization.analyze.port'),
      openAnalyzer: true
    })
  )
}

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    __CONFIG__: JSON.stringify(config.get('app'))
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  // how you want your code to be optimized
  // all configurable
  new webpack.IgnorePlugin(/un~$/),

  new SaveAssetsJson({
    path: path.join(__dirname, 'docroot'),
    filename: 'assets.json',
    prettyPrint: true,
    metadata: {
      version: process.env.PACKAGE_VERSION
    }
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: `${config.get('assetPath')}/[name]-[hash].css`,
    chunkFilename: `${config.get('assetPath')}/[id]-[hash].css`
  })
)

webpackConfig.plugins = webpackConfig.plugins.concat(htmlPlugins)

export default webpackConfig
