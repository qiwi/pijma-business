import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32Alert = (props: SvgProps) => (
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
      d="M16 26.9C22.0199 26.9 26.9 22.0199 26.9 16C26.9 9.9801 22.0199 5.1 16 5.1C9.9801 5.1 5.1 9.9801 5.1 16C5.1 22.0199 9.9801 26.9 16 26.9ZM16 28.5C22.9036 28.5 28.5 22.9036 28.5 16C28.5 9.09644 22.9036 3.5 16 3.5C9.09644 3.5 3.5 9.09644 3.5 16C3.5 22.9036 9.09644 28.5 16 28.5Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.2 18.8409L15.2 9.75L16.8 9.75L16.8 18.8409L15.2 18.8409ZM15.2 22.25L15.2 20.5455L16.8 20.5455L16.8 22.25L15.2 22.25Z"
      fill={props.color}
    />
  </Svg>
)