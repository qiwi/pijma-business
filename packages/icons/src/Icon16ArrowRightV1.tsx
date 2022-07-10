import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowRightV1 = (props: SvgProps) => (
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
      d="M1.5 4C1.5 2.61929 2.61929 1.5 4 1.5H12C13.3807 1.5 14.5 2.61929 14.5 4V12C14.5 13.3807 13.3807 14.5 12 14.5H4C2.61929 14.5 1.5 13.3807 1.5 12V4ZM4 2.5C3.17157 2.5 2.5 3.17157 2.5 4V7.5H8.79289L6.31311 5.02022C6.11785 4.82496 6.11785 4.50838 6.31311 4.31311C6.50838 4.11785 6.82496 4.11785 7.02022 4.31311L10.7071 8L7.02022 11.6869C6.82496 11.8821 6.50838 11.8821 6.31311 11.6869C6.11785 11.4916 6.11785 11.175 6.31311 10.9798L8.79289 8.5H2.5V12C2.5 12.8284 3.17157 13.5 4 13.5H12C12.8284 13.5 13.5 12.8284 13.5 12V4C13.5 3.17157 12.8284 2.5 12 2.5H4Z"
      fill={props.color}
    />
  </Svg>
)
