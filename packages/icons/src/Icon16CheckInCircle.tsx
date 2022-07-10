import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16CheckInCircle = (props: SvgProps) => (
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
      d="M8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5ZM8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6052 5.37315C11.7996 5.56934 11.7981 5.88592 11.6019 6.08025L7.00591 10.6324L4.42124 8.37672C4.21319 8.19515 4.19172 7.87929 4.37329 7.67124C4.55487 7.46319 4.87072 7.44172 5.07877 7.62329L6.96285 9.26758L10.8981 5.36977C11.0943 5.17544 11.4109 5.17695 11.6052 5.37315Z"
      fill={props.color}
    />
  </Svg>
)
