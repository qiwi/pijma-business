import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Mail = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 12C4 8.68629 6.68629 6 10 6H30C33.3137 6 36 8.68629 36 12V28C36 31.3137 33.3137 34 30 34H10C6.68629 34 4 31.3137 4 28V12ZM10 8C7.79086 8 6 9.79086 6 12V28C6 30.2091 7.79086 32 10 32H30C32.2091 32 34 30.2091 34 28V12C34 9.79086 32.2091 8 30 8H10Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.03222 7.85189C6.45917 7.50157 7.08928 7.5637 7.43961 7.99065L18.4537 21.4141C19.2538 22.3893 20.7459 22.3893 21.546 21.4141L32.5601 7.99065C32.9104 7.5637 33.5406 7.50157 33.9675 7.85189C34.3945 8.20222 34.4566 8.83233 34.1063 9.25928L23.0922 22.6827C21.4919 24.633 18.5078 24.6331 16.9076 22.6827L5.89346 9.25928C5.54314 8.83233 5.60526 8.20222 6.03222 7.85189Z"
      fill={props.color}
    />
  </Svg>
)
