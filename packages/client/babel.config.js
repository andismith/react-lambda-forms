module.exports = api => {
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
  ];

  api.cache(true);

  return {
    presets,
    plugins,
  };
};
