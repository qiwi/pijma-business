import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Burger = (props: SvgProps) => (
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
      d="M6 10C6 9.44772 6.44772 9 7 9H33C33.5523 9 34 9.44772 34 10C34 10.5523 33.5523 11 33 11H7C6.44772 11 6 10.5523 6 10ZM6 20C6 19.4477 6.44772 19 7 19H33C33.5523 19 34 19.4477 34 20C34 20.5523 33.5523 21 33 21H7C6.44772 21 6 20.5523 6 20ZM6 30C6 29.4477 6.44772 29 7 29H33C33.5523 29 34 29.4477 34 30C34 30.5523 33.5523 31 33 31H7C6.44772 31 6 30.5523 6 30Z"
      fill={props.color}
    />
  </Svg>
)
