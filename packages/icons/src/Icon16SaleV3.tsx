import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16SaleV3 = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path d="M14 8.25H2" stroke={props.color} strokeLinecap="round" />
    <Path
      d="M9.5 4.5C9.5 5.32843 8.82843 6 8 6C7.17157 6 6.5 5.32843 6.5 4.5C6.5 3.67157 7.17157 3 8 3C8.82843 3 9.5 3.67157 9.5 4.5Z"
      stroke={props.color}
      strokeLinecap="round"
    />
    <Path
      d="M9.5 12C9.5 12.8284 8.82843 13.5 8 13.5C7.17157 13.5 6.5 12.8284 6.5 12C6.5 11.1716 7.17157 10.5 8 10.5C8.82843 10.5 9.5 11.1716 9.5 12Z"
      stroke={props.color}
      strokeLinecap="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 8.25C1.5 7.97386 1.72386 7.75 2 7.75H14C14.2761 7.75 14.5 7.97386 14.5 8.25C14.5 8.52614 14.2761 8.75 14 8.75H2C1.72386 8.75 1.5 8.52614 1.5 8.25Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3.5C7.44772 3.5 7 3.94772 7 4.5C7 5.05228 7.44772 5.5 8 5.5C8.55228 5.5 9 5.05228 9 4.5C9 3.94772 8.55228 3.5 8 3.5ZM6 4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5C10 5.60457 9.10457 6.5 8 6.5C6.89543 6.5 6 5.60457 6 4.5ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11ZM6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12Z"
      fill={props.color}
    />
  </Svg>
)
