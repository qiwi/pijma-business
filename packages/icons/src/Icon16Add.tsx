import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16Add = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      d="M11.3333 8H8M4.66667 8H8M8 8V4.66667M8 8V11.3333M5 14H11C12.6569 14 14 12.6569 14 11V5C14 3.34315 12.6569 2 11 2H5C3.34315 2 2 3.34315 2 5V11C2 12.6569 3.34315 14 5 14Z"
      stroke={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 5C1.5 3.067 3.067 1.5 5 1.5H11C12.933 1.5 14.5 3.067 14.5 5V11C14.5 12.933 12.933 14.5 11 14.5H5C3.067 14.5 1.5 12.933 1.5 11V5ZM5 2.5C3.61929 2.5 2.5 3.61929 2.5 5V11C2.5 12.3807 3.61929 13.5 5 13.5H11C12.3807 13.5 13.5 12.3807 13.5 11V5C13.5 3.61929 12.3807 2.5 11 2.5H5ZM7.5 8.5V11.3333H8.5V8.5H11.3333V7.5H8.5V4.66667H7.5V7.5H4.66667V8.5H7.5Z"
      fill={props.color}
    />
  </Svg>
)
