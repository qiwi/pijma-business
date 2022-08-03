import { Text, TextInput, useTheme, View } from '@pijma/react-native'
import React, { useState } from 'react'

export interface TextFieldProps {
  label: string
  value: string
  description?: string
  disabled?: boolean
  invalid?: boolean
  testID?: string
  onModify: (value: string) => void
}

export const TextField = ({
  label,
  value,
  description,
  disabled = false,
  invalid = false,
  testID,
  onModify,
}: TextFieldProps) => {
  const theme = useTheme()
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)
  return (
    <View position="relative" testID={testID}>
      <TextInput
        value={value}
        accessibilityState={{ disabled }}
        // @ts-ignore
        disabled={disabled}
        position="relative"
        zIndex={1}
        borderColor={
          invalid
            ? theme.color.red
            : disabled
            ? theme.color.silver
            : hovered || focused
            ? theme.color.orange
            : theme.color.gray
        }
        borderWidth={1}
        borderStyle="solid"
        borderRadius={10}
        fontFamily={theme.text.p14.family}
        fontSize={theme.text.p14.size}
        fontWeight={theme.text.p14.weight}
        lineHeight={theme.text.p14.height}
        color={theme.color.black}
        outlineWidth={0}
        paddingTop={17}
        paddingBottom={5}
        paddingHorizontal={16}
        transitionProperty="all"
        transitionDuration="300ms"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onChangeText={onModify}
      />
      <Text
        accessibilityState={{ disabled }}
        position="absolute"
        zIndex={0}
        top={focused || value ? 7 : 11}
        left={0}
        maxWidth="100%"
        fontFamily={
          focused || value ? theme.text.p10.family : theme.text.p14.family
        }
        fontSize={focused || value ? theme.text.p10.size : theme.text.p14.size}
        fontWeight={
          focused || value ? theme.text.p10.weight : theme.text.p14.weight
        }
        lineHeight={
          focused || value ? theme.text.p10.height : theme.text.p14.height
        }
        color={
          invalid && (focused || value)
            ? theme.color.red
            : focused || (hovered && value)
            ? theme.color.orange
            : hovered
            ? theme.color.black
            : theme.color.gray
        }
        paddingHorizontal={16}
        numberOfLines={1}
        // @ts-ignore
        transitionProperty="all"
        transitionDuration="300ms"
      >
        {label}
      </Text>
      <Text
        minHeight={theme.text.p10.height}
        marginTop={2}
        fontFamily={theme.text.p10.family}
        fontSize={theme.text.p10.size}
        fontWeight={theme.text.p10.weight}
        lineHeight={theme.text.p10.height}
        color={invalid ? theme.color.red : theme.color.gray}
      >
        {description}
      </Text>
    </View>
  )
}

TextField.displayName = 'TextField'
