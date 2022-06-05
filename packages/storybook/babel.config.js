module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-native-web',
    'tsconfig-paths-module-resolver',
    'react-native-reanimated/plugin',
  ],
}
