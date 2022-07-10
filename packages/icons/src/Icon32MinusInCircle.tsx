import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32MinusInCircle = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.95 16C8.95 15.5582 9.30817 15.2 9.75 15.2H22.25C22.6918 15.2 23.05 15.5582 23.05 16C23.05 16.4418 22.6918 16.8 22.25 16.8H9.75C9.30817 16.8 8.95 16.4418 8.95 16ZM16 26.9C22.0199 26.9 26.9 22.0199 26.9 16C26.9 9.9801 22.0199 5.1 16 5.1C9.9801 5.1 5.1 9.9801 5.1 16C5.1 22.0199 9.9801 26.9 16 26.9ZM16 28.5C22.9036 28.5 28.5 22.9036 28.5 16C28.5 9.09644 22.9036 3.5 16 3.5C9.09644 3.5 3.5 9.09644 3.5 16C3.5 22.9036 9.09644 28.5 16 28.5Z"
      fill={props.color}
    />
  </Svg>
)
