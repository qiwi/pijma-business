import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24ArrowUpV4 = (props: SvgProps) => (
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
      d="M12.9899 9.33844C12.4431 8.79171 11.5567 8.79171 11.01 9.33844L3.42417 16.9242C3.18985 17.1585 2.80995 17.1585 2.57564 16.9242C2.34132 16.6899 2.34132 16.31 2.57564 16.0757L10.1614 8.48992C11.1768 7.47455 12.823 7.47455 13.8384 8.48992L21.4242 16.0757C21.6585 16.31 21.6585 16.6899 21.4242 16.9242C21.1899 17.1585 20.81 17.1585 20.5756 16.9242L12.9899 9.33844Z"
      fill={props.color}
    />
  </Svg>
)
