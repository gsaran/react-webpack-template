const { merge } = require("webpack-merge");

const applyPresets = (env = { presets: [] }) => {
  const presets = env.presets || [];
  const mergedPresets = [].concat(...[presets]);
  const mergeConfigs = mergedPresets.map((presetName) =>
    require(`./presets/webpack.${presetName}`)(env)
  );

  return merge({}, ...mergeConfigs);
};

module.exports = applyPresets;
