import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24ArrowUpV2 = (props: SvgProps) => (
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
      d="M5.9999 21.6C4.01168 21.6 2.3999 19.9882 2.3999 18L2.3999 5.99998C2.3999 4.01175 4.01168 2.39997 5.9999 2.39997L17.9999 2.39997C19.9881 2.39997 21.5999 4.01175 21.5999 5.99997L21.5999 18C21.5999 19.9882 19.9881 21.6 17.9999 21.6L5.9999 21.6ZM3.5999 18C3.5999 19.3255 4.67442 20.4 5.9999 20.4L11.3999 20.4L11.3999 10.4485L7.42417 14.4242C7.18985 14.6586 6.80995 14.6586 6.57564 14.4242C6.34132 14.1899 6.34132 13.81 6.57564 13.5757L11.5756 8.57571C11.81 8.3414 12.1899 8.3414 12.4242 8.57571L17.4242 13.5757C17.6585 13.81 17.6585 14.1899 17.4242 14.4242C17.1899 14.6586 16.81 14.6586 16.5756 14.4242L12.5999 10.4485L12.5999 20.4L17.9999 20.4C19.3254 20.4 20.3999 19.3255 20.3999 18L20.3999 5.99997C20.3999 4.67449 19.3254 3.59997 17.9999 3.59997L5.9999 3.59998C4.67442 3.59998 3.5999 4.67449 3.5999 5.99998L3.5999 18Z"
      fill={props.color}
    />
  </Svg>
)
