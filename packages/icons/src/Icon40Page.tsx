import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Page = (props: SvgProps) => (
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
      d="M9.28571 6C7.47106 6 6 7.47106 6 9.28571V30.7143C6 32.5289 7.47106 34 9.28571 34H30.7143C32.5289 34 34 32.5289 34 30.7143V16.7143H28.5714C25.6522 16.7143 23.2857 14.3478 23.2857 11.4286V6H9.28571ZM25.2857 7.41421L32.5858 14.7143H28.5714C26.7568 14.7143 25.2857 13.2432 25.2857 11.4286V7.41421ZM4 9.28571C4 6.36649 6.36649 4 9.28571 4H24.2857C24.5509 4 24.8053 4.10536 24.9928 4.29289L35.7071 15.0072C35.8946 15.1947 36 15.4491 36 15.7143V30.7143C36 33.6335 33.6335 36 30.7143 36H9.28571C6.36649 36 4 33.6335 4 30.7143V9.28571Z"
      fill={props.color}
    />
  </Svg>
)
