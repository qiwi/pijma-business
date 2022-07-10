import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32CheckInCircle = (props: SvgProps) => (
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
      d="M22.8186 11.062C23.1295 11.3759 23.1271 11.8824 22.8132 12.1933L14.6101 20.3183C14.3121 20.6134 13.837 20.6284 13.5211 20.3527L9.22418 16.6027C8.8913 16.3122 8.85695 15.8068 9.14747 15.4739C9.43798 15.141 9.94335 15.1067 10.2762 15.3972L14.0126 18.6581L21.6872 11.0566C22.0011 10.7456 22.5077 10.7481 22.8186 11.062Z"
      fill={props.color}
    />
  </Svg>
)
