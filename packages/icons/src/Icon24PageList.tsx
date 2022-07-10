import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24PageList = (props: SvgProps) => (
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
      d="M5.57133 3.60002C4.48254 3.60002 3.5999 4.48266 3.5999 5.57145V18.4286C3.5999 19.5174 4.48254 20.4 5.57133 20.4H18.4285C19.5173 20.4 20.3999 19.5174 20.3999 18.4286V10.0286H17.1428C15.3912 10.0286 13.9713 8.6087 13.9713 6.85717V3.60002H5.57133ZM15.1713 4.44855L19.5514 8.8286H17.1428C16.054 8.8286 15.1713 7.94596 15.1713 6.85717V4.44855ZM2.3999 5.57145C2.3999 3.81992 3.8198 2.40002 5.57133 2.40002H14.8199L21.5999 9.18007V18.4286C21.5999 20.1801 20.18 21.6 18.4285 21.6H5.57133C3.8198 21.6 2.3999 20.1801 2.3999 18.4286V5.57145ZM6.25705 12C6.25705 11.6687 6.52567 11.4 6.85705 11.4H11.9999C12.3313 11.4 12.5999 11.6687 12.5999 12C12.5999 12.3314 12.3313 12.6 11.9999 12.6H6.85705C6.52567 12.6 6.25705 12.3314 6.25705 12ZM6.25705 15.8572C6.25705 15.5258 6.52567 15.2572 6.85705 15.2572H9.42847C9.75984 15.2572 10.0285 15.5258 10.0285 15.8572C10.0285 16.1885 9.75984 16.4572 9.42847 16.4572H6.85705C6.52567 16.4572 6.25705 16.1885 6.25705 15.8572Z"
      fill={props.color}
    />
  </Svg>
)
