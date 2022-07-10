import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16Burger = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 3.5C2.5 3.22386 2.72386 3 3 3H13C13.2761 3 13.5 3.22386 13.5 3.5C13.5 3.77614 13.2761 4 13 4H3C2.72386 4 2.5 3.77614 2.5 3.5ZM2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H13C13.2761 7.5 13.5 7.72386 13.5 8C13.5 8.27614 13.2761 8.5 13 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8ZM2.5 12.5C2.5 12.2239 2.72386 12 3 12H13C13.2761 12 13.5 12.2239 13.5 12.5C13.5 12.7761 13.2761 13 13 13H3C2.72386 13 2.5 12.7761 2.5 12.5Z"
      fill={props.color}
    />
  </Svg>
)
