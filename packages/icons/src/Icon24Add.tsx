import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24Add = (props: SvgProps) => (
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
      d="M2.3999 7.00002C2.3999 4.45951 4.45939 2.40002 6.9999 2.40002H16.9999C19.5404 2.40002 21.5999 4.45951 21.5999 7.00002V17C21.5999 19.5405 19.5404 21.6 16.9999 21.6H6.9999C4.45939 21.6 2.3999 19.5405 2.3999 17V7.00002ZM6.9999 3.60002C5.12213 3.60002 3.5999 5.12226 3.5999 7.00002V17C3.5999 18.8778 5.12213 20.4 6.9999 20.4H16.9999C18.8777 20.4 20.3999 18.8778 20.3999 17V7.00002C20.3999 5.12226 18.8777 3.60002 16.9999 3.60002H6.9999ZM11.3999 12.6V17H12.5999V12.6H16.9999V11.4H12.5999V7.00002H11.3999V11.4H6.9999V12.6H11.3999Z"
      fill={props.color}
    />
  </Svg>
)
