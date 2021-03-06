import * as icons from '@pijma/business-icons'
import { Wrapper } from '@pijma/business-wrapper'
import { DecoratorFn, Parameters } from '@storybook/react'
import React from 'react'

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
      order: ['Pijma Business', '*', 'Playground'],
      locales: '',
    },
  },
}

export const decorators: DecoratorFn[] = [
  (Story) => <Wrapper components={icons}>{Story()}</Wrapper>,
]
