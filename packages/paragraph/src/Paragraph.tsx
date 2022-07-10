import { Text, useTheme } from '@pijma/react-native'
import React, { ReactNode } from 'react'

export interface ParagraphProps {
  size: 10 | 14 | 16 | 19
  color?: 'black' | 'gray' | 'red' | 'green'
  lines?: number
  children?: ReactNode
}

export const Paragraph = ({
  size,
  color = 'black',
  lines,
  children,
}: ParagraphProps) => {
  const theme = useTheme()
  return (
    <Text
      fontFamily={theme.text[`p${size}`].family}
      fontSize={theme.text[`p${size}`].size}
      fontWeight={theme.text[`p${size}`].weight}
      fontStyle={theme.text[`p${size}`].style}
      lineHeight={theme.text[`p${size}`].height}
      color={theme.color[color]}
      numberOfLines={lines}
    >
      {children}
    </Text>
  )
}
