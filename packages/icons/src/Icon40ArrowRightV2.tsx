import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowRightV2 = (props: SvgProps) => (
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
      d="M22.9173 6.78917C22.5247 7.17763 22.5214 7.81079 22.9099 8.20337L32.6037 18H5C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H32.6037L22.9099 29.7966C22.5214 30.1892 22.5247 30.8224 22.9173 31.2108C23.3099 31.5993 23.9431 31.5959 24.3315 31.2034L35.7108 19.7034C36.0964 19.3137 36.0964 18.6863 35.7108 18.2966L24.3315 6.79663C23.9431 6.40405 23.3099 6.40071 22.9173 6.78917Z"
      fill={props.color}
    />
  </Svg>
)
