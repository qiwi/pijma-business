import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Search = (props: SvgProps) => (
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
      d="M18.7143 6C11.6924 6 6 11.6924 6 18.7143C6 25.7363 11.6924 31.4287 18.7143 31.4287C25.7363 31.4287 31.4287 25.7363 31.4287 18.7143C31.4287 11.6924 25.7363 6 18.7143 6ZM4 18.7143C4 10.5878 10.5878 4 18.7143 4C26.8408 4 33.4287 10.5878 33.4287 18.7143C33.4287 22.4177 32.0605 25.8015 29.8021 28.3879L35.7071 34.2929C36.0976 34.6834 36.0976 35.3166 35.7071 35.7071C35.3166 36.0976 34.6834 36.0976 34.2929 35.7071L28.3879 29.8021C25.8015 32.0605 22.4177 33.4287 18.7143 33.4287C10.5878 33.4287 4 26.8408 4 18.7143Z"
      fill={props.color}
    />
  </Svg>
)