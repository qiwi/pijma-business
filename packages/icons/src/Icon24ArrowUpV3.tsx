import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24ArrowUpV3 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.57038 10.2466C4.80176 10.4838 5.18163 10.4885 5.41884 10.2571L11.3999 4.42339L11.3999 21C11.3999 21.3314 11.6685 21.6 11.9999 21.6C12.3313 21.6 12.5999 21.3314 12.5999 21L12.5999 4.42339L18.581 10.2571C18.8182 10.4885 19.198 10.4838 19.4294 10.2466C19.6608 10.0093 19.6561 9.62946 19.4188 9.39809L12.4188 2.5705C12.1858 2.3432 11.814 2.3432 11.581 2.5705L4.58096 9.39809C4.34374 9.62946 4.33901 10.0093 4.57038 10.2466Z"
      fill={props.color}
    />
  </Svg>
)
