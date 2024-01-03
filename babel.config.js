module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@app": "./",
          },
        },
      ],
      "nativewind/babel",
      "react-native-reanimated/plugin",
    ],
  };
};
