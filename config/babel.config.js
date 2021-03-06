module.exports = function(api) {
  api.cache.using(() => process.env.NODE_ENV);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["@babel/plugin-proposal-class-properties"];

  return {
    presets,
    plugins
  };
};
