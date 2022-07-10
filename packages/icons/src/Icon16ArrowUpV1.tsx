import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowUpV1 = (props: SvgProps) => (
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
      d="M8 14.5C7.72386 14.5 7.5 14.2761 7.5 14V4.70711L4.60355 7.60355C4.40829 7.79882 4.09171 7.79882 3.89645 7.60355C3.70118 7.40829 3.70118 7.09171 3.89645 6.89645L7.64645 3.14645C7.84171 2.95118 8.15829 2.95118 8.35355 3.14645L12.1036 6.89645C12.2988 7.09171 12.2988 7.40829 12.1036 7.60355C11.9083 7.79882 11.5917 7.79882 11.3964 7.60355L8.5 4.70711V14C8.5 14.2761 8.27614 14.5 8 14.5ZM14.5 2C14.5 2.27614 14.2761 2.5 14 2.5H2C1.72386 2.5 1.5 2.27614 1.5 2C1.5 1.72386 1.72386 1.5 2 1.5H14C14.2761 1.5 14.5 1.72386 14.5 2Z"
      fill={props.color}
    />
  </Svg>
)
