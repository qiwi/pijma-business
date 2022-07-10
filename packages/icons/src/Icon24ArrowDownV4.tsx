import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24ArrowDownV4 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.9899 14.6616C12.4431 15.2083 11.5567 15.2083 11.01 14.6616L3.42417 7.07577C3.18985 6.84145 2.80995 6.84145 2.57564 7.07577C2.34132 7.31008 2.34132 7.68998 2.57564 7.9243L10.1614 15.5101C11.1768 16.5254 12.823 16.5254 13.8384 15.5101L21.4242 7.9243C21.6585 7.68998 21.6585 7.31008 21.4242 7.07577C21.1899 6.84145 20.81 6.84145 20.5756 7.07577L12.9899 14.6616Z"
      fill={props.color}
    />
  </Svg>
)
