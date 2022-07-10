import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32Check = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.5192 5.39135C29.8553 5.67811 29.8953 6.18306 29.6086 6.51919L14.8284 23.844C13.3113 25.6222 10.5636 25.6222 9.04656 23.844L2.39135 16.043C2.1046 15.7069 2.14462 15.2019 2.48074 14.9152C2.81687 14.6284 3.32182 14.6684 3.60858 15.0046L10.2638 22.8055C11.1421 23.835 12.7328 23.835 13.6111 22.8055L28.3914 5.48074C28.6781 5.14462 29.1831 5.1046 29.5192 5.39135Z"
      fill={props.color}
    />
  </Svg>
)
