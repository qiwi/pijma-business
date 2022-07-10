import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowLeftV3 = (props: SvgProps) => (
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
      d="M15.3285 18.5858C14.5474 19.3668 14.5474 20.6332 15.3285 21.4142L28.2071 34.2929C28.5977 34.6834 28.5977 35.3166 28.2071 35.7071C27.8166 36.0976 27.1835 36.0976 26.7929 35.7071L13.9142 22.8284C12.3522 21.2663 12.3522 18.7337 13.9142 17.1716L26.7929 4.29289C27.1835 3.90237 27.8166 3.90237 28.2071 4.29289C28.5977 4.68342 28.5977 5.31658 28.2071 5.70711L15.3285 18.5858Z"
      fill={props.color}
    />
  </Svg>
)
