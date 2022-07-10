import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Pluse = (props: SvgProps) => (
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
      d="M20 6C20.5523 6 21 6.44772 21 7V19H33C33.5523 19 34 19.4477 34 20C34 20.5523 33.5523 21 33 21H21V33C21 33.5523 20.5523 34 20 34C19.4477 34 19 33.5523 19 33V21H7C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19H19V7C19 6.44772 19.4477 6 20 6Z"
      fill={props.color}
    />
  </Svg>
)
