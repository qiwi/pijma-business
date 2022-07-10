import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowRightV3 = (props: SvgProps) => (
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
      d="M24.6715 18.5858C25.4526 19.3668 25.4526 20.6332 24.6715 21.4142L11.7929 34.2929C11.4023 34.6834 11.4023 35.3166 11.7929 35.7071C12.1834 36.0976 12.8165 36.0976 13.2071 35.7071L26.0858 22.8284C27.6478 21.2663 27.6478 18.7337 26.0858 17.1716L13.2071 4.29289C12.8165 3.90237 12.1834 3.90237 11.7929 4.29289C11.4023 4.68342 11.4023 5.31658 11.7929 5.70711L24.6715 18.5858Z"
      fill={props.color}
    />
  </Svg>
)
