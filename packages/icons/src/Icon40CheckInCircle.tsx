import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40CheckInCircle = (props: SvgProps) => (
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
      d="M20 34.5C28.0081 34.5 34.5 28.0081 34.5 20C34.5 11.9919 28.0081 5.5 20 5.5C11.9919 5.5 5.5 11.9919 5.5 20C5.5 28.0081 11.9919 34.5 20 34.5ZM20 36.5C29.1127 36.5 36.5 29.1127 36.5 20C36.5 10.8873 29.1127 3.5 20 3.5C10.8873 3.5 3.5 10.8873 3.5 20C3.5 29.1127 10.8873 36.5 20 36.5Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.9605 13.5212C29.3491 13.9136 29.3461 14.5468 28.9537 14.9354L17.4649 26.3148L11.0925 20.7534C10.6764 20.3902 10.6334 19.7585 10.9966 19.3424C11.3597 18.9263 11.9914 18.8834 12.4075 19.2465L17.3788 23.5851L27.5463 13.5145C27.9387 13.1258 28.5718 13.1289 28.9605 13.5212Z"
      fill={props.color}
    />
  </Svg>
)
