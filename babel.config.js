const env = process.env['NODE_ENV'];

const presets = [
  [
    '@babel/preset-env',
    {
      targets: 'defaults'
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
];

const plugins = [
  '@babel/plugin-transform-runtime',
  'babel-plugin-styled-components',
];

module.exports = {
  presets,
  plugins,
};