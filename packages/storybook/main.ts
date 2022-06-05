import { StorybookConfig } from '@storybook/core-common'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'

const config: StorybookConfig = {
  stories: ['../../**/src/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-jest',
    '@storybook/addon-react-native-web',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  // @ts-ignore
  webpackFinal: async (config) => ({
    ...config,
    ...{
      resolve: {
        ...(config?.resolve || {}),
        ...{
          plugins: [
            ...(config?.resolve?.plugins || []),
            new TsconfigPathsPlugin(),
          ],
        },
      },
    },
  }),
}

module.exports = config
