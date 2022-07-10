import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24Pluse = (props: SvgProps) => (
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
      d="M11.9999 3.40002C12.3313 3.40002 12.5999 3.66865 12.5999 4.00002V11.4H19.9999C20.3313 11.4 20.5999 11.6687 20.5999 12C20.5999 12.3314 20.3313 12.6 19.9999 12.6H12.5999V20C12.5999 20.3314 12.3313 20.6 11.9999 20.6C11.6685 20.6 11.3999 20.3314 11.3999 20V12.6H3.9999C3.66853 12.6 3.3999 12.3314 3.3999 12C3.3999 11.6687 3.66853 11.4 3.9999 11.4H11.3999V4.00002C11.3999 3.66865 11.6685 3.40002 11.9999 3.40002Z"
      fill={props.color}
    />
  </Svg>
)
