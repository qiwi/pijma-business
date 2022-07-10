import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowDownV4 = (props: SvgProps) => (
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
      d="M21.4142 24.6716C20.6332 25.4526 19.3668 25.4526 18.5858 24.6716L5.70711 11.7929C5.31658 11.4024 4.68342 11.4024 4.29289 11.7929C3.90237 12.1834 3.90237 12.8166 4.29289 13.2071L17.1716 26.0858C18.7337 27.6479 21.2663 27.6479 22.8284 26.0858L35.7071 13.2071C36.0976 12.8166 36.0976 12.1834 35.7071 11.7929C35.3166 11.4024 34.6834 11.4024 34.2929 11.7929L21.4142 24.6716Z"
      fill={props.color}
    />
  </Svg>
)
