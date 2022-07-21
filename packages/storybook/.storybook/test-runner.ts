import { TestRunnerConfig } from '@storybook/test-runner'

const config: TestRunnerConfig = {
  preRender: async (page) => {
    await page.evaluate('setTimeout = setImmediate')
  },
}

module.exports = config
