const path = require('path');
const webpack = require('webpack');
const packageJson = require('./package.json');

function resolve(dir) {
  return path.join(__dirname, dir);
}
const vueConfig = {
  configureWebpack: {
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        APP_VERSION: packageJson.version,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'));

    config
      .plugin('ScriptExtHtmlWebpackPlugin')
      .after('html')
      .use('script-ext-html-webpack-plugin', [
        {
          // 将 runtime 作为内联引入不单独存在
          inline: /runtime\..*\.js$/,
        },
      ])
      .end();

    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'),
          minChunks: 3, //  被至少用三次以上打包分离
          priority: 5, // 优先级
          reuseExistingChunk: true, // 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
        },
        node_vendors: {
          name: 'chunk-libs',
          chunks: 'initial', // 只打包初始时依赖的第三方
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
        },
      },
    });
    config.optimization.runtimeChunk('single');
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/assets/scss/util/_variable.scss";
        @import "@/assets/scss/util/_mixins.scss";
        @import "@/assets/scss/layout/_media.scss";
        `,
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#d9b765',
            'error-color': '#d9b765',
          },
        },
      },
    },
  },
  productionSourceMap: false,
};

module.exports = vueConfig;
