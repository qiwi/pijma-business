import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Lock = (props: SvgProps) => (
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
      d="M20 6C16.134 6 13 9.13401 13 13L13 16H27V13C27 9.13401 23.866 6 20 6ZM29 16.1V13C29 8.02944 24.9706 4 20 4C15.0294 4 11 8.02944 11 13L11 16.1C8.71776 16.5633 7 18.581 7 21V31C7 33.7614 9.23858 36 12 36H28C30.7614 36 33 33.7614 33 31V21C33 18.581 31.2822 16.5633 29 16.1ZM12 18C10.3431 18 9 19.3431 9 21V31C9 32.6569 10.3431 34 12 34H28C29.6569 34 31 32.6569 31 31V21C31 19.3431 29.6569 18 28 18H12ZM17 25C17 24.4477 17.4477 24 18 24H22C22.5523 24 23 24.4477 23 25C23 25.5523 22.5523 26 22 26H21V29C21 29.5523 20.5523 30 20 30C19.4477 30 19 29.5523 19 29V26H18C17.4477 26 17 25.5523 17 25Z"
      fill={props.color}
    />
  </Svg>
)
