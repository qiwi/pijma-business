import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowLeftV3 = (props: SvgProps) => (
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
      d="M6.06051 7.64645C5.86525 7.84171 5.86525 8.15829 6.06051 8.35355L11.3534 13.6464C11.5487 13.8417 11.5487 14.1583 11.3534 14.3536C11.1581 14.5488 10.8416 14.5488 10.6463 14.3536L5.3534 9.06066C4.76762 8.47487 4.76762 7.52513 5.3534 6.93934L10.6463 1.64645C10.8416 1.45118 11.1581 1.45118 11.3534 1.64645C11.5487 1.84171 11.5487 2.15829 11.3534 2.35355L6.06051 7.64645Z"
      fill={props.color}
    />
  </Svg>
)
