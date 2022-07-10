import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40InfoInCircle = (props: SvgProps) => (
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
      d="M23.75 27.7499L21 27.7499C19.8954 27.7499 19 26.8545 19 25.7499L19 18.7499L16.25 18.7499L16.25 16.7499L19 16.7499C20.1046 16.7499 21 17.6454 21 18.7499L21 25.7499L23.75 25.7499L23.75 27.7499ZM21 11.7499L21 13.9999L19 13.9999L19 11.7499L21 11.7499Z"
      fill={props.color}
    />
  </Svg>
)
