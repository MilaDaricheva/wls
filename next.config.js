const webpack = require('webpack');
const withPlugins = require('next-compose-plugins')
const withReactSvg = require('next-react-svg')
const path = require('path')

const nextConfiguration = {
  include: path.resolve(__dirname, './public/svg'),
  webpack(config, { dev, isServer }) {

    if (isServer || dev) {
      return config;
    }

    var isProduction = config.mode === 'production';
    if (!isProduction) {
      return config;
    }

    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    )

    return config
  }
}

module.exports = withPlugins([withReactSvg], nextConfiguration);
