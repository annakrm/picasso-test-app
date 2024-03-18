const path = require('path');
const merge = require('webpack-merge').merge;

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;
const DefinePlugin = require('webpack').DefinePlugin;
const ProgressPlugin = require('webpack').ProgressPlugin;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const supportedLocales = ['en-US', 'ru'];

const isBundleAnalyser = process.env.BUNDLE_ANALYSER;
const isDevEnv = process.env.NODE_ENV === 'development';
const isStandaloneEnv = process.env.NODE_ENV === 'standalone';

const isDevOrStandalone = isDevEnv || isStandaloneEnv;

const config = {
  target: ['web', 'es5'],
  mode: isDevOrStandalone ? 'development' : 'production',
  entry: './src/index.tsx',
  stats: {
    preset: 'minimal',
    moduleTrace: true,
    errorDetails: true,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'picasso-test-app-' + (isDevOrStandalone ? '[name].js': '[name].[contenthash].js'),
    publicPath: '/',
    globalObject: 'self',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  optimization: {
    usedExports: true,
  },
  performance : {
    hints : false
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  devtool: isDevOrStandalone ? 'eval-source-map' : 'nosources-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        use: {
          loader: 'babel-loader',
        },
        include: [path.resolve('src')],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: { replaceAttrValues: { ['#626F84']: 'currentColor', ['#717681']: 'currentColor' } },
          },
          'url-loader',
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    isBundleAnalyser ? new BundleAnalyzerPlugin() : false,
    new MiniCssExtractPlugin({ filename: 'style-[hash].css' }),
    new ContextReplacementPlugin(
      /date\-fns[\/\\]/,
      new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]index\.js$`)
    ),
    new DefinePlugin({
      API_PATH: '',
      IS_DEV: isDevOrStandalone,
      BUILD_VERSION: 'build-v1.0.0',
      process: { env: {} },
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 4096,
      },
    }),
  ].filter(Boolean),
};

module.exports = config;