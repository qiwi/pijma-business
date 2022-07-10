import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40TimeV2 = (props: SvgProps) => (
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
      d="M4.03174 19.5H6.09375C6.64603 19.5 7.09375 19.9477 7.09375 20.5C7.09375 21.0523 6.64603 21.5 6.09375 21.5H4.03174C4.5261 29.2638 10.7362 35.4739 18.5 35.9683V33.9062C18.5 33.354 18.9477 32.9062 19.5 32.9062C20.0523 32.9062 20.5 33.354 20.5 33.9062V35.9683C28.2638 35.4739 34.4739 29.2638 34.9683 21.5H32.9062C32.354 21.5 31.9062 21.0523 31.9062 20.5C31.9062 19.9477 32.354 19.5 32.9062 19.5H34.9683C34.4739 11.7362 28.2638 5.5261 20.5 5.03174V7.09375C20.5 7.64603 20.0523 8.09375 19.5 8.09375C18.9477 8.09375 18.5 7.64603 18.5 7.09375V5.03174C10.7362 5.5261 4.5261 11.7362 4.03174 19.5ZM2 20.5C2 10.835 9.83502 3 19.5 3C29.165 3 37 10.835 37 20.5C37 30.165 29.165 38 19.5 38C9.83502 38 2 30.165 2 20.5ZM19.5 11.25C20.0523 11.25 20.5 11.6977 20.5 12.25V20.5C20.5 20.7652 20.3946 21.0196 20.2071 21.2071L16.0821 25.3321C15.6916 25.7226 15.0584 25.7226 14.6679 25.3321C14.2774 24.9416 14.2774 24.3084 14.6679 23.9179L18.5 20.0858V12.25C18.5 11.6977 18.9477 11.25 19.5 11.25Z"
      fill={props.color}
    />
  </Svg>
)
