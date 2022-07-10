import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40MinusInCircle = (props: SvgProps) => (
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
      d="M10.75 20C10.75 19.4477 11.1977 19 11.75 19H28.25C28.8023 19 29.25 19.4477 29.25 20C29.25 20.5523 28.8023 21 28.25 21H11.75C11.1977 21 10.75 20.5523 10.75 20ZM20 34.5C28.0081 34.5 34.5 28.0081 34.5 20C34.5 11.9919 28.0081 5.5 20 5.5C11.9919 5.5 5.5 11.9919 5.5 20C5.5 28.0081 11.9919 34.5 20 34.5ZM20 36.5C29.1127 36.5 36.5 29.1127 36.5 20C36.5 10.8873 29.1127 3.5 20 3.5C10.8873 3.5 3.5 10.8873 3.5 20C3.5 29.1127 10.8873 36.5 20 36.5Z"
      fill={props.color}
    />
  </Svg>
)
