import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16Alert = (props: SvgProps) => (
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
      d="M7.5 9.47727L7.5 4.75L8.5 4.75L8.5 9.47727L7.5 9.47727ZM7.5 11.25L7.5 10.3636L8.5 10.3636L8.5 11.25L7.5 11.25Z"
      fill={props.color}
    />
  </Svg>
)
