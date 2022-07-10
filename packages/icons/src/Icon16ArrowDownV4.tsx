import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowDownV4 = (props: SvgProps) => (
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
      d="M8.35355 9.93934C8.15829 10.1346 7.84171 10.1346 7.64645 9.93934L2.35355 4.64644C2.15829 4.45118 1.84171 4.45118 1.64645 4.64644C1.45118 4.84171 1.45118 5.15829 1.64645 5.35355L6.93934 10.6464C7.52513 11.2322 8.47487 11.2322 9.06066 10.6464L14.3536 5.35355C14.5488 5.15829 14.5488 4.84171 14.3536 4.64644C14.1583 4.45118 13.8417 4.45118 13.6464 4.64644L8.35355 9.93934Z"
      fill={props.color}
    />
  </Svg>
)
