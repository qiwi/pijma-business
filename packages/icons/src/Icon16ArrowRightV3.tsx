import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowRightV3 = (props: SvgProps) => (
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
      d="M9.93949 7.64645C10.1348 7.84171 10.1348 8.15829 9.93949 8.35355L4.6466 13.6464C4.45134 13.8417 4.45134 14.1583 4.6466 14.3536C4.84186 14.5488 5.15844 14.5488 5.3537 14.3536L10.6466 9.06066C11.2324 8.47487 11.2324 7.52513 10.6466 6.93934L5.3537 1.64645C5.15844 1.45118 4.84186 1.45118 4.6466 1.64645C4.45134 1.84171 4.45134 2.15829 4.6466 2.35355L9.93949 7.64645Z"
      fill={props.color}
    />
  </Svg>
)
