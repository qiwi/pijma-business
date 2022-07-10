import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowDownV1 = (props: SvgProps) => (
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
      d="M8 1.5C8.27614 1.5 8.5 1.72386 8.5 2V11.2929L11.3964 8.39645C11.5917 8.20118 11.9083 8.20118 12.1036 8.39645C12.2988 8.59171 12.2988 8.90829 12.1036 9.10355L8.35355 12.8536C8.15829 13.0488 7.84171 13.0488 7.64645 12.8536L3.89645 9.10355C3.70118 8.90829 3.70118 8.59171 3.89645 8.39645C4.09171 8.20118 4.40829 8.20118 4.60355 8.39645L7.5 11.2929V2C7.5 1.72386 7.72386 1.5 8 1.5ZM1.5 14C1.5 13.7239 1.72386 13.5 2 13.5H14C14.2761 13.5 14.5 13.7239 14.5 14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14Z"
      fill={props.color}
    />
  </Svg>
)
