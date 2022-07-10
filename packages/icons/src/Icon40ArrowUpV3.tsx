import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowUpV3 = (props: SvgProps) => (
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
      d="M6.78917 17.0827C7.17763 17.4753 7.81079 17.4786 8.20337 17.0901L18 7.39632L18 35C18 35.5523 18.4477 36 19 36C19.5523 36 20 35.5523 20 35L20 7.39632L29.7966 17.0901C30.1892 17.4786 30.8224 17.4753 31.2108 17.0827C31.5993 16.6901 31.5959 16.0569 31.2034 15.6685L19.7034 4.28917C19.3137 3.90361 18.6863 3.90361 18.2966 4.28917L6.79663 15.6685C6.40405 16.0569 6.40071 16.6901 6.78917 17.0827Z"
      fill={props.color}
    />
  </Svg>
)
