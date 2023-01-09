const { CompiledExtractPlugin } = require('@compiled/webpack-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

/** @type {import('next').NextConfig} */
module.exports = {
  distDir: '_next',
  webpack: (config) => {
    config.module.generator.asset.publicPath = "/_next/";
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: '@compiled/webpack-loader',
        options: {
          extract: true,
        }
      }],
    },{
    test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
    })

    config.plugins.push(new MiniCssExtractPlugin(
      {
        filename: 'static/css/[name].[contenthash].css',
      }
    ), new CompiledExtractPlugin())

    config.optimization.minimizer.push(
        new CssMinimizerPlugin(),
    );

    config.optimization.minimize = true;

    return config
  },
}
