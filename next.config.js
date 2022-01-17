module.exports = {
  webpack5: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 注意: 上記で webpack を提供しているので、それを `require` するべきではない
    // webpack の設定のカスタマイズを実行する
    // 重要: 変更された設定を返す
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    return config;
  },
  webpackDevMiddleware: config => {
    // webpack dev middleware の設定のカスタマイズを実行する
    // 重要: 変更された設定を返す
    return config;
  }
};
