import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowLeftV2 = (props: SvgProps) => (
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
      d="M6.88831 2.63026C7.09252 2.81616 7.10736 3.13239 6.92146 3.33659L3.13132 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8C14.5 8.27615 14.2761 8.5 14 8.5H3.13132L6.92146 12.6634C7.10736 12.8676 7.09252 13.1838 6.88831 13.3697C6.68411 13.5556 6.36788 13.5408 6.18198 13.3366L1.63026 8.33659C1.45658 8.14581 1.45658 7.8542 1.63026 7.66341L6.18198 2.66341C6.36788 2.45921 6.68411 2.44437 6.88831 2.63026Z"
      fill={props.color}
    />
  </Svg>
)
