import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24ArrowDownV3 = (props: SvgProps) => (
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
      d="M4.57038 13.7534C4.80176 13.5162 5.18163 13.5115 5.41884 13.7429L11.3999 19.5766L11.3999 2.99998C11.3999 2.66861 11.6685 2.39998 11.9999 2.39998C12.3313 2.39998 12.5999 2.66861 12.5999 2.99998L12.5999 19.5766L18.581 13.7429C18.8182 13.5115 19.198 13.5162 19.4294 13.7534C19.6608 13.9907 19.6561 14.3705 19.4188 14.6019L12.4188 21.4295C12.1858 21.6568 11.814 21.6568 11.581 21.4295L4.58096 14.6019C4.34374 14.3705 4.33901 13.9907 4.57038 13.7534Z"
      fill={props.color}
    />
  </Svg>
)
