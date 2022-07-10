import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16Mail = (props: SvgProps) => (
  <Svg
    width={17}
    height={16}
    viewBox="0 0 17 16"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 5C0.5 3.61929 1.61929 2.5 3 2.5H11C12.3807 2.5 13.5 3.61929 13.5 5V11.5C13.5 12.8807 12.3807 14 11 14H3C1.61929 14 0.5 12.8807 0.5 11.5V5ZM3 3.5C2.17157 3.5 1.5 4.17157 1.5 5V11.5C1.5 12.3284 2.17157 13 3 13H11C11.8284 13 12.5 12.3284 12.5 11.5V5C12.5 4.17157 11.8284 3.5 11 3.5H3Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.35118 3.26823C1.56547 3.09407 1.88038 3.12661 2.05454 3.34091L6.61183 8.94852C6.81193 9.19473 7.18778 9.19473 7.38787 8.94852L11.9452 3.34091C12.1193 3.12661 12.4342 3.09407 12.6485 3.26823C12.8628 3.44239 12.8954 3.7573 12.7212 3.97159L8.16391 9.5792C7.56363 10.3178 6.43608 10.3178 5.8358 9.5792L1.2785 3.97159C1.10434 3.7573 1.13688 3.44239 1.35118 3.26823Z"
      fill={props.color}
    />
  </Svg>
)
