import { ResponsiveValue, TextStyle } from '@pijma/react-native'

declare module '@pijma/react-native' {
  export interface Theme {
    color: {
      black: TextStyle['color']
      white: TextStyle['color']
      gray: TextStyle['color']
      silver: TextStyle['color']
      cloud: TextStyle['color']
      orange: TextStyle['color']
      green: TextStyle['color']
      salad: TextStyle['color']
      red: TextStyle['color']
      pink: TextStyle['color']
    }
    text: {
      h1: {
        family: ResponsiveValue<TextStyle['fontFamily']>
        style: ResponsiveValue<TextStyle['fontStyle']>
        size: ResponsiveValue<TextStyle['fontSize']>
        weight: ResponsiveValue<TextStyle['fontWeight']>
        height: ResponsiveValue<TextStyle['lineHeight']>
      }
      h2: {
        family: ResponsiveValue<TextStyle['fontFamily']>
        style: ResponsiveValue<TextStyle['fontStyle']>
        size: ResponsiveValue<TextStyle['fontSize']>
        weight: ResponsiveValue<TextStyle['fontWeight']>
        height: ResponsiveValue<TextStyle['lineHeight']>
      }
      h3: {
        family: ResponsiveValue<TextStyle['fontFamily']>
        style: ResponsiveValue<TextStyle['fontStyle']>
        size: ResponsiveValue<TextStyle['fontSize']>
        weight: ResponsiveValue<TextStyle['fontWeight']>
        height: ResponsiveValue<TextStyle['lineHeight']>
      }
      p10: {
        family: ResponsiveValue<TextStyle['fontFamily']>
        style: ResponsiveValue<TextStyle['fontStyle']>
        size: ResponsiveValue<TextStyle['fontSize']>
        weight: ResponsiveValue<TextStyle['fontWeight']>
        height: ResponsiveValue<TextStyle['lineHeight']>
      }
      p14: {
        family: ResponsiveValue<TextStyle['fontFamily']>
        style: ResponsiveValue<TextStyle['fontStyle']>
        size: ResponsiveValue<TextStyle['fontSize']>
        weight: ResponsiveValue<TextStyle['fontWeight']>
        height: ResponsiveValue<TextStyle['lineHeight']>
      }
      p16: {
        family: ResponsiveValue<TextStyle['fontFamily']>
        style: ResponsiveValue<TextStyle['fontStyle']>
        size: ResponsiveValue<TextStyle['fontSize']>
        weight: ResponsiveValue<TextStyle['fontWeight']>
        height: ResponsiveValue<TextStyle['lineHeight']>
      }
      p19: {
        family: ResponsiveValue<TextStyle['fontFamily']>
        style: ResponsiveValue<TextStyle['fontStyle']>
        size: ResponsiveValue<TextStyle['fontSize']>
        weight: ResponsiveValue<TextStyle['fontWeight']>
        height: ResponsiveValue<TextStyle['lineHeight']>
      }
    }
  }
}
