import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowUpV3 = (props: SvgProps) => (
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
      d="M2.63026 6.88831C2.81616 7.09252 3.13239 7.10736 3.33659 6.92146L7.5 3.13132L7.5 14C7.5 14.2761 7.72386 14.5 8 14.5C8.27615 14.5 8.5 14.2761 8.5 14L8.5 3.13132L12.6634 6.92146C12.8676 7.10736 13.1838 7.09252 13.3697 6.88831C13.5556 6.68411 13.5408 6.36788 13.3366 6.18199L8.33659 1.63026C8.14581 1.45658 7.8542 1.45658 7.66341 1.63026L2.66341 6.18198C2.45921 6.36788 2.44437 6.68411 2.63026 6.88831Z"
      fill={props.color}
    />
  </Svg>
)
