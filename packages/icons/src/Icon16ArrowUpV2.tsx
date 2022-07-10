import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowUpV2 = (props: SvgProps) => (
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
      d="M4 14.5C2.61929 14.5 1.5 13.3807 1.5 12L1.5 4C1.5 2.61929 2.61929 1.5 4 1.5L12 1.5C13.3807 1.5 14.5 2.61929 14.5 4L14.5 12C14.5 13.3807 13.3807 14.5 12 14.5L4 14.5ZM2.5 12C2.5 12.8284 3.17157 13.5 4 13.5L7.5 13.5L7.5 7.20711L5.02022 9.68689C4.82496 9.88215 4.50838 9.88215 4.31311 9.68689C4.11785 9.49162 4.11785 9.17504 4.31311 8.97978L7.64645 5.64645C7.84171 5.45118 8.15829 5.45118 8.35355 5.64645L11.6869 8.97978C11.8821 9.17504 11.8821 9.49162 11.6869 9.68689C11.4916 9.88215 11.175 9.88215 10.9798 9.68689L8.5 7.20711L8.5 13.5L12 13.5C12.8284 13.5 13.5 12.8284 13.5 12L13.5 4C13.5 3.17157 12.8284 2.5 12 2.5L4 2.5C3.17157 2.5 2.5 3.17157 2.5 4L2.5 12Z"
      fill={props.color}
    />
  </Svg>
)
