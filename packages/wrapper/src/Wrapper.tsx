import { light } from '@pijma/business-theme'
import {
  BreakpointProvider,
  BreakpointProviderProps,
  ComponentProvider,
  ComponentProviderProps,
  CssLoader,
  ThemeProvider,
  ThemeProviderProps,
} from '@pijma/react-native'
import React from 'react'

export type WrapperProps = Partial<
  ComponentProviderProps & BreakpointProviderProps & ThemeProviderProps
>

export const Wrapper = ({
  components = {},
  theme = light,
  breakpoints = [600, 1200],
  children,
}: WrapperProps) => (
  <ComponentProvider components={components}>
    <ThemeProvider theme={theme}>
      <BreakpointProvider breakpoints={breakpoints}>
        <CssLoader href="https://static.qiwi.com/fonts/agipo/v1/index.css">
          <CssLoader href="https://static.qiwi.com/fonts/sussie-intl/v1/index.css">
            {children}
          </CssLoader>
        </CssLoader>
      </BreakpointProvider>
    </ThemeProvider>
  </ComponentProvider>
)
