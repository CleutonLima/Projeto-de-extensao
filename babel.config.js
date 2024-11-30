module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo', // Expo's default preset
      '@babel/preset-typescript', // For handling .ts and .tsx files
      '@babel/preset-env', // To transform modern ECMAScript code
      '@babel/preset-react', // To transform JSX into JavaScript
    ],
    plugins: [
      '@babel/plugin-transform-typescript', // For transforming TypeScript code
    ],
  };
};
