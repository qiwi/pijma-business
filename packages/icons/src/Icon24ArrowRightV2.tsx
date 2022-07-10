import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24ArrowRightV2 = (props: SvgProps) => (
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
      d="M13.7536 4.5705C13.5164 4.80188 13.5116 5.18175 13.743 5.41897L19.5767 11.4H3.0001C2.66873 11.4 2.4001 11.6687 2.4001 12C2.4001 12.3314 2.66873 12.6 3.0001 12.6H19.5767L13.743 18.5811C13.5116 18.8183 13.5164 19.1982 13.7536 19.4295C13.9908 19.6609 14.3707 19.6562 14.602 19.419L21.4296 12.419C21.6569 12.1859 21.6569 11.8141 21.4296 11.5811L14.602 4.58108C14.3707 4.34387 13.9908 4.33913 13.7536 4.5705Z"
      fill={props.color}
    />
  </Svg>
)
