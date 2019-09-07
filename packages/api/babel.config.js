module.exports = api => {
  const presets = [['@babel/preset-env', { targets: { node: '10' } }]];

  const plugins = [];

  api.cache(true);

  return {
    presets,
    plugins,
  };
};
