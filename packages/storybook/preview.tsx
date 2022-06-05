import { Parameters } from '@storybook/react'

export const parameters: Parameters = {
  layout: 'centered',
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
