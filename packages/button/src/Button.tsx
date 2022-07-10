import { Icon, IconProps } from '@pijma/business-icon'
import { Pressable, PressableProps, Text, useTheme } from '@pijma/react-native'
import React from 'react'

export interface ButtonProps {
  color: 'orange' | 'white'
  text?: string
  icon?: IconProps['name']
  disabled?: PressableProps['disabled']
  testID?: PressableProps['testID']
  onPress?: PressableProps['onPress']
}

export const Button = ({
  color,
  text,
  icon,
  disabled = false,
  testID,
  onPress,
}: ButtonProps) => {
  const theme = useTheme()
  const white = color === 'white'
  return (
    <Pressable
      accessibilityRole="button"
      testID={testID}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      width={icon && text === undefined ? 42 : undefined}
      height={42}
      paddingHorizontal={icon && text === undefined ? undefined : 24}
      borderRadius={10}
      backgroundColor={({ pressed }) =>
        white
          ? disabled
            ? theme.color.white
            : pressed
            ? theme.color.orange
            : theme.color.white
          : disabled
          ? theme.color.silver
          : pressed
          ? theme.color.black
          : theme.color.orange
      }
      borderWidth={({ pressed }) =>
        white ? (pressed ? undefined : 1) : undefined
      }
      borderStyle={({ pressed }) =>
        white ? (pressed ? undefined : 'solid') : undefined
      }
      borderColor={({ pressed }) =>
        white
          ? disabled
            ? theme.color.silver
            : pressed
            ? undefined
            : theme.color.orange
          : undefined
      }
      disabled={disabled}
      onPress={onPress}
    >
      {({ pressed }) => (
        <>
          {text && (
            <Text
              paddingRight={text ? 4 : undefined}
              selectable={false}
              fontFamily={theme.text.p14.family}
              fontSize={theme.text.p14.size}
              fontStyle={theme.text.p14.style}
              fontWeight={theme.text.p14.weight}
              lineHeight={theme.text.p14.height}
              numberOfLines={1}
              color={
                white
                  ? disabled
                    ? theme.color.silver
                    : pressed
                    ? theme.color.white
                    : theme.color.orange
                  : theme.color.white
              }
            >
              {text}
            </Text>
          )}
          {icon && (
            <Icon
              name={icon}
              size={16}
              color={
                white
                  ? disabled
                    ? 'silver'
                    : pressed
                    ? 'white'
                    : 'orange'
                  : 'white'
              }
            />
          )}
        </>
      )}
    </Pressable>
  )
}

Button.displayName = 'Button'

export default Button
