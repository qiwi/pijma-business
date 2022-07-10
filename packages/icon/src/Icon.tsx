import { IconName, IconSize } from '@pijma/business-icons'
import { Theme, useComponent, useTheme } from '@pijma/react-native'
import { Svg, SvgCircle, SvgProps } from '@pijma/react-native-svg'
import React, { ComponentType } from 'react'

const iconSizeName = (size: number, name: string) =>
  [
    'Icon',
    size,
    ...(name.match(/[\dA-Za-z]+/g) || []).map(
      (w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`,
    ),
  ].join('')

export interface IconProps {
  name: IconName
  size: IconSize
  color?: keyof Theme['color']
}

export const Icon = ({ name, size, color = 'black' }: IconProps) => {
  const theme = useTheme()
  const icons = useComponent() as Record<string, ComponentType<SvgProps>>
  const IconSizeName = icons[iconSizeName(size, name)]
  if (IconSizeName) {
    return <IconSizeName color={theme.color[color]} />
  }
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      focusable={true}
    >
      <SvgCircle
        cx={size / 2}
        cy={size / 2}
        r={(size - 4) / 2}
        fill={theme.color[color]}
      />
    </Svg>
  )
}

export default Icon
