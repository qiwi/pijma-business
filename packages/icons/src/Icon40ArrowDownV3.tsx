import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowDownV3 = (props: SvgProps) => (
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
      d="M7.78917 22.9173C8.17763 22.5247 8.81079 22.5214 9.20337 22.9099L19 32.6037L19 5C19 4.44772 19.4477 4 20 4C20.5523 4 21 4.44772 21 5L21 32.6037L30.7966 22.9099C31.1892 22.5214 31.8224 22.5247 32.2108 22.9173C32.5993 23.3099 32.5959 23.9431 32.2034 24.3315L20.7034 35.7108C20.3137 36.0964 19.6863 36.0964 19.2966 35.7108L7.79663 24.3315C7.40405 23.9431 7.40071 23.3099 7.78917 22.9173Z"
      fill={props.color}
    />
  </Svg>
)
