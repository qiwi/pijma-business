import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowUpV4 = (props: SvgProps) => (
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
      d="M21.4142 15.3284C20.6332 14.5474 19.3668 14.5474 18.5858 15.3284L5.70711 28.2071C5.31658 28.5976 4.68342 28.5976 4.29289 28.2071C3.90237 27.8166 3.90237 27.1834 4.29289 26.7929L17.1716 13.9142C18.7337 12.3521 21.2663 12.3521 22.8284 13.9142L35.7071 26.7929C36.0976 27.1834 36.0976 27.8166 35.7071 28.2071C35.3166 28.5976 34.6834 28.5976 34.2929 28.2071L21.4142 15.3284Z"
      fill={props.color}
    />
  </Svg>
)
