const {
  override, 
  addBabelPlugin, 
  getBabelLoader, 
  addWebpackPlugin, 
  addWebpackModuleRule
} = require('customize-cra');

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (config, env) => {
  const prod = config.mode === 'production';
  const babelLoader = getBabelLoader(config);
  
  return override(
    addWebpackModuleRule({
      test: /\.worker\.ts$/,
      use: [
        {
          loader: 'worker-loader',
        },
        {
          loader: babelLoader.loader,
          options: babelLoader.options
        }
      ]
    })
  )(config, env)
}