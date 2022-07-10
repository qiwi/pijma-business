import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24ArrowLeftV2 = (props: SvgProps) => (
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
      d="M10.2464 4.5705C10.4836 4.80188 10.4884 5.18175 10.257 5.41897L4.42327 11.4H20.9999C21.3313 11.4 21.5999 11.6687 21.5999 12C21.5999 12.3314 21.3313 12.6 20.9999 12.6H4.42327L10.257 18.5811C10.4884 18.8183 10.4836 19.1982 10.2464 19.4295C10.0092 19.6609 9.62934 19.6562 9.39797 19.419L2.57038 12.419C2.34308 12.1859 2.34308 11.8141 2.57038 11.5811L9.39797 4.58108C9.62934 4.34387 10.0092 4.33913 10.2464 4.5705Z"
      fill={props.color}
    />
  </Svg>
)
