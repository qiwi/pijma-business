import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowUpV4 = (props: SvgProps) => (
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
      d="M8.35355 6.06066C8.15829 5.8654 7.84171 5.8654 7.64645 6.06066L2.35355 11.3536C2.15829 11.5488 1.84171 11.5488 1.64645 11.3536C1.45118 11.1583 1.45118 10.8417 1.64645 10.6464L6.93934 5.35355C7.52513 4.76777 8.47487 4.76777 9.06066 5.35355L14.3536 10.6464C14.5488 10.8417 14.5488 11.1583 14.3536 11.3536C14.1583 11.5488 13.8417 11.5488 13.6464 11.3536L8.35355 6.06066Z"
      fill={props.color}
    />
  </Svg>
)
