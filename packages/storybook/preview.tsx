import { Parameters } from '@storybook/react'

import { theme } from './theme'

export const parameters: Parameters = {
  layout: 'centered',
  docs: {
    theme,
  },
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      hidden: true,
    },
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  controls: {
    hideNoControlsWarning: true,
    sort: 'requiredFirst',
    include: [],
  },
  options: {
    storySort: {
      method: 'alphabetical',
      locales: '',
    },
  },
}
