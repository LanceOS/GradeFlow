// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }], // Add jsxImportSource for NativeWind
      "nativewind/babel", // Add NativeWind Babel plugin
    ],
  };
};
