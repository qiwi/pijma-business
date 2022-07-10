import { Text, useTheme } from '@pijma/react-native'
import React, { ReactNode } from 'react'

export interface HeadingProps {
  size: 1 | 2 | 3
  children?: ReactNode
}

export const Heading = ({ size, children }: HeadingProps) => {
  const theme = useTheme()
  return (
    <Text
      fontFamily={theme.text[`h${size}`].family}
      fontSize={theme.text[`h${size}`].size}
      fontWeight={theme.text[`h${size}`].weight}
      fontStyle={theme.text[`h${size}`].style}
      lineHeight={theme.text[`h${size}`].height}
      color={theme.color.black}
    >
      {children}
    </Text>
  )
}

export default Heading
